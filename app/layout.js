export const metadata = {
  title: 'ZIYO - Custom Posters',
  description: 'Create your 1 of 1 custom poster that celebrates who you are',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
