import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/Images/logo.svg";
import user from "../../../../assets/Icons/user.svg";
import cart from "../../../../assets/Icons/cart.svg";
import ksa from "../../../../assets/Images/ksa-24.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container text-white">
      <header className="header py-3">
        <div className="d-flex justify-content-between align-items-center">
          {/* زر collapse للشاشات الصغيرة */}
          <div className="d-lg-none">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#topNavbarContent"
              aria-controls="topNavbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{
                border: "none",
                background: "transparent",
                fontSize: "24px",
                color: "white",
              }}
            >
              ☰ {/* رمز القائمة (Hamburger Icon) */}
            </button>
          </div>

          {/* الشعار للشاشات الصغيرة */}
          <div className="text-center d-lg-none">
            <img src={logo} alt="Cool Car Logo" className="logo" />
          </div>
        </div>

        {/* المحتوى القابل للطي */}
        <div
          className="collapse d-lg-flex justify-content-between align-items-center mobile"
          id="topNavbarContent"
        >
          <div className="d-flex align-items-center mobile">
            <Link to="/cart" className="text-white mx-3">
              <img src={cart} alt="Cart Icon" className="me-1" /> السلة (0 ر.س)
            </Link>
            <Link to="/login" className="text-white mx-3">
              <img src={user} alt="User Icon" className="me-1" /> تسجيل الدخول
            </Link>
            <div className="dropdown mx-3">
              <img src={ksa} alt="Saudi Flag" className="flag" />
            </div>
          </div>
          <div className="text-center d-none d-lg-block center-logo-container">
            <img src={logo} alt="Cool Car Logo" className="logo center-logo" />
          </div>
          <div className="d-flex align-items-center mobile">
            <Link to="/faq" className="text-white mx-3">الاسئلة الشائعة</Link>
            <Link to="/return-policy" className="text-white mx-3">سياسة الاسترجاع</Link>
            <Link to="/installation-guide" className="text-white mx-3">ارشادات التركيب</Link>
          </div>
        </div>

        {/* القسم الأوسط */}
        <nav className="d-flex justify-content-center mt-3 bottom-content">
          <Link to="/" className="text-white mx-3 active">الرئيسية</Link>
          <Link to="/products" className="text-white mx-3">المنتجات</Link>
          <Link to="/about" className="text-white mx-3">عن كول كار</Link>
          <Link to="/offers" className="text-white mx-3">العروض</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
