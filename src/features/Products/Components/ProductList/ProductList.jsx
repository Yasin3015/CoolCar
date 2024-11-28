import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";
import { fetchData } from "../../../../shared/utils/fetchData";
import SectionHeadComponent from "../../../../shared/Components/SectionHeadComponent/SectionHeadComponent";

const CardSwiper = ({ productsLink, secTitle, link }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productsLink) {
      const getData = async () => {
        try {
          const response = await fetchData(`https://coolcar.com.sa/api/${productsLink}`);
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      };

      getData();
    }
  }, [productsLink]); // Add productsLink as a dependency

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container product-list-container">
      <SectionHeadComponent
        link={link}
        title={secTitle}
      />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
