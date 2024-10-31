import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const FeaturedSlide = () => {
   const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 51000,
      cssEase: "linear",
      // color: "#f5f5f5",
      // backgroundColor:"#f5f5f5",
      responsive: [
         {
            breakpoint: 988,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
               // backgroundColor:"#f5f5f5",
            },
         },
         {
            breakpoint: 600,
            settings: {
               // color: "#f5f5f5",
               slidesToShow: 1,
               slidesToScroll: 1,
               // backgroundColor:"#f5f5f5",
            },
         },
      ],
   };


   return (
      <Slider {...settings} >
         <div className="items mr-2" >
            <div className="col-xl-12 col-xxl-12 col-sm-12">
               <div
                  className="card opacity-75 mb-0 pb-0"
                  style={{ backgroundColor: "#b1f8c0", height: '260px', color: '#838884' }}
               >
                  <div className="card-body mb-0">
                     <div className="media align-items-center">
                        <div className="media-body">
                           <p className="fs-22 mb-2">Total Employers</p>
                           <span
                              className="fs-48 font-w500"
                              style={{ color: "#00b094" }}
                           >
                              86K +
                           </span>
                        </div>
                        <span
                           className="p-3 mr-3 rounded-circle text-success"
                           style={{ backgroundColor: "#9fe6ae" }}
                        >
                           <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.14">
                                 <path d="M20 25C24.1421 25 27.5 21.6421 27.5 17.5C27.5 13.3579 24.1421 10 20 10C15.8579 10 12.5 13.3579 12.5 17.5C12.5 21.6421 15.8579 25 20 25Z" fill="#00B094" />
                                 <path d="M7.5 45C7.5 38.0964 13.0964 32.5 20 32.5C26.9036 32.5 32.5 38.0964 32.5 45V50H7.5V45Z" fill="#00B094" />
                              </g>
                              <path d="M32.5 50V45C32.5 38.0964 26.9036 32.5 20 32.5C13.0964 32.5 7.5 38.0964 7.5 45V50H32.5ZM32.5 50H52.5V47.5C52.5 40.1362 46.9036 35 40 35C36.4667 35 33.2758 36.5637 31.0023 39.0778M27.5 17.5C27.5 21.6421 24.1421 25 20 25C15.8579 25 12.5 21.6421 12.5 17.5C12.5 13.3579 15.8579 10 20 10C24.1421 10 27.5 13.3579 27.5 17.5ZM45 22.5C45 25.2614 42.7614 27.5 40 27.5C37.2386 27.5 35 25.2614 35 22.5C35 19.7386 37.2386 17.5 40 17.5C42.7614 17.5 45 19.7386 45 22.5Z" stroke="#00B094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>

                        </span>
                     </div>
                     <div className="d-flex justify-content-between mt-5">
                        <p>Approved/Pending/Declined</p>
                        <p>
                           <span style={{ color: "#00b094" }}>100</span>/
                           <span style={{ color: "red" }}>100</span>/100
                        </p>
                     </div>
                     <div className="d-flex justify-content-between">
                        <p>Active/Inactive</p>
                        <p>
                           <span style={{ color: "#00b094" }}>91</span>/
                           <span style={{ color: "red" }}>250</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="items mr-2">
            <div className="col-xl-12 col-xxl-12 col-sm-12">
               <div
                  className="card opacity-75 mb-0 pb-0"
                  style={{ backgroundColor: "#a9e2db", height: '260px', color: '#838884' }}
               >
                  <div className="card-body mb-0">
                     <div className="media align-items-center">
                        <div className="media-body">
                           <p className="fs-22 mb-2">Total Workers</p>
                           <span
                              className="fs-48 font-w500"
                              style={{ color: "#00b094" }}
                           >
                              13K +
                           </span>
                        </div>
                        <span
                           className="p-3 mr-3 rounded-circle text-success"
                           style={{ backgroundColor: "#b1f8c0" }}
                        >
                           <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.14">
                                 <path d="M40 17.5C40 23.0228 35.5228 27.5 30 27.5C24.4772 27.5 20 23.0228 20 17.5C20 11.9772 24.4772 7.5 30 7.5C35.5228 7.5 40 11.9772 40 17.5Z" fill="#00B094" />
                                 <path d="M30 35C20.335 35 12.5 42.835 12.5 52.5H47.5C47.5 42.835 39.665 35 30 35Z" fill="#00B094" />
                              </g>
                              <path d="M40 17.5C40 23.0228 35.5228 27.5 30 27.5C24.4772 27.5 20 23.0228 20 17.5C20 11.9772 24.4772 7.5 30 7.5C35.5228 7.5 40 11.9772 40 17.5Z" stroke="#00B094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M30 35C20.335 35 12.5 42.835 12.5 52.5H47.5C47.5 42.835 39.665 35 30 35Z" stroke="#00B094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>

                        </span>
                     </div>
                     <div className="d-flex justify-content-between mt-5">
                        <p>Approved/Pending/Declined</p>
                        <p>
                           <span style={{ color: "#00b094" }}>100</span>/
                           <span style={{ color: "red" }}>100</span>/100
                        </p>
                     </div>
                     <div className="d-flex justify-content-between">
                        <p>Active/Inactive</p>
                        <p>
                           <span style={{ color: "#00b094" }}>91</span>/
                           <span style={{ color: "red" }}>250</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="items mr-2">
            <div className="col-xl-12 col-xxl-12 col-sm-12">
               <div
                  className="card opacity-75 mb-0 pb-0"
                  style={{ backgroundColor: "#f3f4ba", height: '260px', color: '#838884' }}
               >
                  <div className="card-body mb-0">
                     <div className="media align-items-center">
                        <div className="media-body">
                           <p className="fs-22 mb-2">Total Industries</p>
                           <span
                              className="fs-48 font-w500"
                              style={{ color: "#00b094" }}
                           >
                              70
                           </span>
                        </div>
                        <span
                           className="p-3 mr-3 rounded-circle text-success"
                           style={{ backgroundColor: "#e1e2a8" }}
                        >
                           <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.14">
                                 <path d="M45.0007 27.5C48.7507 23.5 52.5007 19.9183 52.5007 15.5C52.5007 11.0817 49.1428 7.5 45.0007 7.5C40.8585 7.5 37.5007 11.0817 37.5007 15.5C37.5007 19.9183 41.2507 23.5 45.0007 27.5Z" fill="#00B094" />
                                 <path d="M15 52.5C18.75 48.5 22.5 44.9183 22.5 40.5C22.5 36.0817 19.1421 32.5 15 32.5C10.8579 32.5 7.5 36.0817 7.5 40.5C7.5 44.9183 11.25 48.5 15 52.5Z" fill="#00B094" />
                              </g>
                              <path d="M15 52.5C18.75 48.5 22.5 44.9183 22.5 40.5C22.5 36.0817 19.1421 32.5 15 32.5C10.8579 32.5 7.5 36.0817 7.5 40.5C7.5 44.9183 11.25 48.5 15 52.5ZM15 52.5H43.75C47.2018 52.5 50 49.7018 50 46.25C50 42.7982 47.2018 40 43.75 40H37.5M45 27.5C48.75 23.5 52.5 19.9183 52.5 15.5C52.5 11.0817 49.1421 7.5 45 7.5C40.8579 7.5 37.5 11.0817 37.5 15.5C37.5 19.9183 41.25 23.5 45 27.5ZM45 27.5H36.25C32.7982 27.5 30 30.2982 30 33.75C30 37.2018 32.7982 40 36.25 40H39" stroke="#00B094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>

                        </span>
                     </div>
                     <div className="d-flex justify-content-between mt-5">
                        <h3 style={{ color: "#838884" }}>Active Industry</h3>
                        <h3 className="text-success mx-5">38%</h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="items mr-2">
            <div className="col-xl-12 col-xxl-12 col-sm-12">
               <div
                  className="card opacity-75 mb-0 pb-0"
                  style={{ backgroundColor: "#ddbaf4", height: '260px', color: '#838884' }}
               >
                  <div className="card-body mb-0">
                     <div className="media align-items-center">
                        <div className="media-body">
                           <p className="fs-22 mb-2">Total Jobs</p>
                           <span
                              className="fs-48 font-w500"
                              style={{ color: "#00b094" }}
                           >
                              75
                           </span>
                        </div>
                        <span
                           className="p-3 mr-3 rounded-circle text-success"
                           style={{ backgroundColor: "#cba8e2" }}
                        >
                           <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.14" x="7.5" y="12.5" width="45" height="35" rx="3" fill="#00B094" />
                              <path d="M7.5 22.5C7.5 22.5 14.25 30 30 30C45.75 30 52.5 22.5 52.5 22.5M19.5 47.5H40.5C44.7004 47.5 46.8006 47.5 48.4049 46.6825C49.8161 45.9635 50.9635 44.8161 51.6825 43.4049C52.5 41.8006 52.5 39.7004 52.5 35.5V24.5C52.5 20.2996 52.5 18.1994 51.6825 16.5951C50.9635 15.1839 49.8161 14.0365 48.4049 13.3175C46.8006 12.5 44.7004 12.5 40.5 12.5H19.5C15.2996 12.5 13.1994 12.5 11.5951 13.3175C10.1839 14.0365 9.0365 15.1839 8.31745 16.5951C7.5 18.1994 7.5 20.2996 7.5 24.5V35.5C7.5 39.7004 7.5 41.8006 8.31745 43.4049C9.0365 44.8161 10.1839 45.9635 11.5951 46.6825C13.1994 47.5 15.2996 47.5 19.5 47.5Z" stroke="#00B094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>

                        </span>
                     </div>
                     <div className="d-flex justify-content-between mt-5">
                        <h3 style={{ color: "#838884" }}>Latest Jobs</h3>
                        <h3 className="text-success mx-5">55</h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="items mr-2">
            <div className="col-xl-12 col-xxl-12 col-sm-12">
               <div
                  className="card opacity-75 mb-0 pb-0"
                  style={{ backgroundColor: "#cfe0c0", height: '260px', color: '#838884' }}
               >
                  <div className="card-body mb-0">
                     <div className="media align-items-center">
                        <div className="media-body">
                           <p className="fs-22 mb-2" >Employer Tiers</p>
                        </div>
                        <span
                           className="p-3 mr-3 rounded-circle text-success"
                           style={{ backgroundColor: "#c3e2a7" }}
                        >
                           <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle opacity="0.14" cx="30.666" cy="40.5999" r="12.5" transform="rotate(1.16111 30.666 40.5999)" fill="#00B094" />
                              <path d="M30.9226 28.1023L21.33 7.90381L11.332 7.70117L22.1149 31.58M30.9226 28.1023L41.3259 8.30909L51.3238 8.51173L39.5823 31.9341M30.9226 28.1023C34.2819 28.1704 37.3548 29.6418 39.5823 31.9341M30.9226 28.1023C27.5634 28.0343 24.4334 29.3799 22.1149 31.58M39.5823 31.9341C41.8456 34.2632 43.236 37.4398 43.1668 40.8531C43.0269 47.7552 37.3182 53.2371 30.4161 53.0972C23.5139 52.9573 18.032 47.2486 18.1719 40.3465C18.2411 36.9332 19.7591 33.8155 22.1149 31.58" stroke="#00B094" stroke-width="2" stroke-linejoin="round" />
                           </svg>

                        </span>
                     </div>

                     <div className="row">
                        <div className="col-lg-9 col-md-9 my-0 py-0 text-success">
                           <p className="my-0 py-0">Tier 1</p>

                        </div>
                        <div className="col-lg-3 col-md-3 my-0 py-0 text-success">
                           <p className=" my-0 py-0">200k</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-lg-9 col-md-9 my-0 py-0 text-primary">
                           <p className="my-0 py-0">Tier 2</p>

                        </div>
                        <div className="col-lg-3 col-md-3 my-0 py-0 text-primary">
                           <p className=" my-0 py-0">100k</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-lg-9 col-md-9 my-0 py-0" style={{ color: "#03259D" }}>
                           <p className="my-0 py-0">Tier 3</p>

                        </div>
                        <div className="col-lg-3 col-md-3 my-0 py-0" style={{ color: "#03259D" }}>
                           <p className=" my-0 py-0">50k</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-lg-9 col-md-9 my-0 py-0 text-black">
                           <p className="my-0 py-0">Tier 4</p>

                        </div>
                        <div className="col-lg-3 col-md-3 my-0 py-0 text-black">
                           <p className=" my-0 py-0">20k</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="items mr-2">
            <div className="col-xl-12 col-xxl-12 col-sm-12">
               <div
                  className="card opacity-75 mb-0 pb-0"
                  style={{ backgroundColor: "#d4c1df", height: '260px', color: '#838884' }}
               >
                  <div className="card-body mb-0">
                     <div className="media align-items-center">
                        <div className="media-body">
                           <p className="fs-22 mb-2">Onboarding Status</p>
                        </div>
                        <span
                           className="p-3 mr-3 rounded-circle text-success"
                           style={{ backgroundColor: "#cba8e2" }}
                        >
                           <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.14">
                                 <path d="M20.0201 13.7495C20.0201 17.2013 17.2218 19.9995 13.7701 19.9995C10.3183 19.9995 7.52007 17.2013 7.52007 13.7495C7.52007 10.2977 10.3183 7.49951 13.7701 7.49951C17.2218 7.49951 20.0201 10.2977 20.0201 13.7495Z" fill="#00B094" />
                                 <path d="M20.0195 46.2495C20.0195 49.7013 17.2213 52.4996 13.7695 52.4996C10.3178 52.4996 7.51953 49.7013 7.51953 46.2495C7.51953 42.7978 10.3178 39.9995 13.7695 39.9995C17.2213 39.9995 20.0195 42.7978 20.0195 46.2495Z" fill="#00B094" />
                                 <path d="M52.4988 46.2491C52.4988 49.7009 49.7006 52.4991 46.2488 52.4991C42.797 52.4991 39.9988 49.7009 39.9988 46.2491C39.9988 42.7973 42.797 39.9991 46.2488 39.9991C49.7006 39.9991 52.4988 42.7973 52.4988 46.2491Z" fill="#00B094" />
                              </g>
                              <path d="M13.75 20C17.2018 20 20 17.2018 20 13.75C20 10.2982 17.2018 7.5 13.75 7.5C10.2982 7.5 7.5 10.2982 7.5 13.75C7.5 17.2018 10.2982 20 13.75 20ZM13.75 20V40M13.75 40C10.2982 40 7.5 42.7982 7.5 46.25C7.5 49.7018 10.2982 52.5 13.75 52.5C17.2018 52.5 20 49.7018 20 46.25C20 42.7982 17.2018 40 13.75 40ZM46.25 40V21.75C46.25 18.9497 46.25 17.5496 45.705 16.48C45.2257 15.5392 44.4608 14.7743 43.52 14.295C42.4504 13.75 41.0503 13.75 38.25 13.75H30M46.25 40C49.7018 40 52.5 42.7982 52.5 46.25C52.5 49.7018 49.7018 52.5 46.25 52.5C42.7982 52.5 40 49.7018 40 46.25C40 42.7982 42.7982 40 46.25 40ZM30 13.75L36.25 20M30 13.75L36.25 7.5" stroke="#00B094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>

                        </span>
                     </div>
                     <div className="mr-5">
                        <div className="d-flex justify-content-between my-0 py-0 text-success">
                           <p className="my-0 py-0">Appointments Book</p>
                           <p className="my-0 py-0">278</p>
                        </div>
                        <div className="d-flex justify-content-between text-primary">
                           <p className="my-0 py-0">Worker Onboard</p>
                           <p className=" my-0 py-0">918</p>
                        </div>
                        <div
                           className="d-flex justify-content-between"
                           style={{ color: "#03259D" }}
                        >
                           <p className="my-0 py-0">Approved Worker</p>
                           <p className=" my-0 py-0">432</p>
                        </div>
                        <div className="d-flex justify-content-between text-black">
                           <p className="my-0 py-0">Pending Worker</p>
                           <p className=" my-0 py-0">121</p>
                        </div>
                        <div
                           className="d-flex justify-content-between"
                           style={{ color: "#00A010" }}
                        >
                           <p className="">Declined Worker</p>
                           <p className=" my-0 py-0">300</p>
                        </div>
                     </div>


                  </div>
               </div>
            </div>
         </div>
      </Slider>
   );
};
