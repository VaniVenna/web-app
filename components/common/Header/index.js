import Image from "next/image";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./header.module.scss";
const Links = (props) => {
  return props?.links?.map((link, index) => {
    return link?.id !== "float_left" ? (
      <h4 class="ui right floated header" key={index}>
        <AnchorLink href={link?.href}>{link?.item}</AnchorLink>
      </h4>
    ) : (
      <h4 class="ui left floated header" key={index}>
        <Link href={link?.href}>{link?.item}</Link>
      </h4>
    );
  });
};

const Header = (props) => {
  return (
    <>
      {/* <Image src={"/favicon.ico"} alt="logo" width={200} height={200} /> */}
      <div
        // class="ui clearing segment"
        className={styles.headerBox}
      >
        <Links links={props?.links} />
      </div>
    </>
  );
};

export default Header;
