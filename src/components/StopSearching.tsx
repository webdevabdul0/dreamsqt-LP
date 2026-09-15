import React from 'react';

const sfPro = '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif';

export const StopSearching: React.FC = () => {
  return (
    <section style={{ background: '#131313', padding: '80px 0 80px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h2 style={{
          fontFamily: sfPro,
          fontSize: 60,
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.15,
          margin: 0,
        }}>
          Stop searching.{' '}<br />
          <span style={{ color: '#e3aa33' }}>Start building</span>.
        </h2>
        <p style={{
          fontFamily: sfPro,
          fontSize: 16,
          fontWeight: 400,
          color: '#ffffff',
          marginTop: 24,
          marginBottom: 0,
          lineHeight: 1.5,
        }}>
          The clearer path to opening the practice you've always wanted.
        </p>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <img
          src="/start-building.png"
          alt="Stop searching. Start building."
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};
