import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import WhatsApp from '@/components/WhatsApp';
import './globals.css';
export const metadata: Metadata = {
  title: 'ogabrielf'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          padding: 0,
          margin: 0,
          background: 'rgb(15 23 42/1)',
          boxSizing: 'border-box'
        }}
      >
        <NavBar />
        {children}
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
