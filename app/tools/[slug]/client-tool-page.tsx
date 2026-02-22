'use client';

import { useState, useEffect } from 'react';
import { Box, Text, Container, Heading, Stack, Button, HStack } from '@chakra-ui/react';
import { LuArrowRight } from 'react-icons/lu';
import Link from 'next/link';
import type { Tool } from '@/lib/tools-data';
import { ToolLayout } from '@/components/ToolLayout';
import { Block as FAQBlock } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';

interface ClientToolPageProps {
  toolId: string;
  tool: Tool;
  relatedTools: Tool[];
}

export function ClientToolPage({ toolId, tool, relatedTools }: ClientToolPageProps) {
  const [ToolComponent, setToolComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import('@/components/tools').then((tools) => {
      // Map tool IDs to component names
      const componentMap: Record<string, any> = {
        'word-counter': tools.WordCounter,
        'character-counter': tools.CharacterCounter,
        'case-converter': tools.CaseConverter,
        'remove-duplicate-lines': tools.RemoveDuplicateLines,
        'text-to-slug': tools.TextToSlug,
        'json-formatter': tools.JSONFormatter,
        'base64-encoder-decoder': tools.Base64EncoderDecoder,
        'html-minifier': tools.HTMLMinifier,
        'css-minifier': tools.CSSMinifier,
        'jwt-decoder': tools.JWTDecoder,
        'image-to-base64': tools.ImageToBase64,
        'image-compressor': tools.ImageCompressor,
        'png-to-jpg': tools.PNGToJPG,
        'resize-image': tools.ResizeImage,
        'image-crop': tools.ImageCrop,
        'meta-tag-generator': tools.MetaTagGenerator,
        'robots-generator': tools.RobotsGenerator,
        'sitemap-generator': tools.SitemapGenerator,
        'keyword-density-checker': tools.KeywordDensityChecker,
        'open-graph-generator': tools.OpenGraphGenerator,
      };

      setToolComponent(() => componentMap[toolId] || null);
    });
  }, [toolId]);

  if (!ToolComponent) {
    return (
      <Box textAlign="center" py={20}>
        <Text>Loading tool...</Text>
      </Box>
    );
  }

  // Default features based on tool category
  const defaultFeatures: Record<string, string[]> = {
    text: [
      'Instant results with real-time processing',
      'Works entirely in your browser - no data sent to servers',
      'Fully responsive design for mobile and desktop',
      'No signup or registration required',
      'Completely free with no hidden fees',
    ],
    developer: [
      'Syntax highlighting for better readability',
      'Format and validate code instantly',
      'Copy results to clipboard with one click',
      'No server-side processing - 100% client-side',
      'Support for all modern browsers',
    ],
    image: [
      'Fast and efficient image processing',
      'Maintain image quality while optimizing',
      'Support for multiple image formats',
      'Bulk processing available',
      'Download processed images instantly',
    ],
    seo: [
      'Generate SEO-optimized meta tags',
      'Preview how your content appears in search results',
      'Export results for easy implementation',
      'Follows latest SEO best practices',
      'Free forever with no limitations',
    ],
  };

  // Default how to use steps
  const defaultHowToUse: Record<string, string[]> = {
    text: [
      'Enter or paste your content into the input area',
      'View instant results as you type or make changes',
      'Copy the processed text using the copy button',
      'Use additional options to customize the output',
    ],
    developer: [
      'Paste your code or data into the input field',
      'Choose your formatting or processing options',
      'Click the process button to transform your input',
      'Copy the formatted result to your clipboard',
    ],
    image: [
      'Upload your image by clicking or dragging and dropping',
      'Adjust settings like quality, size, or format',
      'Preview the changes in real-time',
      'Download the processed image when satisfied',
    ],
    seo: [
      'Enter your website URL, title, and description',
      'Customize additional meta tags as needed',
      'Generate the meta tags code',
      'Copy and paste the code into your website HTML',
    ],
  };

  const features = defaultFeatures[tool.category] || defaultFeatures.text;
  const howToUse = defaultHowToUse[tool.category] || defaultHowToUse.text;

  return (
    <>
      <ToolLayout
        tool={tool}
        features={features}
        howToUse={howToUse}
        relatedTools={relatedTools}
      >
        <ToolComponent />
      </ToolLayout>


      {/* CTA Section */}

      {/* CTA Section */}
      <Box bg="brand.500" py={{ base: '16', md: '20' }} mt={10}>
        <Container maxW="4xl">
          <Stack gap="6" align="center" textAlign="center">
            <Heading
              size="2xl"
              fontWeight="extrabold"
              color="white"
            >
              Ready to Work Smarter?
            </Heading>
            <Text
              fontSize="lg"
              color="white/90"
              maxW="2xl"
            >
              All tools are free. No registration required. Start using them right now.
            </Text>
            <Link href={'/tools'}>
              <Button
                size="lg"
                bg="white"
                color="brand.500"
                fontWeight="semibold"
                borderRadius="md"
                px="8"
                _hover={{ bg: "gray.50" }}
                _active={{ bg: "gray.100" }}
                className="btn-press"
              >
                Explore More Tools
                <HStack gap="2">
                  <LuArrowRight />
                </HStack>
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>

      {/* FAQ Section - Same as main page */}
      <FAQBlock />
    </>
  );
}
