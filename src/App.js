import "./App.css";
import Header from "./components/home_page/Header";
import Navs from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Cars from "./components/car_page/cars";
import CarDetails from "./components/car_details/carDetails";
import Footer from "./components/footer";
import Maintenance from "./components/maintain_page/maintain";
import School from "./components/schools_page/school";
import Notfound from "./components/notfound_page/notfound";
import Login from "./components/login_page/login";
import Carshop from "./components/carShop/carshop";
import Payment from "./components/payment_page/payment";
import Dashboard from "./components/dashboard_page/dashboard";
import Register from "./components/register_page/register";
import { Admin } from "./components/dashboard_page/admin";
import { Admin2 } from "./components/dashboard_page/admin2";
import { Admin3 } from "./components/dashboard_page/admin3";
import { Admin4 } from "./components/dashboard_page/admin4";
import { Admin5 } from "./components/dashboard_page/admin5";
import { Admin6 } from "./components/dashboard_page/admin6";
import { Admin7 } from "./components/dashboard_page/admin7";
import LoginCarsShop from "./components/login_page/login_cars_shop";
import Accessory from "./components/accessories_page/accessory";
import Accdetails from "./components/accessory_details/accdetails";
import { Cart } from "./components/cart/cart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// import { useLocation } from "react-router-dom";


const stripPromise=loadStripe(process.env.REACT_APP_STRIPE_KEY);

function App() {
  return (
    <Elements stripe={stripPromise}>
    <>
      <Navs></Navs>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin2" element={<Admin2 />} />
        <Route path="/admin3" element={<Admin3 />} />
        <Route path="/admin4" element={<Admin4 />} />
        <Route path="/admin5" element={<Admin5 />} />
        <Route path="/admin6" element={<Admin6 />} />
        <Route path="/admin7" element={<Admin7 />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cardetails" element={<CarDetails />} />
        <Route path="/cardetails/:id" element={<CarDetails />} />
        <Route path="/carshop" element={<Carshop />} />
        <Route path="/carshop/:id" element={<Carshop />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/schools" element={<School />} />
        <Route path="/accessories" element={<Accessory />} />
        <Route path="/accessorydetails" element={<Accdetails />} />
        <Route path="/accessorydetails/:id" element={<Accdetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopLogin" element={<LoginCarsShop />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/admin/:id" element={<Admin />} />
        <Route path="/admin2/:id" element={<Admin2 />} />
        <Route path="/admin3/:id" element={<Admin3 />} />
        <Route path="/admin4/:id" element={<Admin4 />} />
        <Route path="/admin5/:id" element={<Admin5 />} />
        <Route path="/admin6/:id" element={<Admin6 />} />
        <Route path="/admin7/:id" element={<Admin7 />} />
        <Route path="/mycart" element={<Cart />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </>
    </Elements>
  );
}

export default App;
