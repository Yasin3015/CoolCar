const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) errors.name = "الاسم مطلوب";
  if (!formData.email.trim()) {
    errors.email = "البريد الإلكتروني مطلوب";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "البريد الإلكتروني غير صالح";
  }
  if (!formData.address.trim()) errors.address = "العنوان مطلوب";
  if (!formData.message.trim()) errors.message = "الرسالة مطلوبة";

  return errors;
};

export default validateContactForm;
