import React, { useState } from "react";
import Textarea from "../../../../shared/Components/Textarea/Textarea";
import Input from "../../../../shared/Components/InputComponent/Input";
import Button from "../../../../shared/Components/Button/Button";
import "./ContactusForm.css";
import validateContactForm from "../../../../shared/utils/validateContactusForm";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = () => {
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);
  };

  return (
    <div className="container">
      <div className="contact-form-container">
        <h2>اتصل بنا</h2>
        <div className="form-content">
          <div className="txt-area">
            <Textarea
              placeholder="اكتب رسالتك..."
              value={formData.message}
              onChange={(value) => handleChange("message", value)}
              label="اكتب رسالتك"
              error={errors.message} // عرض رسالة الخطأ
            />
          </div>
          <div className="input-fields">
            <Input
              label="الاسم"
              placeholder="ادخل اسمك"
              value={formData.name}
              onChange={(value) => handleChange("name", value)}
              icon="👤"
              error={errors.name} // عرض رسالة الخطأ
            />
            <Input
              label="البريد الإلكتروني"
              placeholder="ادخل بريدك الإلكتروني"
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
              icon="✉️"
              error={errors.email} // عرض رسالة الخطأ
            />
            <Input
              label="العنوان"
              placeholder="ادخل عنوانك"
              value={formData.address}
              onChange={(value) => handleChange("address", value)}
              icon="🏠"
              error={errors.address} // عرض رسالة الخطأ
            />
          </div>
        </div>
        <Button
          title="إرسال"
          onClick={handleSubmit}
          className={"submit-button"}
        />
      </div>
    </div>
  );
};

export default ContactForm;
