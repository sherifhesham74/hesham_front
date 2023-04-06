import React from "react";
import "../../css/notfound_page/notfoundpage.css";
import { NavLink } from "react-router-dom";

const Page = () => {
  return (
    <>
      <div id="error-page">
        <div class="content">
          <h2 class="header" data-text="404">
            404
          </h2>
          <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
          <p>
            Sorry, the page you're looking for doesn't exist. If you think
            something is broken.
          </p>
          <div class="btns">
            <NavLink to="/">Back To Home Page</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
