"use client";

import React, { useEffect, useState } from "react";
import styles from "../Pages/landingPage.module.css"; // Ensure the correct path and alias
import Button from "../components/Button";
import logo from "../image/logo.png";
import Image from "next/image";
import { fetchHomePageData } from "../services/api";
import { transformData } from "../utils/transformData";
import { TbMinusVertical } from "react-icons/tb";
import s1 from "../image/stroke/s1.png";
import s2 from "../image/stroke/s2.png";
import s3 from "../image/stroke/s3.png";
import { addBreaksAfterTags } from "../utils/addBreaksAfterTags";
import { IoPlayCircleOutline } from "react-icons/io5";
import srv1 from "../image/serviceImg/srv1.png";
import srv2 from "../image/serviceImg/srv2.png";
import srv3 from "../image/serviceImg/srv3.png";
import Loader from "../components/loader";

function LandingPage() {
  const [data, setData] = useState(null); // Initialize with null
  const [pageData, setPageData] = useState({});
  const services = [
    {
      imgSrc: srv1,
      title: "Wall Painting",
      description: "Lorem ipsum dolor sit on consectetur.",
      buttonText: "Read More",
      bgColor: "#d1c445",
    },
    {
      imgSrc: srv2,
      title: "Wall Painting",
      description: "Lorem ipsum dolor sit on consectetur.",
      buttonText: "Read More",
      bgColor: "#edcb48",
    },
    {
      imgSrc: srv3,
      title: "Wall Painting",
      description: "Lorem ipsum dolor sit on consectetur.",
      buttonText: "Read More",
      bgColor: "#a7b73a",
    },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchHomePageData();
        setData(result.data);
        console.log("Data:", result.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (data) {
      setPageData(transformData(data));
    }
  }, [data]);

  useEffect(() => {
    console.log("Page Data:", pageData);
  }, [pageData]);

  const bannerImageUrl = pageData.homepageBanners?.[0]?.sourceUrl || "";
  let p2Detail = addBreaksAfterTags(pageData.homeAbout?.description || "");

  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <>
          <div className={styles.page1}>
            <nav className={styles.nav}>
              <div className={styles.logo}>
                <Image
                  src={logo}
                  alt="Logo"
                  width={200}
                  height={100}
                  priority
                />
              </div>
              <div className={styles.navlinks}>
                <a href="#">About</a>
                <a href="#">Category</a>
                <a href="#">Services</a>
                <a href="#">Colours</a>
                <a href="#">Downloads</a>
                <a href="#">Become A Dealer</a>
                <a href="#">Blogs</a>
                <a href="#">Contact</a>
              </div>
              <div className={styles.navbtn}>
                <Button
                  name="Enquire Now"
                  style={{
                    width: "90%",
                    height: "40%",
                    borderRadius: "30px",
                    color: "#0061b0",
                  }}
                />
              </div>
            </nav>
            <div
              className={styles.page1main}
              style={{
                backgroundImage: `url(${bannerImageUrl})`,
                backgroundSize: "cover",
              }}
            >
              <div>
                <span className={styles.p1Title}>
                  {pageData.homepageBanners?.[0]?.title || ""}
                </span>
                <br />
                <span className={styles.p1Subtitle}>
                  {pageData.homepageBanners?.[0]?.description || ""}
                </span>
                <br />
                <br />
                <Button
                  name={pageData.homepageBanners?.[0]?.button?.title || ""}
                  btnHref={pageData.homepageBanners?.[0]?.button?.url || ""}
                  style={{
                    width: "30%",
                    height: "16%",
                    borderRadius: "30px",
                    // color: "transparent",
                  }}
                />
              </div>
              <div className={styles.page1SideNav}>
                <TbMinusVertical />
                <TbMinusVertical />
                <TbMinusVertical />
              </div>
            </div>
            <div className={styles.page1footer}></div>
          </div>

          <div className={styles.page2}>
            <div className={styles.p2LeftBorder}></div>
            <div className={styles.p2Main}>
              <div>
                <div className={styles.pageHeader}>
                  <h6>{pageData.homeAbout?.subtitle || ""}</h6>

                  <div className={styles.strokeDiv}>
                    <h4 style={{ fontWeight: "700", display: "inLine" }}>
                      {pageData.homeAbout?.title || ""}
                    </h4>
                    <div className={styles.p2Stroke}>
                      <Image src={s1} alt="Logo" width={180} height={100} />
                    </div>
                  </div>
                </div>
                <div
                  style={{ color: "grey", width: "98%" }}
                  dangerouslySetInnerHTML={{ __html: p2Detail }}
                />
                <Button
                  name={pageData.homeAbout?.button?.title || ""}
                  btnHref={pageData.homeAbout?.button?.url || ""}
                  style={{
                    width: "20%",
                    height: "8%",

                    border: "2px solid red",
                    color: "#e70000",
                  }}
                />
              </div>

              <div className={styles.p2vImgDiv}>
                <img src={pageData.homeAbout?.videoImageUrl || ""} alt="Logo" />
                <a href={pageData?.homeAbout?.videoUrl || ""} target="_blank">
                  <IoPlayCircleOutline className={styles.p2playbtn} />
                </a>
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles.page3}>
            <div className={styles.p3LeftBorder}></div>
            <div className={styles.p3Main}>
              <div>
                <div className={styles.pageHeader}>
                  <h6>{pageData.homeCategory?.subtitle || ""}</h6>

                  <div className={styles.strokeDiv}>
                    <h4 style={{ fontWeight: "700", display: "inLine" }}>
                      {pageData.homeCategory?.title || ""}
                    </h4>

                    <div className={styles.p2Stroke} style={{ width: "70%" }}>
                      <Image src={s2} alt="Logo" width={180} height={100} />
                    </div>
                  </div>
                </div>
                <div className={styles.p3mainDiv}>
                  <div className={styles.p3bigImgDiv}>
                    <img
                      src={pageData?.categories?.[0].imageUrl || ""}
                      alt=""
                    />
                    <div>
                      <span>{pageData?.categories?.[0].title || ""}</span>
                      <Button
                        name={"Read More"}
                        style={{ width: "20%" }}
                        btnHref={pageData?.categories?.[0].link || ""}
                        color="#c7873f"
                      />
                    </div>
                  </div>

                  <div className={styles.p3smallImgDiv}>
                    {pageData?.categories?.slice(1).map((item, index) => (
                      <>
                        <div key={index}>
                          <img src={item.imageUrl} alt="" />
                          <span className={styles.p3smallImgDivTitle}>
                            {item.title}
                          </span>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.page4}>
            <div className={styles.p4LeftBorder}></div>
            <div className={styles.p4Main}>
              <div>
                <div className={styles.pageHeader}>
                  <h6>{pageData.homeServices?.subtitle || ""}</h6>
                  <br />

                  <div className={styles.strokeDiv}>
                    <h4 style={{ fontWeight: "700", display: "inLine" }}>
                      {pageData.homeServices?.title || ""}
                    </h4>
                    <div className={styles.p2Stroke} style={{ width: "65%" }}>
                      <Image src={s3} alt="Logo" width={180} height={100} />
                    </div>
                    {/* <Button
                  name="Book Now"
                  color={"green"}
                  style={{ width: "10%", border: "2px solid green" }}
                /> */}
                  </div>
                </div>
                <div className={styles.p4mainDiv}>
                  <div className={styles.p4bigImgDiv}>
                    {services.map((service, index) => (
                      <div className={styles.p4ImgDiv} key={index}>
                        <div>
                          <Image src={service.imgSrc} alt={service.title} />
                        </div>
                        <div style={{ backgroundColor: service.bgColor }}>
                          <h5>{service.title}</h5>
                          <p>{service.description}</p>
                          <Button
                            name={service.buttonText}
                            style={{ width: "30%", height: "25%" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LandingPage;
