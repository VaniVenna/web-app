import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Home from "../Home/index";

const headerLinks = [
  {
    item: "GET A QUOTE",
    to: "/",
    href: "#home",
  },
  {
    item: "CONTACT",
    to: "/about",
    href: "#home",
  },
  {
    item: "GALLERY",
    to: "/",
    href: "#home",
  },
  {
    item: "SERVICES",
    to: "/",
    href: "#home",
  },
  {
    item: "ABOUT",
    to: "/about",
    href: "#home",
  },
  {
    item: "HOME",
    to: "/",
    href: "#home",
  },
  {
    item: "TAK FABRICATION",
    to: "/",
    href: "/",
    id: "float_left",
  },
];

export default function Layout({ children }) {
  return (
    <>
      <Header links={headerLinks} />
      <main>{children}</main>
      <Footer />
      <Home />
    </>
  );
}
