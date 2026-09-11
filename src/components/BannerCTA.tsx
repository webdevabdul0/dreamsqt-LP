import React from 'react';

const SF_PRO = '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif';
const CHAIR_IMG = 'http://localhost:3845/assets/c1d81d1aa2892751ca01993e1bf61d2d4576c393.png';
const GOLD_GRADIENT = 'linear-gradient(89.7deg, rgb(146,94,2) 3.93%, rgb(197,161,59) 55.47%, rgb(230,204,96) 95.56%, rgb(242,220,110) 114.65%, rgb(236,212,101) 128.02%, rgb(221,189,78) 147.11%, rgb(196,151,39) 173.84%, rgb(176,121,8) 191.02%)';

interface BannerCTAProps {
  onJoinClick: () => void;
}

export const BannerCTA: React.FC<BannerCTAProps> = ({ onJoinClick }) => {
  return (
    <section className="px-6 py-12" style={{ background: '#FCF6EF' }} data-purpose="banner-cta">
      <div
        className="mx-auto relative overflow-hidden"
        style={{
          maxWidth: '1280px',
          borderRadius: '40px',
          background: GOLD_GRADIENT,
          minHeight: '561px',
        }}
      >
        {/* Left content — x=130, y=54, w=599 */}
        <div
          style={{
            position: 'absolute',
            left: '64px',
            top: '54px',
            width: '599px',
          }}
        >
          {/* Pill */}
          <div
            className="inline-flex items-center justify-center"
            style={{
              border: '1px solid #fff',
              borderRadius: '20px',
              padding: '8px 10px',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                fontFamily: SF_PRO,
                fontSize: '14px',
                fontWeight: 400,
                color: '#FCF6EF',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                letterSpacing: '0.02em',
              }}
            >
              YOUR PRACTICE STARTS HERE
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: SF_PRO,
              fontSize: '60px',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 'normal',
              marginBottom: '24px',
            }}
          >
            Your practice is closer than you think.
          </h2>

          {/* Bullet lines */}
          <div style={{ marginBottom: '16px' }}>
            {[
              'The location is out there.',
              'The patients are waiting.',
              "And the practice you've imagined is entirely possible.",
            ].map((line, i) => (
              <p
                key={i}
                style={{
                  fontFamily: SF_PRO,
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#FCF6EF',
                  lineHeight: 'normal',
                  marginBottom: i < 2 ? '8px' : 0,
                }}
              >
                <strong style={{ fontWeight: 700 }}>{'→ '}</strong>
                {line}
              </p>
            ))}
          </div>

          {/* Bold body */}
          <p
            style={{
              fontFamily: SF_PRO,
              fontSize: '16px',
              fontWeight: 700,
              color: '#FCF6EF',
              lineHeight: 'normal',
              marginBottom: '12px',
              marginTop: '16px',
            }}
          >
            What you need now is a plan, the right tools and guidance from people who've already walked the path.
          </p>

          {/* Sub body */}
          <p
            style={{
              fontFamily: SF_PRO,
              fontSize: '16px',
              fontWeight: 400,
              color: '#FCF6EF',
              lineHeight: 'normal',
              marginBottom: '32px',
            }}
          >
            Dream Squat gives you all three.
          </p>

          {/* CTA */}
          <button
            onClick={onJoinClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#131313',
              borderRadius: '8px',
              padding: '12px 30px',
              fontFamily: SF_PRO,
              fontSize: '14px',
              fontWeight: 600,
              color: '#fbfbfb',
              cursor: 'pointer',
              border: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            JOIN FOR £19.99/MONTH →
          </button>
        </div>

        {/* Right image — x=780, y=16, w=564, h=529 */}
        <div
          style={{
            position: 'absolute',
            right: '24px',
            top: '16px',
            width: '564px',
            height: '529px',
            borderRadius: '26px',
            overflow: 'hidden',
          }}
        >
          <img
            src={CHAIR_IMG}
            alt="Dental practice interior"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Inset shadow overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '26px',
              boxShadow: 'inset 0px 0px 0px 14px rgba(0,0,0,0.42)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  );
};
