import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import LightGallery from "lightgallery/react";
// import { LightGallerySettings } from "lightgallery/lg-settings";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import sampleImage from "../../../assets/image/gallery/assembly_1.png";
import styles from "./gallery.module.scss";
import galleryImage1 from "../../../public/Gallery/galleryImage1.png";
import galleryImage2 from "../../../public/Gallery/galleryImage2.png";
import galleryImage3 from "../../../public/Gallery/galleryImage3.png";
import galleryImage4 from "../../../public/Gallery/galleryImage4.png";
import galleryImage5 from "../../../public/Gallery/galleryImage5.png";
import galleryImage6 from "../../../public/Gallery/galleryImage6.png";
import galleryImage7 from "../../../public/Gallery/galleryImage7.png";
import galleryImage8 from "../../../public/Gallery/galleryImage8.png";
import galleryImage9 from "../../../public/Gallery/galleryImage9.png";
import galleryImage10 from "../../../public/Gallery/galleryImage10.png";
import galleryImage11 from "../../../public/Gallery/galleryImage11.png";
import galleryImage12 from "../../../public/Gallery/galleryImage12.png";
import galleryImage13 from "../../../public/Gallery/galleryImage13.png";
import galleryImage14 from "../../../public/Gallery/galleryImage14.png";
import galleryImage15 from "../../../public/Gallery/galleryImage15.png";
import galleryImage16 from "../../../public/Gallery/galleryImage16.png";
import galleryImage17 from "../../../public/Gallery/galleryImage17.png";
import galleryImage18 from "../../../public/Gallery/galleryImage18.png";
import galleryImage19 from "../../../public/Gallery/galleryImage19.png";
import galleryImage20 from "../../../public/Gallery/galleryImage20.png";
import galleryImage21 from "../../../public/Gallery/galleryImage21.png";

const Gallery = () => {
  const lightGallery = useRef;
  const [items, setItems] = useState([
    {
      id: "1",
      size: "1400-932",
      src: { galleryImage1 },
      thumb: { galleryImage1 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                <p>Published on November 13, 2018</p>
            </div>`,
    },
    {
      id: "6",
      size: "1280-720",
      poster:
        "https://www.lightgalleryjs.com/images/demo/wistia-video-poster.jpeg",
      src: { galleryImage2 },
      thumb: { galleryImage2 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                <p>Published on November 13, 2018</p>
            </div>`,
    },
    {
      id: "2",
      size: "1400-933",
      src: { galleryImage3 },
      thumb: { galleryImage3 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                <p>Published on September 14, 2016</p>
            </div>`,
    },
    {
      id: "3",
      size: "1400-932",
      src: { galleryImage4 },
      thumb: { galleryImage4 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "4",
      size: "1400-932",
      src: { galleryImage5 },
      thumb: { galleryImage5 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "5",
      size: "1400-932",
      src: { galleryImage6 },
      thumb: { galleryImage6 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "7",
      size: "1400-932",
      src: { galleryImage7 },
      thumb: { galleryImage7 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "8",
      size: "1400-932",
      src: { galleryImage8 },
      thumb: { galleryImage8 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "9",
      size: "1400-932",
      src: { galleryImage9 },
      thumb: { galleryImage9 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "10",
      size: "1400-932",
      src: { galleryImage10 },
      thumb: { galleryImage10 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "11",
      size: "1400-932",
      src: { galleryImage11 },
      thumb: { galleryImage11 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "12",
      size: "1400-932",
      src: { galleryImage12 },
      thumb: { galleryImage12 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "13",
      size: "1400-932",
      src: { galleryImage13 },
      thumb: { galleryImage13 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "14",
      size: "1400-932",
      src: { galleryImage14 },
      thumb: { galleryImage14 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "15",
      size: "1400-932",
      src: { galleryImage15 },
      thumb: { galleryImage15 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "16",
      size: "1400-932",
      src: { galleryImage16 },
      thumb: { galleryImage16 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "17",
      size: "1400-932",
      src: { galleryImage17 },
      thumb: { galleryImage17 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "18",
      size: "1400-932",
      src: { galleryImage18 },
      thumb: { galleryImage18 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "19",
      size: "1400-932",
      src: { galleryImage19 },
      thumb: { galleryImage19 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "20",
      size: "1400-932",
      src: { galleryImage20 },
      thumb: { galleryImage20 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
    {
      id: "21",
      size: "1400-932",
      src: { galleryImage21 },
      thumb: { galleryImage21 },
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    },
  ]);

  // const addItem = useCallback(() => {
  //   setItems([
  //     ...items,
  //     {
  //       id: "4",
  //       size: "1400-933",
  //       src: "https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
  //       thumb:
  //         "https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
  //       subHtml: `<div class="lightGallery-captions">
  //               <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
  //               <p>Published on January 6, 2021</p>
  //           </div>`,
  //     },
  //     {
  //       id: "5",
  //       size: "1600-2398",
  //       src: "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
  //       thumb:
  //         "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
  //       subHtml: `<div class="lightGallery-captions">
  //           <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
  //           <p>Published on January 6, 2021</p>
  //       </div>`,
  //     },
  //   ]);
  // }, []);

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {
    return items.map((item, index) => {
      return (
        <a
          key={item.id}
          data-lg-size={item.size}
          className={styles.item}
          data-src={`/Gallery/galleryImage${index + 1}.png`}
        // data-src="/assembly_1.png"
        >
          <Image
            // style={{ maxWidth: "280px" }}
            style={{ justifyContent: "space-between" }}
            className={styles.grid}
            src={require(`../../../public/Gallery/galleryImage${index + 1
              }.png`)}
            // src="/assembly_1.png"
            alt=""
            width={300}
            height={200}
          // justifyContent="space-between"
          ></Image>
        </a>
      );
    });
  }, [items]);

  useEffect(() => {
    lightGallery.current.refresh();
    console.log("videl", lgVideo);
  }, [items])

  return (
    <div id="gallery" className={styles.gallery}>
      <div>
        <h1 className={styles.header}>Gallery</h1>
      </div>
      <div>
        <LightGallery
          plugins={[lgVideo, lgZoom]}
          elementClassNames={styles.container}
          onInit={onInit}
        >
          {getItems()}
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;
