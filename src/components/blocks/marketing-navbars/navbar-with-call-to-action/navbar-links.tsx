'use client'

import { Link, Stack, type StackProps } from '@chakra-ui/react'
import { useState } from 'react'

const navItems = [
  { label: 'Tools', href: '/tools' },
  { label: 'Categories', href: '/categories' },
  { label: 'New', href: '/new' },
  { label: 'Popular', href: '/popular' },
]

interface NavbarLinksProps extends StackProps {
  onLinkClick?: () => void
}

export const NavbarLinks = ({ onLinkClick, ...props }: NavbarLinksProps) => {
  const [activePath, setActivePath] = useState('/')

  const handleClick = (href: string) => {
    setActivePath(href)
    if (onLinkClick) onLinkClick()
  }

  return (
    <Stack direction={{ base: 'column', lg: 'row' }} gap={{ base: '6', md: '8' }} {...props}>
      {navItems.map((item) => {
        const isActive = activePath === item.href

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => handleClick(item.href)}
            fontWeight="semibold"
            fontSize="md"
            color={isActive ? 'brand.600' : 'gray.600'}
            _hover={{
              color: 'brand.500',
              textDecoration: 'none',
            }}
            transition="color 0.15s ease"
          >
            {item.label}
          </Link>
        )
      })}
    </Stack>
  )
}
