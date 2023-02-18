import Image from "next/image";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { useEffect, useState } from "react";
import { Header, Segment } from "semantic-ui-react";
import logoImage from "../../../public/header1-removebg-preview.png";
import styles from "./header.module.scss";


const Links = (props) => {
  return props?.links?.map((link, index) => {
    return (
      <Header as="h4" floated="right" key={index} className="button">
        {link?.id !== "get_a_quote" && (
          <AnchorLink href={link?.href}>{link?.item}</AnchorLink>
        )}
        {link?.id === "get_a_quote" && (
          <Link href={link?.href}>{link?.item}</Link>
        )}
      </Header>
    );
  });
};

const HeaderSection = (props) => {
  useEffect(() => {
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
  }, []);

  return (
    <>
      <Segment id="myHeader" clearing className="container">
        <div className="header-logo">
          <Link href='/'>
            <Image src={logoImage} alt="N Image" width={150} height={91}></Image>
          </Link>
        </div>
        <div className="header-links">
          <Links links={props?.links} />
        </div>
      </Segment>
      <div className="backToTop">
        <AnchorLink id="topScroll" href="#home"></AnchorLink>
      </div>
    </>
  );
};

export default HeaderSection;
