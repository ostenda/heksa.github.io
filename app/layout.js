import '../styles/globals.css'

export const metadata = {
  title: 'KS HEKSA - Klub Tenisa Stołowego',
  description: 'Klub Tenisa Stołowego HEKSA – dołącz do naszej społeczności graczy i odkryj świat tenisa stołowego.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
