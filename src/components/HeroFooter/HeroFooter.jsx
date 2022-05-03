import React from "react";
import "../HeroFooter/heroFooter.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import CradaChill from "../../assets/imgHeroFooter/cradachill.png";
import GardenMap from "../../assets/imgHeroFooter/gardenMap.png";
import Marketplace from "../../assets/imgHeroFooter/marketplaceNft.png";
import JobsMarkets from "../../assets/imgHeroFooter/jobsmarkets.png";

const HeroFooter = () => {

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span >Recent Projects</span>
       <a
            className="btn PrimaryBtn"
            href="https://github.com/belcar-ceci"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={CradaChill} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GardenMap} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Marketplace} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={JobsMarkets} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroFooter;
