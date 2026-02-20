'use client'

import { Icon, IconButton, Popover, Portal } from '@chakra-ui/react'
import type { ReactElement } from 'react'
import { LuAlignRight, LuX } from 'react-icons/lu'

interface MobilePopoverProps {
  hideFrom?: 'sm' | 'md' | 'lg' | 'xl'
  children: (props: { onClose: () => void }) => ReactElement
}

export const MobilePopover = ({ children, hideFrom = 'md' }: MobilePopoverProps) => {
  return (
    <Popover.Root
      positioning={{
        placement: 'bottom',
        overflowPadding: 0,
        offset: { mainAxis: 12 },
      }}
    >
      <Popover.Context>
        {(context) => (
          <>
            <Popover.Trigger asChild>
              <IconButton
                aria-label="Open Menu"
                variant="ghost"
                size="sm"
                colorPalette="gray"
                hideFrom={hideFrom}
              >
                <Icon size="md">{context.open ? <LuX /> : <LuAlignRight />}</Icon>
              </IconButton>
            </Popover.Trigger>
            <Portal>
              <Popover.Positioner>
                <Popover.Content
                  textStyle="md"
                  boxShadow="none"
                  borderRadius="none"
                  maxW="unset"
                  px="4"
                  py="6"
                  width="var(--available-width)"
                  height="var(--available-height)"
                >
                  {children({ onClose: () => context.setOpen(false) })}
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </>
        )}
      </Popover.Context>
    </Popover.Root>
  )
}
