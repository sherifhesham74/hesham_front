import React from "react";
import "../../css/home_page/services.css";
import { Link } from "react-router-dom";

export default function Servives() {
  return (
    <section className="services mt-5" id="services">
      <div className="container service-container">
        <h1 class="display-4 text-uppercase text-center sevice-title">
         الخدمات
        </h1>
        <div className="box-container row">
          {/* <div className="box col-lg-4 mx-2">
            <div>
              <i className="fas fa-car service-icon"></i>
            </div>
            <h4 className="service-sections">CAR SELLING</h4>
            <p className="service-par">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, nisi.
            </p>
            <button className="button-5">
              <Link className="nav-link" to="/accessories">
                مبادئ وأحكام
              </Link>
            </button>
          </div> */}
{/* 
          <div className="box col-lg-4 mx-2">
            <div>
              <i className="fas fa-tools service-icon"></i>
            </div>
            <h4 className="service-sections">PARTS REPAIR </h4>
            <p className="service-par">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, nisi.
            </p>
            <button className="button-5">
              <Link className="nav-link" to="/cars">
                التشريعات
              </Link>
            </button>
          </div> */}
          <div className="box col-lg-4 mx-2">
          <h4 className="service-sections">مصر الرقمية</h4>
          <img src="https://digital.gov.eg/images/svg/New%20DE.svg"  width={"250px"} height={"120px"}/>           
            <button className="button-5">
              <Link className="nav-link" to="https://digital.gov.eg/" target={"_blank"}>
                بوابة مصر الرقمية
              </Link>
            </button>
          </div>
          <div className="box col-lg-4 mx-2">
            
            <h4 className="service-sections">محكمة النقض</h4>
            <img src="https://www.cc.gov.eg/img/logo.png" />
            <button className="button-5">
              <Link className="nav-link" to="https://www.cc.gov.eg/" target={"_blank"}>
               صفحة محكمة النقض
              </Link>
            </button>
          </div>
          {/* <div className="box col-lg-4 mx-2">
            <div>
              <i className="fas fa-check-circle service-icon"></i>
            </div>
            <h4 className="service-sections">24/7 SUPPORT</h4>
            <p className="service-par">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, nisi.
            </p>
            <button className="button-5">
              <Link className="nav-link" to="https://www.cc.gov.eg/legislations" target={"_blank"}>
                التشريعات
              </Link>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
