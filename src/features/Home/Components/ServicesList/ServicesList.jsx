import React from "react";
import "./ServicesList.css";
import ServiceCard from "../SrviceCard/SrviceCard";
import image from '../../../../assets/Images/Vector (1).svg'

const ServicesList = () => {
  const cardsData = [
    {
      title: "ضمان الأداء",
      description: "اطلب و انت مطمئن",
      icon: image, // قم باستبدال المسار بأيقونة مناسبة
    },
    {
      title: "خدمة العملاء",
      description: "نحن هنا للمساعدة",
      icon: image,
    },
    {
      title: "التوصيل السريع",
      description: "نصلك بأسرع وقت ممكن",
      icon: image,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesList;
