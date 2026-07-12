import "./globals.css"
import CinematicScroll from "../components/CinematicScroll"

export const metadata = {
  title: "The Pauli Effect | Proudly Artificial",
  metadataBase: new URL("https://thepaulieffect.com"),
  description:
    "A social-purpose AI studio for owned mascots, grant-assist systems, and durable agent infrastructure.",
  openGraph: {
    title: "The Pauli Effect",
    description:
      "Buy the mascot, the code, the data path, and the agent system once.",
    images: ["/assets/pauli/pauli-reference-primary.webp"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CinematicScroll>{children}</CinematicScroll>
      </body>
    </html>
  )
}
