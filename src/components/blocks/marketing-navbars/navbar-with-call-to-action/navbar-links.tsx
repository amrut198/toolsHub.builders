'use client'

import { Link, Stack, type StackProps } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why toolshub-builders', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

interface NavbarLinksProps extends StackProps {
  onLinkClick?: () => void
}

export const NavbarLinks = ({ onLinkClick, ...props }: NavbarLinksProps) => {
  const [activeHash, setActiveHash] = useState('#home')

  useEffect(() => {
    // Set initial hash or default to #home
    const hash = window.location.hash || '#home'
    setActiveHash(hash)

    // Update active hash on hash change
    const handleHashChange = () => {
      const newHash = window.location.hash || '#home'
      setActiveHash(newHash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Get the target element
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Get navbar height to offset scroll position
      const navbarHeight = 80 // Approximate navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight

      // Smooth scroll to the target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })

      // Update URL hash
      window.history.pushState(null, '', href)
      setActiveHash(href)
    }

    if (onLinkClick) {
      onLinkClick()
    }
  }

  return (
    <Stack direction={{ base: 'column', lg: 'row' }} gap={{ base: '6', md: '8' }} {...props}>
      {navItems.map((item) => {
        const isActive = activeHash === item.href

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            fontWeight={isActive ? 'bold' : 'semibold'}
            color={isActive ? 'brand.solid' : 'fg.muted'}
            _hover={{
              color: isActive ? 'brand.emphasized' : 'brand.fg',
              textDecoration: 'none',
            }}
            _focus={{
              outline: 'none',
              boxShadow: 'none',
            }}
            _active={{
              outline: 'none',
              boxShadow: 'none',
            }}
          >
            {item.label}
          </Link>
        )
      })}
    </Stack>
  )
}
