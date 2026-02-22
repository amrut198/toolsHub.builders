/**
 * Tools Components Index
 * Export all tool components
 */

'use client';

import React from 'react';
import {
  Box,
  Input,
  Text,
  Textarea,
  Button,
  Flex,
  VStack,
  HStack,
  SimpleGrid,
  Grid,
  Slider,
  NativeSelect,
  Badge,
  Link,
} from '@chakra-ui/react';
import { LuCopy, LuTrash2, LuDownload, LuUpload, LuImage } from 'react-icons/lu';

// --- Word Counter ---
export function WordCounter() {
  const [text, setText] = React.useState('');
  const stats = React.useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, '').length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim()).length;
    return { words, chars, charsNoSpace, sentences, paragraphs };
  }, [text]);

  return (
    <VStack gap={6}>
      <Flex justify="end" gap={2}>
        <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(text)}>Copy <LuCopy /></Button>
        <Button size="sm" variant="ghost" onClick={() => setText('')}>Clear <LuTrash2 /></Button>
      </Flex>
      <Textarea p={4} fontSize={'md'} value={text} onChange={(e) => setText(e.target.value)} placeholder="Type or paste your text here..." minH={300} borderRadius="xl" />
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} gap={4}>
        <Box p={4} bg="gray.50" borderRadius="xl" textAlign="center">
          <Text fontSize="md" color="gray.500">Words</Text>
          <Text fontSize="xl" color="brand.500">{stats.words}</Text>
        </Box>
        <Box p={4} bg="gray.50" borderRadius="xl" textAlign="center">
          <Text fontSize="md" color="gray.500">Characters</Text>
          <Text fontSize="xl" color="brand.500">{stats.chars}</Text>
        </Box>
        <Box p={4} bg="gray.50" borderRadius="xl" textAlign="center">
          <Text fontSize="md" color="gray.500">Sentences</Text>
          <Text fontSize="xl" color="brand.500">{stats.sentences}</Text>
        </Box>
      </SimpleGrid>
    </VStack>
  );
}

// --- Character Counter ---
export function CharacterCounter() {
  const [text, setText] = React.useState('');
  const [platform, setPlatform] = React.useState<'twitter' | 'instagram' | 'linkedin'>('twitter');
  const stats = React.useMemo(() => {
    const chars = text.length;
    const limits = { twitter: 280, instagram: 2200, linkedin: 3000 };
    const remaining = limits[platform] - chars;
    return { chars, remaining, limit: limits[platform], percentage: (chars / limits[platform]) * 100 };
  }, [text, platform]);

  return (
    <VStack gap={6}>
      <HStack gap={4}>
        <Button size="sm" variant={platform === 'twitter' ? 'solid' : 'outline'} onClick={() => setPlatform('twitter')}>Twitter (280)</Button>
        <Button size="sm" variant={platform === 'instagram' ? 'solid' : 'outline'} onClick={() => setPlatform('instagram')}>Instagram (2200)</Button>
        <Button size="sm" variant={platform === 'linkedin' ? 'solid' : 'outline'} onClick={() => setPlatform('linkedin')}>LinkedIn (3000)</Button>
      </HStack>
      <Box h={3} bg="gray.200" borderRadius="full">
        <Box h="full" borderRadius="full" bg={stats.percentage >= 100 ? 'red.500' : stats.percentage >= 90 ? 'orange.500' : 'green.500'} style={{ width: `${Math.min(stats.percentage, 100)}%` }} />
      </Box>
      <Textarea fontSize={'md'} p={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text..." minH={250} borderRadius="xl" />
      <Flex justify="end" gap={2}>
        <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(text)}>Copy <LuCopy /></Button>
        <Button size="sm" variant="ghost" onClick={() => setText('')}>Clear <LuTrash2 /></Button>
      </Flex>
    </VStack>
  );
}

// --- Case Converter ---
export function CaseConverter() {
  const [text, setText] = React.useState('');
  const convertText = (type: 'upper' | 'lower' | 'title' | 'sentence') => {
    if (type === 'upper') return text.toUpperCase();
    if (type === 'lower') return text.toLowerCase();
    if (type === 'title') return text.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    if (type === 'sentence') return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    return text;
  };

  return (
    <VStack gap={6}>
      <Textarea fontSize={'md'} p={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text..." minH={200} borderRadius="xl" />
      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={3}>
        <Button onClick={() => setText(convertText('upper'))} disabled={!text} h="auto" py={2}>UPPERCASE</Button>
        <Button onClick={() => setText(convertText('lower'))} disabled={!text} h="auto" py={2}>lowercase</Button>
        <Button onClick={() => setText(convertText('title'))} disabled={!text} h="auto" py={2}>Title Case</Button>
        <Button onClick={() => setText(convertText('sentence'))} disabled={!text} h="auto" py={2}>Sentence case</Button>
      </Grid>
    </VStack>
  );
}

// --- JSON Formatter ---
export function JSONFormatter() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (e) {
      setError('Invalid JSON');
    }
  };

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError(null);
    } catch (e) {
      setError('Invalid JSON');
    }
  };

  return (
    <VStack gap={6}>
      <Flex justify="end" gap={2}>
        <Button size="sm" variant="outline" onClick={() => setInput('{"name": "example"}')}>Load Example</Button>
      </Flex>
      <Flex direction={{ base: 'column', lg: 'row' }} gap={4} w="full">
        <VStack flex={1}>
          <Text fontSize="md" fontWeight={600}>Input JSON</Text>
          <Textarea fontSize={'md'} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste JSON here..." minH={250} borderRadius="xl" fontFamily="mono" />
        </VStack>
        <VStack flex={1}>
          <Text fontSize="md" fontWeight={600}>Output</Text>
          <Textarea fontSize={'md'} value={output} readOnly placeholder="Formatted JSON..." minH={250} borderRadius="xl" bg="gray.50" fontFamily="mono" />
        </VStack>
      </Flex>
      <Flex justify="center" gap={4}>
        <Button colorScheme="brand" onClick={handleFormat} disabled={!input}>Format / Beautify</Button>
        <Button variant="outline" onClick={handleMinify} disabled={!input}>Minify</Button>
        <Button variant="ghost" onClick={() => { setInput(''); setOutput(''); setError(null); }}>Clear</Button>
      </Flex>
      {error && <Text color="red.500">{error}</Text>}
    </VStack>
  );
}

// --- Base64 Encoder/Decoder ---
export function Base64EncoderDecoder() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [mode, setMode] = React.useState<'encode' | 'decode'>('encode');

  const handleConvert = React.useCallback(() => {
    try {
      if (mode === 'encode') {
        setOutput(btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(parseInt(p1, 16)))));
      } else {
        setOutput(decodeURIComponent(atob(input).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')));
      }
    } catch (e) {
      setOutput('Error: Invalid input for ' + mode);
    }
  }, [input, mode]);

  React.useEffect(() => {
    if (input) handleConvert();
  }, [input, mode, handleConvert]);

  return (
    <VStack gap={6}>
      <HStack>
        <Button size="sm" variant={mode === 'encode' ? 'solid' : 'outline'} onClick={() => setMode('encode')}>Encode</Button>
        <Button size="sm" variant={mode === 'decode' ? 'solid' : 'outline'} onClick={() => setMode('decode')}>Decode</Button>
      </HStack>
      <Textarea fontSize={'md'} p={4} value={input} onChange={(e) => setInput(e.target.value)} placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 to decode...'} minH={200} borderRadius="xl" />
      <Box w="full">
        <Flex justify="space-between" mb={2}>
          <Text fontSize="md" fontWeight={600}>Result</Text>
          <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(output)}>Copy <LuCopy /></Button>
        </Flex>
        <Textarea fontSize={'md'} p={4} value={output} readOnly placeholder="Result will appear here..." minH={150} borderRadius="xl" bg="gray.50" />
      </Box>
    </VStack>
  );
}

// --- Remove Duplicate Lines ---
export function RemoveDuplicateLines() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [caseSensitive, setCaseSensitive] = React.useState(true);

  const handleRemove = React.useCallback(() => {
    let lines = input.split('\n');
    if (!caseSensitive) {
      const seen = new Set();
      lines = lines.filter(line => {
        const lower = line.toLowerCase();
        if (seen.has(lower)) return false;
        seen.add(lower);
        return true;
      });
    } else {
      lines = [...new Set(lines)];
    }
    setOutput(lines.join('\n'));
  }, [input, caseSensitive]);

  return (
    <VStack gap={6}>
      <Flex justify="center" gap={4}>
        <Button size="sm" variant={caseSensitive ? 'solid' : 'outline'} onClick={() => setCaseSensitive(true)}>Case Sensitive</Button>
        <Button size="sm" variant={!caseSensitive ? 'solid' : 'outline'} onClick={() => setCaseSensitive(false)}>Case Insensitive</Button>
      </Flex>
      <Flex direction={{ base: 'column', lg: 'row' }} gap={4} w="full">
        <VStack flex={1}>
          <Text fontSize="md" fontWeight={600}>Input Text</Text>
          <Textarea fontSize={'md'} p={4} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste text with duplicate lines..." minH={250} borderRadius="xl" />
        </VStack>
        <VStack flex={1}>
          <Text fontSize="md" fontWeight={600}>Result</Text>
          <Textarea fontSize={'md'} p={4} value={output} readOnly placeholder="Result will appear here..." minH={250} borderRadius="xl" bg="gray.50" />
        </VStack>
      </Flex>
      <Button onClick={handleRemove} disabled={!input}>Remove Duplicates</Button>
    </VStack>
  );
}

// --- Text to Slug ---
export function TextToSlug() {
  const [input, setInput] = React.useState('');
  const [separator, setSeparator] = React.useState<'-' | '_'>('-');
  const slug = React.useMemo(() => {
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_]+/g, separator)
      .replace(/^-+|-+$/g, '');
  }, [input, separator]);

  return (
    <VStack gap={6}>
      <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your text..." size="lg" borderRadius="xl" />
      <HStack>
        <Button size="sm" variant={separator === '-' ? 'solid' : 'outline'} onClick={() => setSeparator('-')}>Hyphen (-)</Button>
        <Button size="sm" variant={separator === '_' ? 'solid' : 'outline'} onClick={() => setSeparator('_')}>Underscore (_)</Button>
      </HStack>
      <Box bg="gray.50" p={4} borderRadius="xl" w="full">
        <Flex justify="space-between" align="center">
          <Text fontSize="md" fontWeight={600}>Your slug:</Text>
          <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(slug)}>Copy <LuCopy /></Button>
        </Flex>
        <Text fontSize="md" bg="white" p={3} borderRadius="lg" display="block" mt={2} wordBreak="break-all">{slug || 'your-slug-here'}</Text>
      </Box>
    </VStack>
  );
}

// --- HTML Minifier ---
export function HTMLMinifier() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [options, setOptions] = React.useState({ removeComments: true, collapseWhitespace: true });

  const handleMinify = React.useCallback(() => {
    let result = input;
    if (options.removeComments) {
      result = result.replace(/<!--[\s\S]*?-->/g, '');
    }
    if (options.collapseWhitespace) {
      result = result.replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim();
    }
    setOutput(result);
  }, [input, options]);

  return (
    <VStack gap={6}>
      <Flex gap={4} wrap="wrap">
        <Button size="sm" variant={options.removeComments ? 'solid' : 'outline'} onClick={() => setOptions({ ...options, removeComments: !options.removeComments })}>Remove Comments</Button>
        <Button size="sm" variant={options.collapseWhitespace ? 'solid' : 'outline'} onClick={() => setOptions({ ...options, collapseWhitespace: !options.collapseWhitespace })}>Collapse Whitespace</Button>
      </Flex>
      <Flex direction={{ base: 'column', lg: 'row' }} gap={4} w="full">
        <VStack flex={1}>
          <Text fontSize="md" fontWeight={600}>Input HTML</Text>
          <Textarea fontSize={'md'} p={4} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste HTML here..." minH={250} borderRadius="xl" fontFamily="mono" />
        </VStack>
        <VStack flex={1}>
          <Text fontSize="md" fontWeight={600}>Minified HTML</Text>
          <Textarea fontSize={'md'} value={output} readOnly placeholder="Minified HTML..." minH={250} borderRadius="xl" bg="gray.50" fontFamily="mono" />
        </VStack>
      </Flex>
      <HStack>
        <Button onClick={handleMinify} disabled={!input}>Minify HTML</Button>
        <Button variant="outline" onClick={() => navigator.clipboard.writeText(output)}>Copy <LuCopy /></Button>
      </HStack>
    </VStack>
  );
}

// --- CSS Minifier ---
export function CSSMinifier() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');

  const handleMinify = React.useCallback(() => {
    let result = input
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Collapse whitespace
      .replace(/\s*([\{\}:;,])\s*/g, '$1') // Remove space around symbols
      .replace(/;\}/g, '}') // Remove last semicolon
      .trim();
    setOutput(result);
  }, [input]);

  return (
    <VStack gap={6}>
      <Flex direction={{ base: 'column', lg: 'row' }} gap={4} w="full">
        <VStack flex={1}>
          <Text fontSize="md" fontWeight={600}>Input CSS</Text>
          <Textarea fontSize={'md'} p={4} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste CSS here..." minH={250} borderRadius="xl" fontFamily="mono" />
        </VStack>
        <VStack flex={1}>
          <Text fontSize="md" fontWeight={600}>Minified CSS</Text>
          <Textarea fontSize={'md'} value={output} readOnly placeholder="Minified CSS..." minH={250} borderRadius="xl" bg="gray.50" fontFamily="mono" />
        </VStack>
      </Flex>
      <HStack>
        <Button onClick={handleMinify} disabled={!input}>Minify CSS</Button>
        <Button variant="outline" onClick={() => navigator.clipboard.writeText(output)}>Copy <LuCopy /></Button>
      </HStack>
    </VStack>
  );
}

// --- JWT Decoder ---
export function JWTDecoder() {
  const [input, setInput] = React.useState('');
  const [header, setHeader] = React.useState('');
  const [payload, setPayload] = React.useState('');
  const [error, setError] = React.useState('');

  const handleDecode = React.useCallback(() => {
    try {
      const parts = input.split('.');
      if (parts.length !== 3) throw new Error('Invalid JWT format');
      setHeader(JSON.stringify(JSON.parse(atob(parts[0])), null, 2));
      setPayload(JSON.stringify(JSON.parse(atob(parts[1])), null, 2));
      setError('');
    } catch (e) {
      setError('Invalid JWT token');
      setHeader('');
      setPayload('');
    }
  }, [input]);

  return (
    <VStack gap={6}>
      <Textarea fontSize={'md'} p={4} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste JWT token here..." minH={120} borderRadius="xl" fontFamily="mono" />
      <Button onClick={handleDecode} disabled={!input}>Decode JWT</Button>
      {error && <Text color="red.500">{error}</Text>}
      {header && (
        <Flex direction={{ base: 'column', lg: 'row' }} gap={4} w="full">
          <VStack flex={1}>
            <Text fontSize="md" fontWeight={600}>Header</Text>
            <Textarea fontSize={'md'} value={header} readOnly minH={200} borderRadius="xl" bg="gray.50" fontFamily="mono" />
          </VStack>
          <VStack flex={1}>
            <Text fontSize="md" fontWeight={600}>Payload</Text>
            <Textarea fontSize={'md'} value={payload} readOnly minH={200} borderRadius="xl" bg="gray.50" fontFamily="mono" />
          </VStack>
        </Flex>
      )}
    </VStack>
  );
}

// --- Image to Base64 ---
export function ImageToBase64() {
  const [base64, setBase64] = React.useState('');
  const [fileName, setFileName] = React.useState('');

  const handleFile = React.useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setBase64(e.target?.result as string);
      setFileName(file.name);
    };
    reader.readAsDataURL(file);
  }, []);

  return (
    <VStack gap={6}>
      <Box
        w="full"
        p={8}
        border="2px dashed"
        borderColor="gray.300"
        borderRadius="xl"
        textAlign="center"
        cursor="pointer"
        _hover={{ borderColor: 'brand.500', bg: 'gray.50' }}
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <LuUpload size={32} color="gray" style={{ margin: '0 auto 8px' }} />
        <Text fontWeight={600}>Click to upload or drag and drop</Text>
        <Text fontSize="sm" color="gray.500">PNG, JPG, GIF up to 10MB</Text>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </Box>
      {base64 && (
        <Box w="full">
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="md" fontWeight={600}>Base64 Output ({fileName})</Text>
            <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(base64)}>Copy <LuCopy /></Button>
          </Flex>
          <Textarea p={4} fontSize={'md'} value={base64} readOnly minH={200} borderRadius="xl" bg="gray.50" fontFamily="mono" />
        </Box>
      )}
    </VStack>
  );
}

// --- Image Compressor ---
export function ImageCompressor() {
  const [originalImage, setOriginalImage] = React.useState<string>('');
  const [compressedImage, setCompressedImage] = React.useState<string>('');
  const [quality, setQuality] = React.useState(80);
  const [originalSize, setOriginalSize] = React.useState(0);
  const [compressedSize, setCompressedSize] = React.useState(0);

  const handleFile = React.useCallback((file: File) => {
    setOriginalSize(file.size);
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      compressImage(e.target?.result as string, quality);
    };
    reader.readAsDataURL(file);
  }, [quality]);

  const compressImage = React.useCallback((dataUrl: string, qual: number) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.drawImage(img, 0, 0);
      const compressed = canvas.toDataURL('image/jpeg', qual / 100);
      setCompressedImage(compressed);
      // Calculate approximate size
      setCompressedSize(Math.round(compressed.length * 0.75));
    };
    img.src = dataUrl;
  }, []);

  React.useEffect(() => {
    if (originalImage) {
      compressImage(originalImage, quality);
    }
  }, [quality, originalImage, compressImage]);

  const downloadImage = () => {
    const a = document.createElement('a');
    a.href = compressedImage;
    a.download = 'compressed.jpg';
    a.click();
  };

  return (
    <VStack gap={6}>
      <Box
        w="full"
        p={8}
        border="2px dashed"
        borderColor="gray.300"
        borderRadius="xl"
        textAlign="center"
        cursor="pointer"
        _hover={{ borderColor: 'brand.500', bg: 'gray.50' }}
        onClick={() => document.getElementById('compress-file')?.click()}
      >
        <LuUpload size={32} color="gray" style={{ margin: '0 auto 8px' }} />
        <Text fontWeight={600}>Upload image to compress</Text>
        <input
          id="compress-file"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </Box>
      {originalImage && (
        <>
          <Box w="full">
            <Text fontSize="md" fontWeight={600} mb={2}>Quality: {quality}%</Text>
            <Slider.Root value={[quality]} onValueChange={(details) => setQuality(details.value[0])} min={10} max={100}>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb index={0} />
            </Slider.Root>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            <Box>
              <Text fontSize="sm" color="gray.500" mb={2}>Original ({(originalSize / 1024).toFixed(1)} KB)</Text>
              <img src={originalImage} alt="Original" style={{ borderRadius: '0.5rem', width: '100%' }} />
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500" mb={2}>Compressed ({(compressedSize / 1024).toFixed(1)} KB)</Text>
              <img src={compressedImage} alt="Compressed" style={{ borderRadius: '0.5rem', width: '100%' }} />
            </Box>
          </SimpleGrid>
          <Button onClick={downloadImage}>Download Compressed Image <LuDownload /></Button>
        </>
      )}
    </VStack>
  );
}

// --- PNG to JPG ---
export function PNGToJPG() {
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const [jpgUrl, setJpgUrl] = React.useState<string>('');

  const handleFile = React.useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target?.result as string);
      convertToJpg(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const convertToJpg = React.useCallback((dataUrl: string) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      // Fill white background for transparent images
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
      setJpgUrl(canvas.toDataURL('image/jpeg', 0.9));
    };
    img.src = dataUrl;
  }, []);

  const downloadJpg = () => {
    const a = document.createElement('a');
    a.href = jpgUrl;
    a.download = 'converted.jpg';
    a.click();
  };

  return (
    <VStack gap={6}>
      <Box
        w="full"
        p={8}
        border="2px dashed"
        borderColor="gray.300"
        borderRadius="xl"
        textAlign="center"
        cursor="pointer"
        _hover={{ borderColor: 'brand.500', bg: 'gray.50' }}
        onClick={() => document.getElementById('png-jpg-file')?.click()}
      >
        <LuImage size={32} color="gray" style={{ margin: '0 auto 8px' }} />
        <Text fontWeight={600}>Upload PNG to convert to JPG</Text>
        <input
          id="png-jpg-file"
          type="file"
          accept="image/png"
          style={{ display: 'none' }}
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </Box>
      {imageUrl && (
        <>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            <Box>
              <Text fontSize="sm" color="gray.500" mb={2}>Original PNG</Text>
              <img src={imageUrl} alt="PNG" style={{ borderRadius: '0.5rem', width: '100%' }} />
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500" mb={2}>Converted JPG</Text>
              <img src={jpgUrl} alt="JPG" style={{ borderRadius: '0.5rem', width: '100%' }} />
            </Box>
          </SimpleGrid>
          <Button onClick={downloadJpg} >Download JPG <LuDownload /></Button>
        </>
      )}
    </VStack>
  );
}

// --- Resize Image ---
export function ResizeImage() {
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const [resizedUrl, setResizedUrl] = React.useState<string>('');
  const [width, setWidth] = React.useState(800);
  const [height, setHeight] = React.useState(600);
  const [maintainAspect, setMaintainAspect] = React.useState(true);
  const [aspectRatio, setAspectRatio] = React.useState(1);

  const handleFile = React.useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target?.result as string);
      const img = new Image();
      img.onload = () => {
        setWidth(img.width);
        setHeight(img.height);
        setAspectRatio(img.width / img.height);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  React.useEffect(() => {
    if (maintainAspect && imageUrl) {
      setHeight(Math.round(width / aspectRatio));
    }
  }, [width, maintainAspect, aspectRatio, imageUrl]);

  React.useEffect(() => {
    if (maintainAspect && imageUrl) {
      setWidth(Math.round(height * aspectRatio));
    }
  }, [height, maintainAspect, aspectRatio, imageUrl]);

  const resizeImage = React.useCallback(() => {
    if (!imageUrl) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.drawImage(img, 0, 0, width, height);
      setResizedUrl(canvas.toDataURL('image/jpeg', 0.9));
    };
    img.src = imageUrl;
  }, [imageUrl, width, height]);

  React.useEffect(() => {
    if (imageUrl) resizeImage();
  }, [imageUrl, width, height, resizeImage]);

  const downloadResized = () => {
    const a = document.createElement('a');
    a.href = resizedUrl;
    a.download = `resized-${width}x${height}.jpg`;
    a.click();
  };

  return (
    <VStack gap={6}>
      <Box
        w="full"
        p={8}
        border="2px dashed"
        borderColor="gray.300"
        borderRadius="xl"
        textAlign="center"
        cursor="pointer"
        _hover={{ borderColor: 'brand.500', bg: 'gray.50' }}
        onClick={() => document.getElementById('resize-file')?.click()}
      >
        <LuImage size={32} color="gray" style={{ margin: '0 auto 8px' }} />
        <Text fontWeight={600}>Upload image to resize</Text>
        <input
          id="resize-file"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </Box>
      {imageUrl && (
        <>
          <HStack>
            <Button size="sm" variant={maintainAspect ? 'solid' : 'outline'} onClick={() => setMaintainAspect(true)}>Maintain Aspect Ratio</Button>
            <Button size="sm" variant={!maintainAspect ? 'solid' : 'outline'} onClick={() => setMaintainAspect(false)}>Free Resize</Button>
          </HStack>
          <SimpleGrid columns={2} gap={4} w="full">
            <Box>
              <Text fontSize="md" fontWeight={600} mb={2}>Width (px)</Text>
              <Input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value) || 0)} />
            </Box>
            <Box>
              <Text fontSize="md" fontWeight={600} mb={2}>Height (px)</Text>
              <Input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value) || 0)} />
            </Box>
          </SimpleGrid>
          {resizedUrl && (
            <>
              <img src={resizedUrl} alt="Resized" style={{ borderRadius: '0.5rem', maxWidth: '100%', maxHeight: '400px' }} />
              <Button onClick={downloadResized} >
                Download Resized Image ({width}x{height}) <LuDownload />
              </Button>
            </>
          )}
        </>
      )}
    </VStack>
  );
}

// --- Image Crop ---
export function ImageCrop() {
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const [croppedUrl, setCroppedUrl] = React.useState<string>('');
  const [crop, setCrop] = React.useState({ x: 0, y: 0, width: 200, height: 200 });

  const handleFile = React.useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const cropImage = () => {
    if (!imageUrl) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.drawImage(img, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
      setCroppedUrl(canvas.toDataURL('image/jpeg', 0.9));
    };
    img.src = imageUrl;
  };

  const downloadCropped = () => {
    const a = document.createElement('a');
    a.href = croppedUrl;
    a.download = 'cropped.jpg';
    a.click();
  };

  return (
    <VStack gap={6}>
      <Box
        w="full"
        p={8}
        border="2px dashed"
        borderColor="gray.300"
        borderRadius="xl"
        textAlign="center"
        cursor="pointer"
        _hover={{ borderColor: 'brand.500', bg: 'gray.50' }}
        onClick={() => document.getElementById('crop-file')?.click()}
      >
        <LuImage size={32} color="gray" style={{ margin: '0 auto 8px' }} />
        <Text fontWeight={600}>Upload image to crop</Text>
        <input
          id="crop-file"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </Box>
      {imageUrl && (
        <>
          <Text fontSize="md" fontWeight={600}>Crop Settings</Text>
          <SimpleGrid columns={4} gap={4} w="full">
            <Box>
              <Text fontSize="sm" color="gray.500">X Position</Text>
              <Input type="number" value={crop.x} onChange={(e) => setCrop({ ...crop, x: parseInt(e.target.value) || 0 })} />
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500">Y Position</Text>
              <Input type="number" value={crop.y} onChange={(e) => setCrop({ ...crop, y: parseInt(e.target.value) || 0 })} />
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500">Width</Text>
              <Input type="number" value={crop.width} onChange={(e) => setCrop({ ...crop, width: parseInt(e.target.value) || 100 })} />
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500">Height</Text>
              <Input type="number" value={crop.height} onChange={(e) => setCrop({ ...crop, height: parseInt(e.target.value) || 100 })} />
            </Box>
          </SimpleGrid>
          <Button onClick={cropImage}>Crop Image</Button>
          {croppedUrl && (
            <>
              <img src={croppedUrl} alt="Cropped" style={{ borderRadius: '0.5rem', maxWidth: '100%' }} />
              <Button onClick={downloadCropped} >Download Cropped Image <LuDownload /></Button>
            </>
          )}
        </>
      )}
    </VStack>
  );
}

// --- Meta Tag Generator ---
export function MetaTagGenerator() {
  const [formData, setFormData] = React.useState({
    title: '',
    description: '',
    keywords: '',
    author: '',
    ogImage: '',
    ogUrl: '',
    twitterCard: 'summary',
  });
  const [output, setOutput] = React.useState('');

  const generate = React.useCallback(() => {
    const tags = [];
    if (formData.title) tags.push(`<title>${formData.title}</title>`);
    if (formData.description) {
      tags.push(`<meta name="description" content="${formData.description}">`);
      tags.push(`<meta property="og:description" content="${formData.description}">`);
    }
    if (formData.keywords) tags.push(`<meta name="keywords" content="${formData.keywords}">`);
    if (formData.author) tags.push(`<meta name="author" content="${formData.author}">`);
    if (formData.ogUrl) tags.push(`<meta property="og:url" content="${formData.ogUrl}">`);
    if (formData.ogImage) tags.push(`<meta property="og:image" content="${formData.ogImage}">`);
    if (formData.title) tags.push(`<meta property="og:title" content="${formData.title}">`);
    tags.push(`<meta property="og:type" content="website">`);
    tags.push(`<meta name="twitter:card" content="${formData.twitterCard}">`);
    if (formData.title) tags.push(`<meta name="twitter:title" content="${formData.title}">`);
    if (formData.description) tags.push(`<meta name="twitter:description" content="${formData.description}">`);
    if (formData.ogImage) tags.push(`<meta name="twitter:image" content="${formData.ogImage}">`);

    setOutput(tags.join('\n'));
  }, [formData]);

  return (
    <VStack gap={6}>
      <SimpleGrid columns={2} gap={4} w="full">
        <Box>
          <Text fontSize="md" fontWeight={600} mb={2}>Page Title</Text>
          <Input size="md" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="My Awesome Page" />
        </Box>
        <Box>
          <Text fontSize="md" fontWeight={600} mb={2}>Author</Text>
          <Input size="md" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} placeholder="Your Name" />
        </Box>
      </SimpleGrid>
      <Box w="full">
        <Text fontSize="md" fontWeight={600} mb={2}>Description</Text>
        <Textarea size="md" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="A brief description of your page..." minH={80} />
      </Box>
      <Box w="full">
        <Text fontSize="md" fontWeight={600} mb={2}>Keywords (comma separated)</Text>
        <Input size="md" value={formData.keywords} onChange={(e) => setFormData({ ...formData, keywords: e.target.value })} placeholder="keyword1, keyword2, keyword3" />
      </Box>
      <SimpleGrid columns={2} gap={4} w="full">
        <Box>
          <Text fontSize="md" fontWeight={600} mb={2}>OG URL</Text>
          <Input size="md" value={formData.ogUrl} onChange={(e) => setFormData({ ...formData, ogUrl: e.target.value })} placeholder="https://example.com/page" />
        </Box>
        <Box>
          <Text fontSize="md" fontWeight={600} mb={2}>OG Image</Text>
          <Input size="md" value={formData.ogImage} onChange={(e) => setFormData({ ...formData, ogImage: e.target.value })} placeholder="https://example.com/image.jpg" />
        </Box>
      </SimpleGrid>
      <Box w="full">
        <Text fontSize="md" fontWeight={600} mb={2}>Twitter Card Type</Text>
        <NativeSelect.Root>
          <NativeSelect.Field value={formData.twitterCard} onChange={(e: any) => setFormData({ ...formData, twitterCard: e.target.value })}>
            <option value="summary">Summary</option>
            <option value="summary_large_image">Summary with Large Image</option>
          </NativeSelect.Field>
        </NativeSelect.Root>
      </Box>
      <Button onClick={generate} colorScheme="brand">Generate Meta Tags</Button>
      {output && (
        <Box w="full">
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="md" fontWeight={600}>Generated Meta Tags</Text>
            <Button size="md" variant="ghost" onClick={() => navigator.clipboard.writeText(output)}>Copy <LuCopy /></Button>
          </Flex>
          <Textarea size="md" value={output} readOnly minH={200} bg="gray.50" fontFamily="mono" fontSize="md" />
        </Box>
      )}
    </VStack>
  );
}

// --- Robots.txt Generator ---
export function RobotsGenerator() {
  const [userAgent, setUserAgent] = React.useState('*');
  const [rules, setRules] = React.useState([{ path: '', allow: true }]);
  const [sitemap, setSitemap] = React.useState('');
  const [output, setOutput] = React.useState('');

  const generate = React.useCallback(() => {
    let result = `User-agent: ${userAgent}\n`;
    rules.forEach(rule => {
      if (rule.path) {
        result += `${rule.allow ? 'Allow' : 'Disallow'}: ${rule.path}\n`;
      }
    });
    if (sitemap) result += `\nSitemap: ${sitemap}\n`;
    setOutput(result);
  }, [userAgent, rules, sitemap]);

  const addRule = () => setRules([...rules, { path: '', allow: true }]);
  const removeRule = (index: number) => setRules(rules.filter((_, i) => i !== index));
  const updateRule = (index: number, field: keyof typeof rules[0], value: any) => {
    const newRules = [...rules];
    newRules[index] = { ...newRules[index], [field]: value };
    setRules(newRules);
  };

  return (
    <VStack gap={6}>
      <Box w="full">
        <Text fontSize="md" fontWeight={600} mb={2}>User Agent</Text>
        <Input size="md" value={userAgent} onChange={(e) => setUserAgent(e.target.value)} placeholder="*" />
      </Box>
      <Box w="full">
        <Flex justify="space-between" align="center" mb={2}>
          <Text fontSize="md" fontWeight={600}>Rules</Text>
          <Button size="sm" onClick={addRule}>Add Rule</Button>
        </Flex>
        {rules.map((rule, index) => (
          <Flex key={index} gap={2} mb={2}>
            <NativeSelect.Root w={140}>
              <NativeSelect.Field value={rule.allow ? 'Allow' : 'Disallow'} onChange={(e) => updateRule(index, 'allow', e.target.value === 'Allow')}>
                <option value="Allow">Allow</option>
                <option value="Disallow">Disallow</option>
              </NativeSelect.Field>
            </NativeSelect.Root>
            <Input flex={1} value={rule.path} onChange={(e) => updateRule(index, 'path', e.target.value)} placeholder="/admin/" />
            <Button size="sm" variant="ghost" onClick={() => removeRule(index)}><LuTrash2 /></Button>
          </Flex>
        ))}
      </Box>
      <Box w="full">
        <Text fontSize="sm" fontWeight={600} mb={2}>Sitemap URL (optional)</Text>
        <Input value={sitemap} onChange={(e) => setSitemap(e.target.value)} placeholder="https://example.com/sitemap.xml" />
      </Box>
      <Button onClick={generate} colorScheme="brand">Generate robots.txt</Button>
      {output && (
        <Box w="full">
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="md" fontWeight={600}>robots.txt</Text>
            <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(output)}>Copy <LuCopy /></Button>
          </Flex>
          <Textarea value={output} readOnly minH={150} bg="gray.50" fontFamily="mono" fontSize="sm" />
        </Box>
      )}
    </VStack>
  );
}

// --- Sitemap Generator ---
export function SitemapGenerator() {
  const [urls, setUrls] = React.useState([{ url: '', changefreq: 'monthly', priority: '0.5' }]);
  const [output, setOutput] = React.useState('');

  const generate = React.useCallback(() => {
    let result = '<?xml version="1.0" encoding="UTF-8"?>\n';
    result += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    urls.forEach(u => {
      if (u.url) {
        result += `  <url>\n`;
        result += `    <loc>${u.url}</loc>\n`;
        result += `    <changefreq>${u.changefreq}</changefreq>\n`;
        result += `    <priority>${u.priority}</priority>\n`;
        result += `  </url>\n`;
      }
    });
    result += '</urlset>';
    setOutput(result);
  }, [urls]);

  const addUrl = () => setUrls([...urls, { url: '', changefreq: 'monthly', priority: '0.5' }]);
  const removeUrl = (index: number) => setUrls(urls.filter((_, i) => i !== index));
  const updateUrl = (index: number, field: string, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = { ...newUrls[index], [field]: value };
    setUrls(newUrls);
  };

  return (
    <VStack gap={6}>
      <Box w="full">
        <Flex justify="space-between" align="center" mb={2}>
          <Text fontSize="md" fontWeight={600}>URLs</Text>
          <Button size="sm" onClick={addUrl}>Add URL</Button>
        </Flex>
        {urls.map((u, index) => (
          <Flex key={index} direction={{ base: 'column', md: 'row' }} gap={2} mb={3} p={3} bg="gray.50" borderRadius="lg">
            <Input flex={2} value={u.url} onChange={(e) => updateUrl(index, 'url', e.target.value)} placeholder="https://example.com/page" />
            <NativeSelect.Root flex={1}>
              <NativeSelect.Field value={u.changefreq} onChange={(e) => updateUrl(index, 'changefreq', e.target.value)}>
                <option value="always">Always</option>
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="never">Never</option>
              </NativeSelect.Field>
            </NativeSelect.Root>
            <NativeSelect.Root flex={1}>
              <NativeSelect.Field value={u.priority} onChange={(e) => updateUrl(index, 'priority', e.target.value)}>
                <option value="1.0">1.0 (Highest)</option>
                <option value="0.9">0.9</option>
                <option value="0.8">0.8</option>
                <option value="0.7">0.7</option>
                <option value="0.6">0.6</option>
                <option value="0.5">0.5 (Normal)</option>
                <option value="0.4">0.4</option>
                <option value="0.3">0.3</option>
                <option value="0.2">0.2</option>
                <option value="0.1">0.1 (Lowest)</option>
              </NativeSelect.Field>
            </NativeSelect.Root>
            <Button size="sm" variant="ghost" onClick={() => removeUrl(index)}><LuTrash2 /></Button>
          </Flex>
        ))}
      </Box>
      <Button onClick={generate} colorScheme="brand">Generate Sitemap</Button>
      {output && (
        <Box w="full">
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="md" fontWeight={600}>sitemap.xml</Text>
            <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(output)}>Copy <LuCopy /></Button>
          </Flex>
          <Textarea value={output} readOnly minH={200} bg="gray.50" fontFamily="mono" fontSize="sm" />
        </Box>
      )}
    </VStack >
  );
}

// --- Keyword Density Checker ---
export function KeywordDensityChecker() {
  const [text, setText] = React.useState('');
  const [keywords, setKeywords] = React.useState<Array<{ word: string, count: number, density: number }>>([]);
  const [minLength, setMinLength] = React.useState(3);

  const analyze = React.useCallback(() => {
    const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
    const total = words.length;
    const freq: Record<string, number> = {};
    words.forEach(w => {
      if (w.length >= minLength) freq[w] = (freq[w] || 0) + 1;
    });
    const sorted = Object.entries(freq)
      .map(([word, count]) => ({ word, count, density: (count / total) * 100 }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);
    setKeywords(sorted);
  }, [text, minLength]);

  return (
    <VStack gap={6}>
      <Box w="full">
        <Flex justify="space-between" align="center" mb={2}>
          <Text fontSize="sm" fontWeight={600}>Minimum word length: {minLength}</Text>
        </Flex>
        <Slider.Root value={[minLength]} onValueChange={(details) => setMinLength(details.value[0])} min={1} max={10} mb={4}>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0} />
        </Slider.Root>
      </Box>
      <Textarea p={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste your content here to analyze keyword density..." minH={200} borderRadius="xl" />
      <Button onClick={analyze} disabled={!text}>Analyze Keywords</Button>
      {keywords.length > 0 && (
        <Box w="full">
          <Text fontSize="md" fontWeight={600} mb={4}>Top Keywords</Text>
          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
            {keywords.map((k, i) => (
              <Flex key={i} justify="space-between" p={3} bg="gray.50" borderRadius="lg">
                <Text fontWeight={600}>{k.word}</Text>
                <HStack>
                  <Badge>{k.count}x</Badge>
                  <Badge colorScheme="brand">{k.density.toFixed(2)}%</Badge>
                </HStack>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </VStack>
  );
}

// --- Open Graph Generator ---
export function OpenGraphGenerator() {
  const [formData, setFormData] = React.useState({
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    ogUrl: '',
    ogType: 'website',
    ogSiteName: '',
  });
  const [output, setOutput] = React.useState('');
  const [preview, setPreview] = React.useState(false);

  const generate = React.useCallback(() => {
    const tags = [];
    tags.push(`<!-- Open Graph / Facebook -->`);
    tags.push(`<meta property="og:type" content="${formData.ogType}">`);
    if (formData.ogUrl) tags.push(`<meta property="og:url" content="${formData.ogUrl}">`);
    if (formData.ogTitle) tags.push(`<meta property="og:title" content="${formData.ogTitle}">`);
    if (formData.ogDescription) tags.push(`<meta property="og:description" content="${formData.ogDescription}">`);
    if (formData.ogImage) tags.push(`<meta property="og:image" content="${formData.ogImage}">`);
    if (formData.ogSiteName) tags.push(`<meta property="og:site_name" content="${formData.ogSiteName}">`);

    setOutput(tags.join('\n'));
    setPreview(true);
  }, [formData]);

  return (
    <VStack gap={6}>
      <Box w="full">
        <Text fontSize="md" fontWeight={600} mb={2}>OG Title</Text>
        <Input size="md" value={formData.ogTitle} onChange={(e) => setFormData({ ...formData, ogTitle: e.target.value })} placeholder="Your Page Title" />
      </Box>
      <Box w="full">
        <Text fontSize="md" fontWeight={600} mb={2}>OG Description</Text>
        <Textarea size="md" value={formData.ogDescription} onChange={(e) => setFormData({ ...formData, ogDescription: e.target.value })} placeholder="A compelling description for social sharing..." minH={80} />
      </Box>
      <SimpleGrid columns={2} gap={4} w="full">
        <Box>
          <Text fontSize="md" fontWeight={600} mb={2}>OG URL</Text>
          <Input size="md" value={formData.ogUrl} onChange={(e) => setFormData({ ...formData, ogUrl: e.target.value })} placeholder="https://example.com" />
        </Box>
        <Box>
          <Text fontSize="md" fontWeight={600} mb={2}>OG Image</Text>
          <Input size="md" value={formData.ogImage} onChange={(e) => setFormData({ ...formData, ogImage: e.target.value })} placeholder="https://example.com/image.jpg" />
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={2} gap={4} w="full">
        <Box>
          <Text fontSize="md" fontWeight={600} mb={2}>OG Type</Text>
          <NativeSelect.Root>
            <NativeSelect.Field value={formData.ogType} onChange={(e) => setFormData({ ...formData, ogType: e.target.value })}>
              <option value="website">Website</option>
              <option value="article">Article</option>
              <option value="video.movie">Movie</option>
              <option value="music.song">Song</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Box>
        <Box>
          <Text fontSize="md" fontWeight={600} mb={2}>Site Name</Text>
          <Input size="md" value={formData.ogSiteName} onChange={(e) => setFormData({ ...formData, ogSiteName: e.target.value })} placeholder="Your Site Name" />
        </Box>
      </SimpleGrid>
      <Button onClick={generate} colorScheme="brand">Generate Open Graph Tags</Button>
      {output && (
        <>
          <Box w="full">
            <Flex justify="space-between" align="center" mb={2}>
              <Text fontSize="md" fontWeight={600}>Generated Tags</Text>
              <Button size="md" variant="ghost" onClick={() => navigator.clipboard.writeText(output)}>Copy <LuCopy /></Button>
            </Flex>
            <Textarea fontSize="md" value={output} readOnly minH={150} bg="gray.50" fontFamily="mono" />
          </Box>
          {preview && (
            <Box w="full" maxW="full">
              <Text fontSize="md" fontWeight={600} mb={4}>Preview</Text>
              <Box border="1px solid" borderColor="gray.200" borderRadius="lg" overflow="hidden">
                {formData.ogImage && (
                  <img src={formData.ogImage} alt="OG Preview" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                )}
                <Box bg="gray.50" p={4}>
                  <Text fontSize="xs" color="gray.500" textTransform="uppercase">{formData.ogSiteName || formData.ogUrl}</Text>
                  <Text fontWeight={600} fontSize="lg">{formData.ogTitle || 'Your Title'}</Text>
                  <Text fontSize="sm" color="gray.600">{formData.ogDescription || 'Your description will appear here...'}</Text>
                </Box>
              </Box>
            </Box>
          )}
        </>
      )}
    </VStack>
  );
}
