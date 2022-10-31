import Footer from "../../common/Footer"
import Header from "../../common/Header"

const headerLinks = [
  {
    item: 'home',
    to: '/'
  },
  {
    item: 'about',
    to: '/about'
  }
]

export default function Layout({ children }) {
  return (
    <>
      <Header links={headerLinks} />
      <main>{children}</main>
      <Footer />
    </>
  )
}