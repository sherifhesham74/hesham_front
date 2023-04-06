import React, { useEffect, useState } from "react";
import "../../css/car_page/carCards.css";
import axios from "axios";
import { useNavigate , Link } from "react-router-dom";
import { Container } from "reactstrap";

export default function CarCards() {
 
  return (
    <div className="container">      
      <div className="container">
        <div className=" col-4">
      

          <button className="button-5">
              <Link className="nav-link" to="https://adnanlawyer.online/%d9%82%d8%a7%d9%86%d9%88%d9%86-%d8%a7%d9%84%d8%a5%d8%ac%d8%b1%d8%a7%d8%a1%d8%a7%d8%aa-%d8%a7%d9%84%d8%ac%d9%86%d8%a7%d8%a6%d9%8a%d8%a9/" target={"_blank"}>
                 قانون الاجراءات الجنائية
              </Link>
            </button>
            <br />
            <br />
          <button className="button-5">
              <Link className="nav-link" to="https://adnanlawyer.online/category/%d8%a7%d9%84%d8%aa%d8%b4%d8%b1%d9%8a%d8%b9%d8%a7%d8%aa/%d8%a7%d9%84%d9%82%d8%a7%d9%86%d9%88%d9%86-%d8%a7%d9%84%d9%85%d8%af%d9%86%d9%80%d9%89/" target={"_blank"}>
القانون المدني           
   </Link>
            </button>
            <br />
            <br />

          <button className="button-5">
              <Link className="nav-link" to="https://adnanlawyer.online/category/%d8%a7%d9%84%d8%aa%d8%b4%d8%b1%d9%8a%d8%b9%d8%a7%d8%aa/%d9%82%d8%a7%d9%86%d9%88%d9%86-%d8%a7%d9%84%d8%b9%d9%82%d9%88%d8%a8%d8%a7%d8%aa/" target={"_blank"}>
قانون العقوبات   </Link>
            </button>
            <br />
            <br />

          <button className="button-5">
              <Link className="nav-link" to="https://adnanlawyer.online/category/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA/%D9%82%D8%A7%D9%86%D9%88%D9%86-%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%81%D8%B9%D9%80%D8%A7%D8%AA/" target={"_blank"}>
قانون المرافعات </Link>
            </button>
         
        </div>
    
      </div>
      
    </div>
  );
}
