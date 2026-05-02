import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Cost Per Feature Tracker — Know What Each Feature Really Costs',
  description: 'Map API calls to product features and see the true cost per feature. Prioritize development and pricing decisions with real data.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="88c1f116-7a1b-46e4-a2a1-5c1271899ab2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
