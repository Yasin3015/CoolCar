import React from "react";
import Hero from "../Components/Hero/Hero";
import BannerComponent from "../../../shared/Components/BannerComponent/Banner";
import ContactForm from "../../ContactUs/Components/ContactUsForm/ContactusForm";
import ReviewSlider from "../../Reviews/Components/ReviewsList/ReviewsList";
import ProductList from "../../Products/Components/ProductList/ProductList";
import bannerImageOne from "../../../assets/Images/bannerImg1.png";
import ServicesList from "../Components/ServicesList/ServicesList";

const Home = () => {
  return (
    <>
      <Hero
        title="ودع حراره الشمس، بقوه عزل خياليه"
        subtitle="و لأول مرة من المصنع للباب بيتك"
        buttonText="ابدأ الآن"
      />
      <ProductList productsLink={"get_offers"} secTitle={"عروضنا"} />
      <BannerComponent
        imageUrl={bannerImageOne}
        title="اجعل مسيرتك تعمل بأفضل أداء"
        subtitle="اكتشف مجموعة واسعة من قطع زجاج المسيرات وعوازل الزجاج المصممة لتحمل الظروف القاسية."
        buttonText="اشترك الآن"
      />
      <ProductList
        productsLink={"get_most_ordered_products"}
        secTitle={"المنتجات الاكثر طلبا"}
      />
      <ServicesList />
      <ProductList
        productsLink={"get_most_ordered_products"}
        secTitle={"أحدث المنتجات "}
      />
      <BannerComponent
        imageUrl={bannerImageOne}
        title="نضمن لك جودة لا تضاهي"
        subtitle="ما فرق معك العزل؟ استرد مبلغك"
        buttonText="اشترك الآن"
      />
      <ContactForm />
      <ReviewSlider />
    </>
  );
};

export default Home;
