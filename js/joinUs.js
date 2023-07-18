let isArabic = false;

function toggleLanguage() {
  document.documentElement.dir = "ltr";
  const button = document.getElementById("translationButton");

  // join us
  const title = document.getElementById("title");
  const fullName = document.getElementById("fullName");
  const inputFullName = document.getElementById("inputFullName");
  const idNumber = document.getElementById("idNumber");
  const inputIdNumber = document.getElementById("inputIdNumber");
  const mobile = document.getElementById("mobile");
  const inputMobile = document.getElementById("inputMobile");
  const email = document.getElementById("email");
  const inputEmail = document.getElementById("inputEmail");
  const city = document.getElementById("city");
  const select = document.getElementById("select");
  const car = document.getElementById("car");
  const inputCar = document.getElementById("inputCar");
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
    title.innerHTML = "Join us and help us revolutionize last-mile delivery";
    fullName.innerHTML = "Full Name";
    inputFullName.placeholder = "Full Name";
    idNumber.innerHTML = "ID Number";
    inputIdNumber.placeholder = "ID Number";
    mobile.innerHTML = "Mobile Number";
    inputMobile.placeholder = "Mobile Number";
    email.innerHTML = "Email";
    inputEmail.placeholder = "Email";
    city.innerHTML = "City";
    select.innerHTML = "Select City";
    car.innerHTML = "Car Type and Model";
    inputCar.placeholder = "Car Type";
    submit.innerHTML = "Submit";
    subTitle.innerHTML = "Solution";
    titleBox.innerHTML = "Delivery Captions";
    paragraph.innerHTML = "Join our team, drive innovation, and elevate last mile delivery with exceptional service. Be a crucial part of our mission to redefine the industry and exceed customer expectations.";

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
    idNumber.innerHTML = "رقم الهوية أو رقم بطاقة الإقامة";
    inputIdNumber.placeholder = "ادخل رقمك";
    mobile.innerHTML = " رقم الجوال";
    inputMobile.placeholder = "ادخل رقم الجوال";
    email.innerHTML = "البريد الالكتروني";
    inputEmail.placeholder = "ادخل البريد الالكتروني الخاص بك";
    city.innerHTML = "المدينة";
    select.innerHTML = "اختار المدينة";
    car.innerHTML = "نوع وطراز السيارة";
    inputCar.placeholder = "مثال: سيارة فان مبردة / مجمدة";
    submit.innerHTML = "تقديم الطلب";
    subTitle.innerHTML = "الحل";
    titleBox.innerHTML = "كباتن النوصيل";
    paragraph.innerHTML = "انضم إلى فريقنا وكن جزءًا من رحلة الابتكار، و التغيير حيث نسعى لتحسين تجربة توصيل الشحنات في الميل الأخير من خلال تقديم خدمة استثنائية.";
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
