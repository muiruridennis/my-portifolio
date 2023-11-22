import { Caprasimo, Roboto, Kanit, Eczar, Playfair } from 'next/font/google'
import './globals.scss'

const capasrimo = Caprasimo({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font-capasrimo'

})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "900"],
  variable: '--font-roboto'
})
const playfair = Playfair({
  subsets: ['latin'],
  weight: ["400", "900"],
  variable: '--font-playfair'
})


const kanit = Kanit({
  subsets: ['latin'],
  weight: ["400", "900"],
  variable: '--font-kanit'
})
const eczar = Eczar({
  subsets: ['latin'],
  weight: ["400", "800"],
  variable: '--font-eczar'
})
export const metadata = {
  title: 'Dennis Portifolio',
  description: 'Web Developer and UI Designer',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${capasrimo.variable}
          ${kanit.variable}
          ${roboto.variable}
          ${eczar.variable}
          ${playfair.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}

