import "swagger-ui-react/swagger-ui.css"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Swaggers',
  description: 'Swagger apps',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      {children}
    </body>
  </html>
)

export default RootLayout;
