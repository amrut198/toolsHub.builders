import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'toolshub-builders - Innovation & Technology Solutions'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            display: 'flex',
          }}
        />

        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '80px 60px',
            zIndex: 1,
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#667eea',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
              }}
            >
              M
            </div>
          </div>

          {/* Main Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              display: 'flex',
            }}
          >
            toolshub-builders
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '36px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '16px',
              display: 'flex',
            }}
          >
            Innovation & Technology Solutions
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '800px',
              lineHeight: '1.4',
              display: 'flex',
            }}
          >
            Your trusted partner in cutting-edge technology
          </div>
        </div>

        {/* Bottom Accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

