import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: 192,
        height: 192,
        background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
        borderRadius: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 80,
        fontWeight: 700,
        letterSpacing: -4,
      }}
    >
      MA
    </div>,
    { width: 192, height: 192 }
  )
}
