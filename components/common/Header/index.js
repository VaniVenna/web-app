import Image from "next/image"
import Link from "next/link"

const Links = props => {
  return (props?.links?.map((link, index) => {
    return (
      <Link href={link?.to}>{link?.item}</Link>
    )
  }))
}

const Header = props => {
  return (
    <>
      <Image src={'/favicon.ico'} alt='logo' width={200} height={200} />
      <Links links={props?.links} />
    </>
  )
}

export default Header