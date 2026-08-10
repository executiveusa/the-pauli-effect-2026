import "./globals.css"

export const metadata = {
  title: "The Pauli Effect | Proudly Artificial",
  metadataBase: new URL("https://thepaulieffect.com"),
  description:
    "A faceless social-purpose studio building AI operating systems for people changing the world.",
  openGraph: {
    title: "The Pauli Effect",
    description:
      "We design systems that outlast the hype.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
