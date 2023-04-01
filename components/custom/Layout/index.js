import Footer from "../../common/Footer";
import HeaderSection from "../../common/Header";
import { Container } from "semantic-ui-react";


const headerLinks = [
  {
    item: "HOME",
    to: "/",
    href: "#home",
    mHref: "/#home",
    id: "float_right",
  },
  {
    item: "ABOUT",
    to: "/",
    href: "#about",
    mHref: "/#about",
    id: "float_right",
  },
  {
    item: "SERVICES",
    to: "/",
    href: "#services",
    mHref: "/#services",
    id: "float_right",
  },
  {
    item: "GALLERY",
    to: "/",
    href: "#gallery",
    mHref: "/#gallery",
    id: "float_right",
  },
  {
    item: "CONTACT",
    to: "/",
    href: "#contactUs",
    mHref: "/#contactUs",
    id: "float_right",
  },
  {
    item: "GET A QUOTE",
    to: "/",
    href: "/Quote",
    id: "get_a_quote",
  },
];

export default function Layout({ children }) {
  return (
    <Container className='layout' id="layout">
      <HeaderSection links={headerLinks} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
