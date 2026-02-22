'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { Box, Input } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

export function SearchInput({ defaultValue }: { defaultValue?: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;

        if (debounceRef.current) clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            if (value.trim()) {
                params.set('q', value.trim());
            } else {
                params.delete('q');
            }
            // Reset to page root when searching
            router.push(`/tools?${params.toString()}`);
        }, 350);
    }

    return (
        <Box position="relative" w="full" maxW="xl">
            <Box
                position="absolute"
                left="14px"
                top="50%"
                transform="translateY(-50%)"
                color="gray.400"
                pointerEvents="none"
                zIndex={1}
                display="flex"
                alignItems="center"
            >
                <FiSearch size={18} />
            </Box>
            <Input
                placeholder="Search tools..."
                defaultValue={defaultValue}
                onChange={handleChange}
                borderRadius="xl"
                size="lg"
                pl="44px"
            />
        </Box>
    );
}
