import React, { useState } from "react";
import HeroSection from "../../assets/images/HeroImage.png";
import BonhomieTitle from "../../assets/images/Bonhomie.png";
import SubHeader from "../../components/SubHeader/SubHeader";
import Carousel from "../../components/Carousel/Carousel";
import Boy1 from "../../assets/images/boy1.png";
import Boy2 from "../../assets/images/boy2.png";
import Boy3 from "../../assets/images/boy3.png";
import Boy4 from "../../assets/images/boy4.png";
import Profile1 from "../../assets/images/profile1.jpeg";
import Profile2 from "../../assets/images/profile2.jpeg";
import Profile3 from "../../assets/images/profile3.jpeg";
import Profile4 from "../../assets/images/profile4.jpeg";
import Profile5 from "../../assets/images/profile5.jpeg";
import Cat1 from "../../assets/images/cat1.jpeg";
import Cat2 from "../../assets/images/cat2.jpeg";
import Cat3 from "../../assets/images/cat3.jpeg";
import "./Home.css";

export default function Home() {
  const [images, setImages] = useState([
    {
      src: Boy1,
      alt: "Beige Co-ord Set",
      fav: false,
    },
    {
      src: Boy2,
      alt: "Blue Co-ord Set",
      fav: true,
    },
    {
      src: Boy3,
      alt: "Grey Co-ord Set",
      fav: false,
    },
    {
      src: Boy4,
      alt: "White Co-ord Set",
      fav: true,
    },
  ]);

  const [profiles] = useState([
    {
      src: Profile1,
      alt: "Profile 1",
    },
    {
      src: Profile2,
      alt: "Profile 2",
    },
    {
      src: Profile3,
      alt: "Profile 3",
    },
    {
      src: Profile4,
      alt: "Profile 4",
    },
    {
      src: Profile5,
      alt: "Profile 5",
    },
  ]);

  const [categories] = useState([
    {
      src: Cat1,
      alt: "Boys",
      desc: "3-8 yrs",
    },
    {
      src: Cat2,
      alt: "Girls",
      desc: "3-8 yrs",
    },
    {
      src: Cat3,
      alt: "Infants",
      desc: "0-2 yrs",
    },
  ]);

  return (
    <div className="home">
      <div className="hero-section">
        <img className="hero" src={HeroSection} alt="Hero Section" />
        <div className="overlay-section">
          <div className="overlay-left">
            <div className="top">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.83555 4.27559C9.14631 0.241469 14.8535 0.241469 16.1643 4.27559C16.5497 5.46167 17.655 6.26471 18.9021 6.26471C23.1438 6.26471 24.9074 11.6926 21.4758 14.1858C20.4669 14.9188 20.0447 16.2182 20.4301 17.4043C21.7408 21.4384 17.1236 24.793 13.692 22.2998C12.683 21.5667 11.3168 21.5667 10.3079 22.2998C6.87624 24.793 2.25902 21.4384 3.56978 17.4043C3.95516 16.2182 3.53298 14.9188 2.52404 14.1858C-0.907588 11.6926 0.856037 6.26471 5.09776 6.26471C6.34488 6.26471 7.45017 5.46167 7.83555 4.27559ZM14.7102 7.64541C14.5773 7.25309 14.1516 7.04279 13.7593 7.17568C13.3669 7.30857 13.1566 7.73434 13.2895 8.12666C13.7206 9.39931 14.9433 10.2337 16.2923 10.2337C16.7066 10.2337 17.0423 9.89788 17.0423 9.48366C17.0423 9.06945 16.7066 8.73366 16.2923 8.73366C15.5529 8.73366 14.9245 8.27804 14.7102 7.64541Z"
                  fill="#F2B01C"
                />
              </svg>
              <p>4.5 </p>
            </div>
            <div className="bottom">
              <p>Both Kids and their happy parents love us</p>
            </div>
          </div>
          <div className="overlay-right">
            <div className="top">
              <p>
                Supplying your child with the prettiest, coziest clothes
                possible at the most affordable prices.
              </p>
            </div>
            <div className="bottom">
              <button className="btn btn-primary">2023 Collection</button>
              <button className="btn btn-secondary">
                <div>
                  Shop Now{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_381_4120)">
                      <path
                        d="M2.38069 11.6289C2.07734 11.8686 2.0257 12.3088 2.26535 12.6121C2.50501 12.9155 2.9452 12.9671 3.24856 12.7275L2.38069 11.6289ZM13.7109 4.46205C14.0143 4.2224 14.0659 3.7822 13.8263 3.47885C13.5866 3.17549 13.1464 3.12385 12.8431 3.36351L13.7109 4.46205ZM8.15691 2.01405C7.77275 1.97072 7.4262 2.24702 7.38287 2.63119C7.33954 3.01535 7.61584 3.3619 8 3.40523L8.15691 2.01405ZM10.1339 2.94147L10.0554 3.63706L10.1339 2.94147ZM13.4945 7.19533L14.1894 7.27999L13.4945 7.19533ZM12.5495 9.16396C12.5027 9.54772 12.7759 9.89672 13.1597 9.94348C13.5434 9.99023 13.8924 9.71704 13.9392 9.33328L12.5495 9.16396ZM13.1021 3.71817L13.5921 3.21827L13.5921 3.21827L13.1021 3.71817ZM13.4258 4.12794L14.0256 3.76694L14.0256 3.76694L13.4258 4.12794ZM3.24856 12.7275L13.7109 4.46205L12.8431 3.36351L2.38069 11.6289L3.24856 12.7275ZM8 3.40523L10.0554 3.63706L10.2124 2.24589L8.15691 2.01405L8 3.40523ZM12.7996 7.11067L12.5495 9.16396L13.9392 9.33328L14.1894 7.27999L12.7996 7.11067ZM10.0554 3.63706C10.8914 3.73135 11.4594 3.79649 11.8851 3.89416C12.297 3.98866 12.4874 4.09584 12.6121 4.21807L13.5921 3.21827C13.2074 2.84113 12.7333 2.6524 12.1982 2.52962C11.6769 2.41001 11.0156 2.33648 10.2124 2.24589L10.0554 3.63706ZM14.1894 7.27999C14.2871 6.4776 14.3686 5.81721 14.3729 5.28239C14.3773 4.73341 14.3034 4.22854 14.0256 3.76694L12.8261 4.48894C12.9162 4.63855 12.9764 4.84864 12.973 5.27119C12.9695 5.7079 12.9014 6.2756 12.7996 7.11067L14.1894 7.27999ZM12.6121 4.21807C12.6946 4.29895 12.7665 4.38995 12.8261 4.48894L14.0256 3.76694C13.9049 3.56643 13.7592 3.38209 13.5921 3.21827L12.6121 4.21807Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_381_4120">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <img className="bonhomie-title" src={BonhomieTitle} alt="Bonhomie" />
      </div>
      <div className="hero-footer">
        <div>
          <p>2024</p>
        </div>
        <div>
          <p>PREMIUM KIDS WEAR</p>
        </div>
      </div>
      <SubHeader title="Latest Arrivals" buttonText="See All Products" />
      <Carousel images={images} setImages={setImages} deviceType={"desktop"} />
      <div className="loved-message">
        <div className="left">
          <p>Why are we loved</p>
        </div>
        <div className="right">
          <div className="top">
            <p>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio{" "}
            </p>
          </div>
          <div className="bottom">
            <div className="profiles">
              {profiles.map((profile, index) => (
                <div key={index} className="profile">
                  <img src={profile.src} alt={profile.alt} />
                </div>
              ))}
            </div>
            <div className="profiles-tag">+200 happy children</div>
          </div>
        </div>
      </div>
      <div className="cat-images">
        <div className="cat-item t1">
          <img src={categories[0].src} alt={categories[0].alt} />
          <div className="sub">
            <div className="text">
              <h3 className="title">{categories[0].alt}</h3>
              <p className="desc">{categories[0].desc}</p>
            </div>
            <button className="btn btn-secondary bt">
              <div>
                Shop Now{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_381_4120)">
                    <path
                      d="M2.38069 11.6289C2.07734 11.8686 2.0257 12.3088 2.26535 12.6121C2.50501 12.9155 2.9452 12.9671 3.24856 12.7275L2.38069 11.6289ZM13.7109 4.46205C14.0143 4.2224 14.0659 3.7822 13.8263 3.47885C13.5866 3.17549 13.1464 3.12385 12.8431 3.36351L13.7109 4.46205ZM8.15691 2.01405C7.77275 1.97072 7.4262 2.24702 7.38287 2.63119C7.33954 3.01535 7.61584 3.3619 8 3.40523L8.15691 2.01405ZM10.1339 2.94147L10.0554 3.63706L10.1339 2.94147ZM13.4945 7.19533L14.1894 7.27999L13.4945 7.19533ZM12.5495 9.16396C12.5027 9.54772 12.7759 9.89672 13.1597 9.94348C13.5434 9.99023 13.8924 9.71704 13.9392 9.33328L12.5495 9.16396ZM13.1021 3.71817L13.5921 3.21827L13.5921 3.21827L13.1021 3.71817ZM13.4258 4.12794L14.0256 3.76694L14.0256 3.76694L13.4258 4.12794ZM3.24856 12.7275L13.7109 4.46205L12.8431 3.36351L2.38069 11.6289L3.24856 12.7275ZM8 3.40523L10.0554 3.63706L10.2124 2.24589L8.15691 2.01405L8 3.40523ZM12.7996 7.11067L12.5495 9.16396L13.9392 9.33328L14.1894 7.27999L12.7996 7.11067ZM10.0554 3.63706C10.8914 3.73135 11.4594 3.79649 11.8851 3.89416C12.297 3.98866 12.4874 4.09584 12.6121 4.21807L13.5921 3.21827C13.2074 2.84113 12.7333 2.6524 12.1982 2.52962C11.6769 2.41001 11.0156 2.33648 10.2124 2.24589L10.0554 3.63706ZM14.1894 7.27999C14.2871 6.4776 14.3686 5.81721 14.3729 5.28239C14.3773 4.73341 14.3034 4.22854 14.0256 3.76694L12.8261 4.48894C12.9162 4.63855 12.9764 4.84864 12.973 5.27119C12.9695 5.7079 12.9014 6.2756 12.7996 7.11067L14.1894 7.27999ZM12.6121 4.21807C12.6946 4.29895 12.7665 4.38995 12.8261 4.48894L14.0256 3.76694C13.9049 3.56643 13.7592 3.38209 13.5921 3.21827L12.6121 4.21807Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_381_4120">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="cat-item t2">
          <div className="top">
            <h3>
              Find the <span>best deals</span> on comfortable child co-ord sets
              for your little ones.
            </h3>
            <button className="btn btn-fourth">
              <div>
                Shop Now{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_381_4120)">
                    <path
                      d="M2.38069 11.6289C2.07734 11.8686 2.0257 12.3088 2.26535 12.6121C2.50501 12.9155 2.9452 12.9671 3.24856 12.7275L2.38069 11.6289ZM13.7109 4.46205C14.0143 4.2224 14.0659 3.7822 13.8263 3.47885C13.5866 3.17549 13.1464 3.12385 12.8431 3.36351L13.7109 4.46205ZM8.15691 2.01405C7.77275 1.97072 7.4262 2.24702 7.38287 2.63119C7.33954 3.01535 7.61584 3.3619 8 3.40523L8.15691 2.01405ZM10.1339 2.94147L10.0554 3.63706L10.1339 2.94147ZM13.4945 7.19533L14.1894 7.27999L13.4945 7.19533ZM12.5495 9.16396C12.5027 9.54772 12.7759 9.89672 13.1597 9.94348C13.5434 9.99023 13.8924 9.71704 13.9392 9.33328L12.5495 9.16396ZM13.1021 3.71817L13.5921 3.21827L13.5921 3.21827L13.1021 3.71817ZM13.4258 4.12794L14.0256 3.76694L14.0256 3.76694L13.4258 4.12794ZM3.24856 12.7275L13.7109 4.46205L12.8431 3.36351L2.38069 11.6289L3.24856 12.7275ZM8 3.40523L10.0554 3.63706L10.2124 2.24589L8.15691 2.01405L8 3.40523ZM12.7996 7.11067L12.5495 9.16396L13.9392 9.33328L14.1894 7.27999L12.7996 7.11067ZM10.0554 3.63706C10.8914 3.73135 11.4594 3.79649 11.8851 3.89416C12.297 3.98866 12.4874 4.09584 12.6121 4.21807L13.5921 3.21827C13.2074 2.84113 12.7333 2.6524 12.1982 2.52962C11.6769 2.41001 11.0156 2.33648 10.2124 2.24589L10.0554 3.63706ZM14.1894 7.27999C14.2871 6.4776 14.3686 5.81721 14.3729 5.28239C14.3773 4.73341 14.3034 4.22854 14.0256 3.76694L12.8261 4.48894C12.9162 4.63855 12.9764 4.84864 12.973 5.27119C12.9695 5.7079 12.9014 6.2756 12.7996 7.11067L14.1894 7.27999ZM12.6121 4.21807C12.6946 4.29895 12.7665 4.38995 12.8261 4.48894L14.0256 3.76694C13.9049 3.56643 13.7592 3.38209 13.5921 3.21827L12.6121 4.21807Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_381_4120">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
          </div>
          <div className="bottom">
            <img src={categories[2].src} alt={categories[2].alt} />
            <div className="sub">
              <div className="text">
                <h3 className="title">{categories[2].alt}</h3>
                <p className="desc">{categories[2].desc}</p>
              </div>
              <button className="btn btn-secondary bt">
                <div>
                  Shop Now{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_381_4120)">
                      <path
                        d="M2.38069 11.6289C2.07734 11.8686 2.0257 12.3088 2.26535 12.6121C2.50501 12.9155 2.9452 12.9671 3.24856 12.7275L2.38069 11.6289ZM13.7109 4.46205C14.0143 4.2224 14.0659 3.7822 13.8263 3.47885C13.5866 3.17549 13.1464 3.12385 12.8431 3.36351L13.7109 4.46205ZM8.15691 2.01405C7.77275 1.97072 7.4262 2.24702 7.38287 2.63119C7.33954 3.01535 7.61584 3.3619 8 3.40523L8.15691 2.01405ZM10.1339 2.94147L10.0554 3.63706L10.1339 2.94147ZM13.4945 7.19533L14.1894 7.27999L13.4945 7.19533ZM12.5495 9.16396C12.5027 9.54772 12.7759 9.89672 13.1597 9.94348C13.5434 9.99023 13.8924 9.71704 13.9392 9.33328L12.5495 9.16396ZM13.1021 3.71817L13.5921 3.21827L13.5921 3.21827L13.1021 3.71817ZM13.4258 4.12794L14.0256 3.76694L14.0256 3.76694L13.4258 4.12794ZM3.24856 12.7275L13.7109 4.46205L12.8431 3.36351L2.38069 11.6289L3.24856 12.7275ZM8 3.40523L10.0554 3.63706L10.2124 2.24589L8.15691 2.01405L8 3.40523ZM12.7996 7.11067L12.5495 9.16396L13.9392 9.33328L14.1894 7.27999L12.7996 7.11067ZM10.0554 3.63706C10.8914 3.73135 11.4594 3.79649 11.8851 3.89416C12.297 3.98866 12.4874 4.09584 12.6121 4.21807L13.5921 3.21827C13.2074 2.84113 12.7333 2.6524 12.1982 2.52962C11.6769 2.41001 11.0156 2.33648 10.2124 2.24589L10.0554 3.63706ZM14.1894 7.27999C14.2871 6.4776 14.3686 5.81721 14.3729 5.28239C14.3773 4.73341 14.3034 4.22854 14.0256 3.76694L12.8261 4.48894C12.9162 4.63855 12.9764 4.84864 12.973 5.27119C12.9695 5.7079 12.9014 6.2756 12.7996 7.11067L14.1894 7.27999ZM12.6121 4.21807C12.6946 4.29895 12.7665 4.38995 12.8261 4.48894L14.0256 3.76694C13.9049 3.56643 13.7592 3.38209 13.5921 3.21827L12.6121 4.21807Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_381_4120">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="cat-item t3">
          <img src={categories[1].src} alt={categories[1].alt} />
          <div className="sub">
            <div className="text">
              <h3 className="title">{categories[1].alt}</h3>
              <p className="desc">{categories[1].desc}</p>
            </div>
            <button className="btn btn-secondary bt">
              <div>
                Shop Now{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_381_4120)">
                    <path
                      d="M2.38069 11.6289C2.07734 11.8686 2.0257 12.3088 2.26535 12.6121C2.50501 12.9155 2.9452 12.9671 3.24856 12.7275L2.38069 11.6289ZM13.7109 4.46205C14.0143 4.2224 14.0659 3.7822 13.8263 3.47885C13.5866 3.17549 13.1464 3.12385 12.8431 3.36351L13.7109 4.46205ZM8.15691 2.01405C7.77275 1.97072 7.4262 2.24702 7.38287 2.63119C7.33954 3.01535 7.61584 3.3619 8 3.40523L8.15691 2.01405ZM10.1339 2.94147L10.0554 3.63706L10.1339 2.94147ZM13.4945 7.19533L14.1894 7.27999L13.4945 7.19533ZM12.5495 9.16396C12.5027 9.54772 12.7759 9.89672 13.1597 9.94348C13.5434 9.99023 13.8924 9.71704 13.9392 9.33328L12.5495 9.16396ZM13.1021 3.71817L13.5921 3.21827L13.5921 3.21827L13.1021 3.71817ZM13.4258 4.12794L14.0256 3.76694L14.0256 3.76694L13.4258 4.12794ZM3.24856 12.7275L13.7109 4.46205L12.8431 3.36351L2.38069 11.6289L3.24856 12.7275ZM8 3.40523L10.0554 3.63706L10.2124 2.24589L8.15691 2.01405L8 3.40523ZM12.7996 7.11067L12.5495 9.16396L13.9392 9.33328L14.1894 7.27999L12.7996 7.11067ZM10.0554 3.63706C10.8914 3.73135 11.4594 3.79649 11.8851 3.89416C12.297 3.98866 12.4874 4.09584 12.6121 4.21807L13.5921 3.21827C13.2074 2.84113 12.7333 2.6524 12.1982 2.52962C11.6769 2.41001 11.0156 2.33648 10.2124 2.24589L10.0554 3.63706ZM14.1894 7.27999C14.2871 6.4776 14.3686 5.81721 14.3729 5.28239C14.3773 4.73341 14.3034 4.22854 14.0256 3.76694L12.8261 4.48894C12.9162 4.63855 12.9764 4.84864 12.973 5.27119C12.9695 5.7079 12.9014 6.2756 12.7996 7.11067L14.1894 7.27999ZM12.6121 4.21807C12.6946 4.29895 12.7665 4.38995 12.8261 4.48894L14.0256 3.76694C13.9049 3.56643 13.7592 3.38209 13.5921 3.21827L12.6121 4.21807Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_381_4120">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
