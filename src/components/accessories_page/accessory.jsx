import React, { useEffect, useState } from "react";
import "./accessories.css";
import axios from "axios";
import { useNavigate , Link } from "react-router-dom";
import { Container } from "reactstrap";

export default function Accessory() {


  return (
    <div className="container">      <section className="common__section ">
        <Container className="text-center">
          <h1 class="display-4 text-uppercase text-center text-light">
مبادئ و أحكام          
</h1>
        </Container>
      </section>
      <div className="container">
        <div className=" col-4">
      

          <button className="button-5">
              <Link className="nav-link" to="https://www.cc.gov.eg/legislations" target={"_blank"}>
                 جميع التشريعات
              </Link>
            </button>
            <br />
            <br />
          <button className="button-5">
              <Link className="nav-link" to="https://www.cc.gov.eg/official_journal" target={"_blank"}>
                 الجريدة الرسمية
              </Link>
            </button>
            <br />
            <br />

          <button className="button-5">
              <Link className="nav-link" to="https://www.cc.gov.eg/official_gazette" target={"_blank"}>
الوقائع المصرية            
  </Link>
            </button>
            <br />
            <br />

          <button className="button-5">
              <Link className="nav-link" to="https://www.cc.gov.eg/legislative_amendments" target={"_blank"}>
القوانين الرئيسية  </Link>
            </button>
         
        </div>
    
      </div>
      
    </div>
  );
}
