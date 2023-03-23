import Image from "next/image";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { useEffect, useState } from "react";
import { Header, Segment } from "semantic-ui-react";
import logoImage from "../../../public/header1-removebg-preview.png";
import styles from "./header.module.scss";
import { useRouter } from "next/router";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const HeaderSection = (props) => {
  const [data, setData] = useState("");
  const Links = (props) => {
    useEffect(() => {
      setData(window.location.href);
    }, []);
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
  };
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
          <Links links={props?.links} />
        </div>
      </Segment>
      {console.log("data in return", data)}
      {!data.includes("Quote") ? (
        <div className="backToTop">
          <AnchorLink id="topScroll" href="#home"></AnchorLink>
        </div>
      ) : null}
    </>
  );
};

export default HeaderSection;
