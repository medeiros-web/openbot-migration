import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: 512,
        height: 512,
        background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
        borderRadius: 112,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 210,
        fontWeight: 700,
        letterSpacing: -10,
      }}
    >
      MA
    </div>,
    { width: 512, height: 512 }
  )
}
