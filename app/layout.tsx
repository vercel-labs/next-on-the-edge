import './globals.css';
import NavigationSwitcher from './nav';

export const metadata = {
  title: 'Next.js on the Edge',
  description: 'HTML, dynamically rendered in a city near you',
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js on the Edge',
    description: 'HTML, dynamically rendered in a city near you',
    creator: '@nextjs',
  },
  themeColor: '#FFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavigationSwitcher />
        {children}
      </body>
    </html>
  );
}
