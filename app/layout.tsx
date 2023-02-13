import "../styles/globals.css";

export const metadata = {
  title: "Next.js on the Edge",
  description: "HTML, dynamically rendered in a city near you",
  twitter: {
    card: "summary_large_image",
    title: "Next.js on the Edge",
    description: "HTML, dynamically rendered in a city near you",
    creator: "@nextjs",
    images: {
      url: "/static/og/card.png",
      alt: "The Vercel and Next.js logos",
    },
  },
  icons: {
    icon: "/static/favicon/favicon-32x32.png",
    shortcut: "/static/favicon/favicon.ico",
    apple: "/static/favicon/apple-touch-icon.png",
  },
  themeColor: "#FFF",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
