import React from "react";
// import coverImage from "../../images/fashion2022.jpg";
//css
import "./Home.css";

function Home() {
  return (
    <div className="card bg-dark text-white border-0 card-cover">
      <div class="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container ">
          <h5 class="card-title display-2 fw-bolder mb-3">
            GRAB THE OFFER WITH EXCITING GIFTS
          </h5>
          <p class="card-text display-6 mb-3">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text display-8">
            <u className="py-1">
              {" "}
              Offer ends in next 3 days{" "}
              <span>
                <strong>Go, grab</strong>
              </span>
            </u>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
