// app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#0f172a',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '60px 80px',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
          backgroundImage:
            'linear-gradient(145deg, #0f172a 40%, #1e293b 100%)',
        }}
      >
        {/* Logo / Site Name */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 20,
            background: 'linear-gradient(to right, #14b8a6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          whatever.codes
        </div>

        {/* Hero Heading */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            maxWidth: 800,
            lineHeight: 1.3,
          }}
        >
          Your DevOps + GenAI Playground.
        </div>

        {/* Subheading */}
        <div
          style={{
            fontSize: 28,
            opacity: 0.8,
            marginTop: 20,
            maxWidth: 700,
          }}
        >
          Built by Suraj Vishwakarma — featuring LangChain, CI/CD, Infra, Agents,
          Monitoring, and real deployments.
        </div>

        {/* Footer / Social */}
        <div
          style={{
            fontSize: 22,
            opacity: 0.5,
            position: 'absolute',
            bottom: 40,
            left: 80,
          }}
        >
          surajv.me • @surajv354
        </div>

        {/* Optional Branding Badge */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 80,
            padding: '8px 20px',
            fontSize: 18,
            backgroundColor: '#14b8a6',
            color: '#0f172a',
            fontWeight: 700,
            borderRadius: 100,
          }}
        >
          v1.0 LAB
        </div>
      </div>
    ),
    size
  );
}
