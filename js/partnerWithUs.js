let isArabic = false;

function toggleLanguage() {
  document.documentElement.dir = "ltr";
  const button = document.getElementById("translationButton");

  // join us
  const title = document.getElementById("title");
  const fullName = document.getElementById("fullName");
  const inputFullName = document.getElementById("inputFullName");
  const inputCompany = document.getElementById("inputCompany");
  const company = document.getElementById("company");
  const email = document.getElementById("email");
  const inputEmail = document.getElementById("inputEmail");
  const contact = document.getElementById("contact");
  const inputContact = document.getElementById("inputContact");
  const city = document.getElementById("city");
  const select = document.getElementById("select");
  const business = document.getElementById("business");
  const selectBusiness = document.getElementById("selectBusiness");
  const submit = document.getElementById("submit");
  const subTitle = document.getElementById("subTitle");
  const titleBox = document.getElementById("titleBox");
  const paragraph = document.getElementById("paragraph");

  // Footer
  const seamless_delivery_logistics_txt = document.getElementById(
    "seamless_delivery_logistics_txt"
  );
  const company_txt = document.getElementById("company_txt");
  const driver_registration_txt = document.getElementById(
    "driver_registration_txt"
  );
  const collaborate_with_us_txt = document.getElementById(
    "collaborate_with_us_txt"
  );
  const about_txt = document.getElementById("about_txt");
  const our_story_txt = document.getElementById("our_story_txt");
  const contact_us_txt = document.getElementById("contact_us_txt");
  const dash_right_txt = document.getElementById("dash_right_txt");
  const terms_and_conditions_txt = document.getElementById(
    "terms_and_conditions_txt"
  );
  const privacy_policy_txt = document.getElementById("privacy_policy_txt");

  const currentDir = document.documentElement.dir;

  if (isArabic) {
    // Switch to English
    button.textContent = "AR";
    title.innerHTML = "";
    fullName.innerHTML = "Full Name";
    inputFullName.placeholder = "Full Name";
    email.innerHTML = "Email";
    inputEmail.placeholder = "you@company.com";
    company.innerHTML = "Company name";
    inputCompany.placeholder = "Enter your company name ";
    contact.innerHTML = "Contact Mobile Number";
    inputContact.placeholder = "Mobile Number";
    city.innerHTML = "City";
    select.innerHTML = "Select City";
    business.innerHTML = "Business Type";
    selectBusiness.innerHTML = "Select business type";
    submit.innerHTML = "Let's Collaborate";
    subTitle.innerHTML = "business";
    titleBox.innerHTML = "restaurants";
    paragraph.innerHTML = "Maximize your business potential with our strategic partnership. Leverage our expertise, resources, and tailored solutions for sustainable growth and competitive advantage.";

    // Footer
    seamless_delivery_logistics_txt.innerHTML = `Seamless Delivery and Logistics، Boost Efficiency Today!`;
    company_txt.innerHTML = `Company`;
    driver_registration_txt.innerHTML = `Driver Registration `;
    collaborate_with_us_txt.innerHTML = `Partner Registration `;
    about_txt.innerHTML = `About`;
    our_story_txt.innerHTML = `Our Story`;
    contact_us_txt.innerHTML = `Contact us`;
    dash_right_txt.innerHTML = `© All rights reserved Dash 2023.`;
    terms_and_conditions_txt.innerHTML = `Terms & Conditions`;
    privacy_policy_txt.innerHTML = `Privacy Policy`;
  } else {
    // Switch to Arabic
    document.documentElement.dir = "rtl";
    button.textContent = "EN";
    title.innerHTML = "كن جزءًا من فريقنا وقم بإحداث ثورة في تسليم الميل الأخير كقائد توصيل.";
    fullName.innerHTML = "الاسم";
    inputFullName.placeholder = "ادخل اسمك الثلاثي";
    email.innerHTML = "البريد الالكتروني";
    inputEmail.placeholder = "ادخل البريد الالكتروني الخاص بك";
    company.innerHTML = "اسم الشركة";
    inputCompany.placeholder = "أدخل اسم الشركة";
    contact.innerHTML = " رقم الجوال";
    inputContact.placeholder = "ادخل رقم الجوال";
    city.innerHTML = "المدينة";
    select.innerHTML = "اختار المدينة";
    business.innerHTML = "النشاط التجاري";
    selectBusiness.innerHTML = "اختر النساط التجاري الخاص بك";
    submit.innerHTML = "تقديم الطلب";
    subTitle.innerHTML = "الحل";
    titleBox.innerHTML = "المطاعم";
    paragraph.innerHTML = "أطلق إمكانيات عملك من خلال شراكتنا الإستراتيجية. استفد من خبرتنا ومواردنا وحلولنا المصممة خصيصًا لتحقيق النمو المستدام والميزة التنافسية. معًا ، يمكننا تحقيق نجاح ملحوظ.";
    // Footer
    seamless_delivery_logistics_txt.innerHTML = `التسليم السلس والخدمات اللوجستية متميزة، لزيادة كفاءة مشروعك`;
    company_txt.innerHTML = `الشركة`;
    driver_registration_txt.innerHTML = `تسجيل الكباتن`;
    collaborate_with_us_txt.innerHTML = `تسجيل الشركاء`;
    about_txt.innerHTML = `من نحن`;
    our_story_txt.innerHTML = `عن داش`;
    contact_us_txt.innerHTML = `تواصل معنا`;
    dash_right_txt.innerHTML = `© 2023 داش. جميع الحقوق محفوظة`;
    terms_and_conditions_txt.innerHTML = `الشروط والأحكام`;
    privacy_policy_txt.innerHTML = `سياسة الخصوصية`;
  }

  isArabic = !isArabic;
}
