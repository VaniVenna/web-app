import ServiceContent from "../ServiceContent";
import Footer from "../../common/Footer";
import HeaderSection from "../../common/Header";
import Home from "../Home/index";
import Gallery from "../Gallery";

const headerLinks = [
  {
    item: "GET A QUOTE",
    to: "/",
    href: "#home",
  },
  {
    item: "CONTACT",
    to: "/",
    href: "#home",
  },
  {
    item: "GALLERY",
    to: "/",
    href: "#gallery",
  },
  {
    item: "SERVICES",
    to: "/",
    href: "#services",
  },
  {
    item: "ABOUT",
    to: "/",
    href: "#about",
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
      <HeaderSection links={headerLinks}/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
