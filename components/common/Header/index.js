import Image from "next/image";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { useEffect, useState } from "react";
import { Header, Segment, List } from "semantic-ui-react";
import logoImage from "../../../public/header1-removebg-preview.png";
import { HashLink } from "react-router-hash-link";
import styles from "./header.module.scss";
import { BrowserRouter as Router } from "react-router-dom";

const HeaderSection = (props) => {
  const [data, setData] = useState("");
  const [hamburgerState, setHamburgerState] = useState(false)

  const HeaderLinks = (props) => {
    return props?.links?.map((link, index) => {
      return (
        data && (
          <Header as="h4" floated="right" key={index} className="button">
            {link?.id !== "get_a_quote" &&
              (!data.includes("Quote") ? (
                <Router>
                  <HashLink smooth to={link?.href}>
                    {link?.item}
                  </HashLink>
                </Router>
              ) : (
                <Link href={`${window.location.origin}${link?.mHref}`}>
                  {link?.item}
                </Link>
              ))}
            {!data.includes("Quote")
              ? link?.id === "get_a_quote" && (
                <Link href={link?.href}>{link?.item}</Link>
              )
              : null}
          </Header>
        )
      );
    });
  }

  const HamburgerLinks = props => {
    return props?.links?.map((link, index) => {
      return (
        data && (
          // <Header as="h4" floated="right" key={index} className="button">
          <List.Item key={index} className={styles.hambergerListItem}>
            {link?.id !== "get_a_quote" &&
              (!data.includes("Quote") ? (
                <Router>
                  <HashLink smooth to={link?.href}>
                    {link?.item}
                  </HashLink>
                </Router>
              ) : (
                <Link href={`${window.location.origin}${link?.mHref}`}>
                  {link?.item}
                </Link>
              ))}
            {!data.includes("Quote")
              ? link?.id === "get_a_quote" && (
                <Link href={link?.href}>{link?.item}</Link>
              )
              : null}
          </List.Item>
        )
      );
    });
  }

  useEffect(() => {
    setData(window.location.href);
    const header = document.getElementById("myHeader");
    const topScroll = document.getElementById("topScroll");
    const sticky = header?.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        if (window.pageYOffset > 200) {
          header?.classList.add("sticky");
          topScroll?.classList.add("arrowTop");
        }
      }
      // else {
      if (window.pageYOffset < 200) {
        header?.classList.remove("sticky");
        topScroll?.classList.remove("arrowTop");
      }
      // }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, [])

  return (
    <>
      <Segment id="myHeader" clearing className="container">
        <div className="header-logo">
          {/* commented Link for under construction*/}
          <Link href="/">
            <Image
              src={logoImage}
              alt="N Image"
              width={150}
              height={91}
            ></Image>
          </Link>
        </div>
        {/* Added the visibility: hidden for under construction*/}
        <div className="header-links">
          <HeaderLinks links={props?.links} />
        </div>
      </Segment>
      <Segment id="myHeaderMobile" clearing className={`container ${styles.mobileHeader}`}>
        <div
          className={`${styles.hamburgerIcon} ${hamburgerState ? styles.open : styles.close}`}
          onClick={() => setHamburgerState(!hamburgerState)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.headerLogo}>
          <Link href="/">
            <Image
              src={logoImage}
              alt="N Image"
              width={150}
              height={91}
            ></Image>
          </Link>
        </div>
        {hamburgerState && <div className={styles.headerLinks}>
          <List className={styles.hambergerList}>
            <HamburgerLinks links={props?.links} />
          </List>
        </div>}
      </Segment>
      {!data.includes("Quote") ? (
        <div className="backToTop">
          <AnchorLink id="topScroll" href="#home"></AnchorLink>
        </div>
      ) : null}
    </>
  );
};

export default HeaderSection;
