import React from "react";
import "../css/Footer.css";
const Footer = () => {
  return (
    <footer class="section">
      <div class="container-fluid py-3 px-md-5">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-5 footer-head">
            <h4 class="text-uppercase text-light mb-4">خدماتنا</h4>
            <div class="d-flex flex-column justify-content-start">
              <a class="mb-2" href="http://localhost:3000/cars">
                <i class="fa fa-angle-right text-white mr-2"></i>التشريعات
              </a>
              <a class=" mb-2" href="http://localhost:3000/accessories">
                <i class="fa fa-angle-right text-white mr-2"></i>مبادئ و أحكام
              </a>
           
            </div>
          </div>
   
          <div class="col-lg-3 col-md-6 mb-5 footer-head">
            <h4 class="text-uppercase text-light mb-4">معلومات</h4>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt text-white mr-3"></i>
              مساكن حجازي - امام محكمة شبرا الخيمة
            </p>
            <p class="mb-2">
              <i class="fa fa-phone-alt text-white mr-3"></i>+(20) 01000192918
            </p>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 footer-head">
          <h4 class="text-uppercase text-light mb-4">تابعنا</h4>        
              <div class="d-flex justify-content-start">
           
              <a
                class="btn btn-lg btn-dark btn-lg-square mr-2"
                href="https://www.facebook.com/profile.php?id=100002322911206" 
                target={"_blank"}
              >
                <i class="fab fa-facebook-f"></i>
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
