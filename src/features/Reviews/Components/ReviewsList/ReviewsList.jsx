import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import './ReviewsList.css';
import ReviewCard from "../ReviewCard";
import { fetchData } from "../../../../shared/utils/fetchData";

const ReviewSlider = ({ reviewsLink="get_reviews" }) => {
  const swiperRef = useRef(null); // Reference for the Swiper instance
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (reviewsLink) {
      const getData = async () => {
        try {
          const response = await fetchData(`https://coolcar.com.sa/api/${reviewsLink}`);
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      };

      getData();
    }
  }, [reviewsLink]); // Add reviewsLink as a dependency

  if (loading) {
    return <p>Loading...</p>;
  }
  const isDisabled = data?.length < 4; // Check if reviews are less than 4
  return (
    <div className="container">
      <div className="review-slider-container">
        <h3 className="reviews-header">اراء العملاء</h3>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={false}
          slidesPerView={3} // Default for larger screens
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
          breakpoints={{
            0: {
              slidesPerView: 1, // Show 1 card on mobile
            },
            768: {
              slidesPerView: 2, // Show 2 cards on tablets
            },
            1024: {
              slidesPerView: 3, // Show 3 cards on larger screens
            },
          }}
        >
          {data.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard data={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="custom-avigation-buttons">
        <button
          className={`swiper-button-prev ${isDisabled ? "swiper-button-disabled" : ""}`}
          disabled={isDisabled}
          onClick={() => swiperRef.current?.slidePrev()} // Trigger previous slide
        >
          &larr;
        </button>
        <button
          className={`swiper-button-next ${isDisabled ? "swiper-button-disabled" : ""}`}
          disabled={isDisabled}
          onClick={() => swiperRef.current?.slideNext()} // Trigger next slide
        >
          &rarr;
        </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
