import Header from "@/components/layout/Header"
import "./globals.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <header>
        <title>Panaverse</title>
   
        <link rel="shortcut icon" href="@/app/favicon.ico" sizes='215x215'/>

      </header> */}
      <body>
        <Header/> 
        {children}
        </body>
    </html>
  )
}
