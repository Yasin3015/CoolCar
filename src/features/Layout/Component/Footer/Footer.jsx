import React from "react";
import "./Footer.css";
import logo from '../../../../assets/Images/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <div className="footer-container">
        <div className="footer-section logo-section">
            <img src={logo} alt="Logo Icon" className="footer-logo"/>
          <p className="about-text">
            نوفر لك قطع زجاج سيارات متينة وعوازل زجاج السيارات بتصاميم مبتكرة
          </p>
        </div>

        {/* About Section */}
        <div className="footer-section about">
          <h2>عن كول كار</h2>
          <ul>
            <li><a href="#">الشروط والأحكام</a></li>
            <li><a href="#">سياسة الخصوصية</a></li>
            <li><a href="#">المنتجات</a></li>
            <li><a href="#">عن كول كار</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h2>اتصل بنا</h2>
          
        </div>

        {/* Social Section */}
        <div className="footer-section social">
          <h2>التواصل الاجتماعي</h2>
          {/* Add social media icons or links here */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 &copy; Cool Car. كل الحقوق محفوظة</p>
        <p>11111111111111 :: الرقم الضريبي</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
