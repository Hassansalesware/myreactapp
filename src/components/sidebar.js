import React from "react";

export default function sidebar(props) {
  return (
    <>
      <div class="main-sidebar">
        <div class="row flex-nowrap">
          <div class="col-12 px-sm-2 px-0 sidebar">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-4 pt-2 text-white min-vh-100 sides">
                <a class="navbar-brand mb-5" href="#"><img src="../images/Group.png" /></a>
              <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img className="side-bar-icon mr-2" src="../images/25694.png"/>{" "}
                <span class="fs-5 d-none d-sm-inline">Home</span>
              </a>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu">

                <li class="nav-item">
                  <a href="\patient" class="nav-link align-middle px-0 ">
                    <img className="side-bar-icon mr-2" src="../images/516749-200.png"/>{" "}
                    <span class="ms-1 d-none d-sm-inline">Patient</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="\doctor" class="nav-link align-middle px-0">
                  <img className="side-bar-icon mr-2 p-1" src="../images/download.png"/>{" "}
                    <span class="ms-1 d-none d-sm-inline">Doctor</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="\invoice" class="nav-link align-middle px-0">
                  <img className="side-bar-icon mr-2 p-1" src="../images/1806867-200.png"/>{" "}
                    <span class="ms-1 d-none d-sm-inline">Invoice</span>
                  </a>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
