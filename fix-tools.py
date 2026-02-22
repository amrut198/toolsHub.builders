import os
import re

tools_dir = "components/tools"

# List of files to fix
files = [
    'MetaTagGenerator.tsx',
    'OpenGraphGenerator.tsx',
    'KeywordDensityChecker.tsx',
    'CharacterCounter.tsx',
    'WordCounter.tsx',
    'Base64EncoderDecoder.tsx',
    'CaseConverter.tsx',
    'RemoveDuplicateLines.tsx',
    'TextToSlug.tsx',
    'JSONFormatter.tsx',
    'HTMLMinifier.tsx',
    'CSSMinifier.tsx',
    'ImageCompressor.tsx',
    'PNGToJPG.tsx',
    'ResizeImage.tsx',
    'ImageCrop.tsx',
    'ImageToBase64.tsx',
    'RobotsGenerator.tsx',
    'SitemapGenerator.tsx',
]

for filename in files:
    filepath = os.path.join(tools_dir, filename)
    if not os.path.exists(filepath):
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Fix 1: Remove problematic imports and add correct ones
    # Remove InfoIcon, Divider, StatGroup, Stat, StatLabel, StatNumber, SliderFilledTrack, SliderTrack, SliderThumb
    # Add LuInfo to lucide-react imports if not present

    # Remove StatGroup import
    content = re.sub(r',\s*StatGroup', '', content)

    # Remove Stat, StatLabel, StatNumber imports
    content = re.sub(r',\s*Stat[^,]*', '', content)

    # Remove Slider components
    content = re.sub(r',\s*Slider(?:Track|FilledTrack|Thumb)[^,]*', '', content)

    # Remove StatLabel, StatNumber
    content = re.sub(r',\s*StatLabel[^,]*', '', content)
    content = re.sub(r',\s*StatNumber[^,]*', '', content)

    # Remove Divider if present
    content = re.sub(r',\s*Divider', '', content)

    # Fix Progress
    content = re.sub(r'import.*Progress.*from.*@chakra-ui/react.*\n', '', content)
    content = re.sub(r'<Progress[^>]*/>', '<Box width="full" height="3"><Box animate="pulse" width="full" height="3" bg="brand.500" borderRadius="full" opacity="0.6" /></Box>', content)

    # Fix Checkbox to use correct import
    content = re.sub(r'import.*Checkbox.*from.*@chakra-ui/react.*\n', '', content)

    # Add necessary imports if not present
    if 'Icon' not in content and '<Icon' in content:
        # Add Icon to imports
        import_match = re.search(r'from ["\']@chakra-ui/react["\']', content)
        if import_match:
            content = content[:import_match.end()] + ', Icon' + content[import_match.end():]

    # Add LuInfo to lucide-react if needed
    if 'LuInfo' in content or 'LuInfo' in content or '<LuInfo />' in content:
        lucide_import_match = re.search(r'from ["\']react-icons/lu["\']', content)
        if lucide_import_match:
            lucide_import = lucide_import_match.group(0)
            if 'LuInfo' not in lucide_import:
                # Add LuInfo
                content = content[:lucide_import_match.end()-1] + ', LuInfo' + content[lucide_import_match.end()-1:]
        else:
            # Add the import line
            import_match = re.search(r'(import \{[^}]+\} from ["\']lucide-react["\'])', content)
            if import_match:
                content = content[:import_match.end()-1] + ', LuInfo' + content[import_match.end()-1:]
            else:
                # Add new import
                content = 'import { LuInfo } from "react-icons/lu"\n' + content

    # Fix StatGroup closing
    content = re.sub(r'</StatGroup>', '</Flex>', content)
    content = re.sub(r'<StatGroup>', '<Flex gap={8} flexWrap="wrap">', content)

    # Fix Stat components
    def fix_stat(match):
        label = match.group(1) if match.group(1) else ''
        number = match.group(2) if match(2) else ''
        return f'<Box><Text fontSize="xs" color="gray.500">{label}</Text><Text fontSize="lg" color="gray.900">{number}</Text></Box>'
    content = re.sub(r'<Stat>\s*<StatLabel>([^<]*)</StatLabel>\s*<StatNumber>([^<]*)</StatNumber>\s*</Stat>', fix_stat, content)

    # Fix dividers
    content = re.sub(r'<Divider\s*/>', r'<Box h="1px" bg="gray.200" my={4} />', content)

    # Fix InputLeftElement and InputGroup
    if 'InputGroup' not in content:
        # Add InputGroup import if needed
        pass

    # Fix Label import
    content = re.sub(r',\s*Label', '', content)

    if 'Select' in content and 'import.*Select.*from' not in content:
        # Add Select import
        import_match = re.search(r'from ["\']@chakra-ui/react["\']', content)
        if import_match:
            content = content[:import_match.end()] + ', Select' + content[import_match.end():]

    # Fix colorScheme to colorPalette for Badge
    content = re.sub(r'colorScheme="red"', 'colorPalette="red"', content)
    content = re.sub(r'colorScheme="orange"', 'colorPalette="orange"', content)
    content = re.sub(r'colorScheme="green"', 'colorPalette="green"', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {filename}")

print("Done fixing tool components")
