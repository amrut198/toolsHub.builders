# Fix all Chakra UI v3 compatibility issues in tools
import re
import os

tools_dir = "components/tools"

# Fix patterns for Chakra UI v3
fixes = [
    # Remove InfoIcon import and usage - use Icon from lucide-react instead
    (r'import.*InfoIcon.*from.*@chakra-ui/react.*\n', ''),
    (r'<InfoIcon />', '<Icon><LuInfo /></Icon>'),
    (r'InfoIcon', 'LuInfo'),

    # Fix Alert - replace with Box styling
    (r'<Alert status="([^"]*)"[^>]*>.*?<InfoIcon />.*?</Alert>',
     r'<Box bg="\1.50" border="1px solid" borderColor="\1.300" color="\1.700" p="4" borderRadius="xl">'),

    # Fix Slider components - use native input range instead
    (r'<SliderTrack>[^<]*<SliderFilledTrack [^>]*></SliderFilledTrack>[^<]*</SliderTrack>',
     r'<Box position="relative" height="24px"><Box position="absolute" inset="0" bg="gray.200" borderRadius="full"><Box h="full" bg="brand.500" borderRadius="full" style={{width: value + "%"}} /></Box></Box>'),

    # Fix Stat components - replace with Box/Text
    (r'<Stat[^>]*>.*?<StatLabel[^>]*>([^<]*)</StatLabel>.*?<StatNumber[^>]*>([^<]*)</StatNumber>.*?</Stat>',
     r'<Box><Text fontSize="xs" color="gray.500">\1</Text><Text fontSize="lg" color="gray.900">\2</Text></Box>'),

    # Fix StatGroup - replace with Flex
    (r'<StatGroup>', '<Flex gap={8} flexWrap="wrap">'),
    (r'</StatGroup>', '</Flex>'),

    # Fix Divider - use Box with border
    (r'<Divider />', r'<Box h="1px" bg="gray.200" my={4} />'),

    # Fix Progress
    (r'<Progress[^>]*isIndeterminate[^>]*/>', r'<Box width="full" height="3"><Box animate="pulse" width="full" height="3" bg="brand.500" borderRadius="full" opacity="0.6" /></Box>'),

    # Add LuInfo to lucide-react imports if needed
    (r'(import \{[^}]*Copy[^}]*\} from ["\']lucide-react["\'])', r'\1\nimport { LuInfo } from "lucide-react"'),
]

for file in os.listdir(tools_dir):
    if file.endswith('.tsx'):
        filepath = os.path.join(tools_dir, file)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Apply fixes
        original = content
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.DOTALL)

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file}")
