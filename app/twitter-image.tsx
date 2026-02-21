import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 600,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#667eea',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 64, marginBottom: 16 }}>⚡</div>
          <div style={{ fontSize: 72, fontWeight: 900, marginBottom: 24 }}>
            toolsHub.builders
          </div>
          <div style={{ fontSize: 32, fontWeight: 400 }}>
            50+ Free AI Tools for Everyone
          </div>
          <div
            style={{
              marginTop: 32,
              padding: '12px 24px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: 8,
              fontSize: 20,
            }}
          >
            No Sign-up • Instant Results • Forever Free
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
