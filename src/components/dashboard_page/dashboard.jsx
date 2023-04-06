import React, { useState } from "react";
import "../../css/dashboard_page/dashboard.css";
import { NavLink } from "react-router-dom";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Dashboard() {
  let [Formname, setname] = useState("");
  // let [status, setStatus] = useState("New");
  // let [status1, setStatus1] = useState("used");
  const [image, setImage] = useState("");
  console.log(image);
  let { id } = useParams();

  let baseUrl = "https://hesham-backend.onrender.com/newcars";
  let baseUrl1 = "https://hesham-backend.onrender.com/usedcars";
  let baseUrl2 = "https://hesham-backend.onrender.com/maintains";
  let baseUrl3 = "https://hesham-backend.onrender.com/schools";
  let baseUrl4 = "https://hesham-backend.onrender.com/accessories";
  let baseUrl5 = "https://hesham-backend.onrender.com/useddcars";
  let baseUrl6 = "https://hesham-backend.onrender.com/newwcars";
  let navigate = useNavigate();
  let formData = new FormData();
  const [formValue, setFormValue] = useState({
    // image:"",
    name: "",
    model: "",
    transmission: "",
    motor: 0,
    color: "",
    price: 0,
    year: 0,
    distance: 0,
    owner: id,
  });

  const getFormValues = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const nameInputChangeHandler = (event) => {
    setname(event.target.value);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    transformFile(file);
    // console.log(file);
  };
  const transformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      setImage("");
    }
  };

  // const statusHandler = (event) => {
  //   setStatus(event.target.value);
  //   // setStatus1(event.target.value);
  // };

  /** مذكرات النقض */
  const formSubissionHandler = (event) => {
    event.preventDefault();

    // if (status === "New") {
    formData.append("name", formValue.name);
    formData.append("model", formValue.model);
    formData.append("transmission", formValue.transmission);
    formData.append("motor", formValue.motor);
    formData.append("color", formValue.color);
    formData.append("price", formValue.price);
    formData.append("owner", formValue.owner);
    formData.append("image", image);

    console.log(formValue);
    axios
      .post(baseUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    alert("تم اضافة الملف الي صفحة مذكرات النقض");
    // window.location.reloade();
    // }
  };
  /** احكام النقض */
  const formSubissionHandler2 = (event) => {
    event.preventDefault();
    formData.append("name", formValue.name);
    formData.append("model", formValue.model);
    formData.append("transmission", formValue.transmission);
    formData.append("motor", formValue.motor);
    formData.append("color", formValue.color);
    formData.append("price", formValue.price);
    formData.append("owner", formValue.owner);
    formData.append("image", image);
    console.log(formValue);
    axios
      .post(baseUrl1, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    alert("تم اضافة الملف الي صفحة احكام النقض");
  };
  /** الحفظ*/
  const formSubissionHandler3 = (event) => {
    event.preventDefault();

    formData.append("name", formValue.name);
    formData.append("model", formValue.model);
    formData.append("transmission", formValue.transmission);
    formData.append("motor", formValue.motor);
    formData.append("color", formValue.color);
    formData.append("price", formValue.price);
    formData.append("owner", formValue.owner);
    formData.append("image", image);

    console.log(formValue);
    axios
      .post(baseUrl2, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    // navigate();
    alert("تم اضافة الملف الي صفحة الحفظ");
  };
  /**  سجل القضايا */
  const formSubissionHandler4 = (event) => {
    event.preventDefault();

    formData.append("name", formValue.name);
    formData.append("model", formValue.model);
    formData.append("transmission", formValue.transmission);
    formData.append("motor", formValue.motor);
    formData.append("color", formValue.color);
    formData.append("price", formValue.price);
    formData.append("owner", formValue.owner);
    formData.append("image", image);

    console.log(formValue);
    axios
      .post(baseUrl3, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    // navigate();
    alert("تم اضافة الملف الي صفحة سجل القضايا");
  };
  /**  جدول الجلسات*/
  const formSubissionHandler5 = (event) => {
    event.preventDefault();

    formData.append("name", formValue.name);
    formData.append("model", formValue.model);
    formData.append("transmission", formValue.transmission);
    formData.append("motor", formValue.motor);
    formData.append("color", formValue.color);
    formData.append("price", formValue.price);
    formData.append("owner", formValue.owner);
    formData.append("image", image);

    console.log(formValue);
    axios
      .post(baseUrl4, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    // navigate();
    alert("تم اضافة الملف الي صفحة جدول الجلسات");
  };
  /** سجل الموكلين */
  const formSubissionHandler6 = (event) => {
    event.preventDefault();

    formData.append("name", formValue.name);
    formData.append("model", formValue.model);
    formData.append("transmission", formValue.transmission);
    formData.append("motor", formValue.motor);
    formData.append("color", formValue.color);
    formData.append("price", formValue.price);
    formData.append("owner", formValue.owner);
    formData.append("image", image);

    console.log(formValue);
    axios
      .post(baseUrl5, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    // navigate();
    alert("تم اضافة الملف الي صفحة سجل الموكلين");
  };
  /** سجل التوكيلات */
  const formSubissionHandler7 = (event) => {
    event.preventDefault();

    formData.append("name", formValue.name);
    formData.append("model", formValue.model);
    formData.append("transmission", formValue.transmission);
    formData.append("motor", formValue.motor);
    formData.append("color", formValue.color);
    formData.append("price", formValue.price);
    formData.append("owner", formValue.owner);
    formData.append("image", image);

    console.log(formValue);
    axios
      .post(baseUrl6, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    // navigate();
    alert("تم اضافة الملف الي صفحة سجل التوكيلات");
  };
  const addCar = () => {
    navigate(`/admin3`);
  };
  const addCar1 = () => {
    navigate(`/admin2`);
  };
  const addCar2 = () => {
    navigate(`/admin`);
  };
  const addCar3 = () => {
    navigate(`/admin4`);
  };
  const addCar5 = () => {
    navigate(`/admin7`);
  };
  const addCar4 = () => {
    navigate(`/admin6`);
  };
  const addCar6 = () => {
    navigate(`/admin5`);
  };
  return (
    <div>
      <div className="container">
        <div className="form-actions col-8 ps-5  ">
          <button onClick={addCar2}> مذكرات النقض </button>
          <button onClick={addCar1}> احكام النقض </button>
          <button onClick={addCar}> الحفظ </button>
          <button onClick={addCar3}> سجل القضايا </button>
          <button onClick={addCar6}>جدول الجلسات</button>
          <button onClick={addCar4}> سجل الموكلين </button>
          <button onClick={addCar5}> سجل التوكيلات </button>
        </div>

        <div className="carForm">
          <div>
            <div className="form-control">
              <img
                width={150}
                // src={image === "" ? "" : URL.createObjectURL(image)}
              />
              <input
                type="file"
                name="image"
                multiple
                onChange={handleChange}
              />

              {/* <label >نوع الملف</label>
              <select >
                <option >مذكرات نقض</option>
                <option >احكام النقض</option>
                <option >الحفظ</option>
                <option >سجل القضايا</option>
                <option >جدول الجلسات</option>
                <option >سجل اسماء الموكلين</option>
                <option >سجل التوكيلات</option>
              </select> */}

              <div>
                {/* -----------------------------COLOR------------------------------------ */}
                <label htmlFor="color">الوصف</label>
                <input type="text" name="color" onChange={getFormValues} />
                {/* --------------------------------PRICE------------------------------------- */}
                <label htmlFor="price">تاريخ الاضافة </label>
                <input type="date" name="price" onChange={getFormValues} />
              </div>

              <div className="form-actions">
                <button onClick={formSubissionHandler}>
                  اضافة الي مذكرات النقض
                </button>{" "}
                <button onClick={formSubissionHandler2}>
                  {" "}
                  اضافة الي احكام النقض{" "}
                </button>
              </div>
              <div className="form-actions">
                <button onClick={formSubissionHandler3}>
                  {" "}
                  اضافة الي الحفظ{" "}
                </button>
                <button onClick={formSubissionHandler4}>
                  {" "}
                  اضافة الي سجل القضايا{" "}
                </button>
                <button onClick={formSubissionHandler5}>
                  {" "}
                  اضافة الي جدول الجلسات{" "}
                </button>
                <button onClick={formSubissionHandler6}>
                  {" "}
                  اضافة الي سجل الموكلين{" "}
                </button>
                <button onClick={formSubissionHandler7}>
                  {" "}
                  اضافة الي سجل التوكيلات{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
