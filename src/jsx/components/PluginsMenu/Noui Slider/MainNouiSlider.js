import React, { Fragment } from "react";

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import NouiColorPicker from "./NouiColor";
import PageTitle from "../../../layouts/PageTitle";

const MainNouiSlider = () => {
   return (
      <Fragment>
         <PageTitle motherMenu="Components" activeMenu="UI Slider" />

         <div className="row">
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Basic slider</h4>
                  </div>
                  <div className="card-body">
                     <div id="basic-slider">
                        <Nouislider
                           range={{ min: 0, max: 100 }}
                           start={[20, 80]}
                           connect
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Stepping and snapping to values
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="stepping-slider">
                        <div id="slider-step">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[50]}
                              connect
                           />
                        </div>
                        <span
                           className="example-val"
                           id="slider-step-value"
                        ></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider margin</h4>
                  </div>
                  <div className="card-body">
                     <div className="margin-slider">
                        <div id="slider-margin">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <span
                           className="example-val"
                           id="slider-margin-value-min"
                        ></span>
                        <span
                           className="example-val"
                           id="slider-margin-value-max"
                        ></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider limit</h4>
                  </div>
                  <div className="card-body">
                     <div className="limit-slider">
                        <div id="slider-limit">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <span
                           className="example-val"
                           id="slider-limit-value-min"
                        ></span>
                        <span
                           className="example-val"
                           id="slider-limit-value-max"
                        ></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider padding</h4>
                  </div>
                  <div className="card-body">
                     <div className="padding-slider">
                        <div id="slider-padding">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <span
                           className="example-val"
                           id="slider-padding-value-min"
                        ></span>
                        <span
                           className="example-val"
                           id="slider-padding-value-max"
                        ></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider tooltip</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-tooltip ">
                        <div id="slider-tooltips">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider behaviour (Drag)</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-behaviour">
                        <div id="behaviour">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider behaviour (Tap)</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-behaviour">
                        <div id="tap">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Slider behaviour (Fixed dragging)
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-behaviour">
                        <div id="drag-fixed">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider behaviour (Snap)</h4>
                  </div>
                  <div className="card-body">
                     <div className="snap">
                        <div id="snap">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider behaviour (hover)</h4>
                  </div>
                  <div className="card-body">
                     <div className="snap">
                        <div id="hover">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <span
                           className="example-val mt-4 d-inline-block"
                           id="hover-val"
                        ></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Slider behaviour (unconstrained)
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="unconstrained">
                        <div id="unconstrained" className="mb-4">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <span
                           className="example-val"
                           id="unconstrained-values"
                        ></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider behaviour (combined)</h4>
                  </div>
                  <div className="card-body">
                     <div className="combined">
                        <div id="combined">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Slider range (left to right)
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-range  mb-5">
                        <div id="pips-range">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Slider range (right to left)
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-range  mb-5">
                        <div id="pips-range-rtl">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Slider range Vertical (bottom to top)
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-range ">
                        <div
                           id="pips-range-vertical-rtl"
                           className="slider-vertical"
                        >
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Pip positions</h4>
                  </div>
                  <div className="card-body">
                     <div className="pip-position mb-5">
                        <div id="pips-positions">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Pip position stepped</h4>
                  </div>
                  <div className="card-body">
                     <div className="pip-position mb-5">
                        <div id="pips-positions-stepped">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Pips count</h4>
                  </div>
                  <div className="card-body">
                     <div className="pips-count mb-5">
                        <div id="pips-count">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Pips count (stepped)</h4>
                  </div>
                  <div className="card-body">
                     <div className="pips-count mb-5">
                        <div id="pips-count-stepped">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Pips value</h4>
                  </div>
                  <div className="card-body">
                     <div className="pips-values mb-5">
                        <div id="pips-values">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Pips values (stepped)</h4>
                  </div>
                  <div className="card-body">
                     <div className="pips-values mb-5">
                        <div id="pips-values-stepped">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Disabling a slider</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-disabled ">
                        <div id="disable1" className="mb-4">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <label>
                           <input
                              className="ml-2"
                              type="checkbox"
                              id="checkbox1"
                           />
                           Disable slider
                        </label>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Disabling a slider</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-disabled ">
                        <div id="disable2">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <input type="checkbox" id="checkbox2" />
                        <label className="ml-1"> Disable handle 1</label>

                        <br />
                        <input type="checkbox" id="checkbox3" />
                        <label className="ml-1"> Disable handle 2</label>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Updating a slider</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-update ">
                        <div id="slider-update">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <span
                           className="example-val d-block my-4"
                           id="slider-update-value"
                        ></span>
                        <button
                           className="update-button btn btn-info btn-sm mb-2"
                           id="update-1"
                        >
                           Set range [20, 50]
                        </button>
                        <button
                           className="update-button btn btn-info btn-sm mb-2 ml-2"
                           id="update-2"
                        >
                           Set range [10, 40]
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider step</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-step clearfix d-block mb-5">
                        <div id="pips-steps">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Keyboard slider</h4>
                  </div>
                  <div className="card-body">
                     <div id="keyboardslider">
                        <Nouislider
                           range={{ min: 0, max: 100 }}
                           start={[20, 80]}
                           connect
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Working with dates</h4>
                  </div>
                  <div className="card-body">
                     <div className="date-slider">
                        <div id="slider-date">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <div
                           className="example-val my-4"
                           id="event-start"
                        ></div>
                        <div className="example-val" id="event-end"></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Using HTML5 input elements</h4>
                  </div>
                  <div className="card-body">
                     <div className="input-element">
                        <div id="html5">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <div className="inputs mt-4">
                           <select
                              className="form-control my-4"
                              id="input-select"
                           ></select>
                           <input
                              className="form-control"
                              type="number"
                              min="-20"
                              max="40"
                              step="1"
                              id="input-number"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Non linear slider</h4>
                  </div>
                  <div className="card-body">
                     <div className="nonlinear-slider">
                        <div id="nonlinear">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <div className="outputs mt-4">
                           <span
                              className="example-val"
                              id="lower-value"
                           ></span>
                           <span
                              className="example-val"
                              id="upper-value"
                           ></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Snapping between steps</h4>
                  </div>
                  <div className="card-body">
                     <div className="nonlinear-slider">
                        <div id="slider-snap">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <span
                           className="example-val"
                           id="slider-snap-value-lower"
                        ></span>
                        <span
                           className="example-val"
                           id="slider-snap-value-upper"
                        ></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Stepping in non-linear sliders
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="nonlinear-slider">
                        <div id="slider-non-linear-step">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <span
                           className="example-val"
                           id="slider-non-linear-step-value"
                        ></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Number formatting</h4>
                  </div>
                  <div className="card-body">
                     <div className="format-slider">
                        <div id="slider-format">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <input
                           className="mt-4 form-control"
                           title="Formatted number"
                           id="input-format"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Getting and setting slider values
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="getnset-slider">
                        <div id="slider">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <div className="logger mt-4">
                           <button
                              className="btn btn-info btn-sm"
                              id="write-button"
                           >
                              Set to 20
                           </button>
                           <button
                              className="btn btn-info btn-sm ml-2"
                              id="read-button"
                           >
                              Read slider value
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Locking sliders together</h4>
                  </div>
                  <div className="card-body">
                     <div className="locked-slider">
                        <div className="slider" id="slider1">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <span className="example-val" id="slider1-span"></span>
                        <div className="slider mt-4" id="slider2"></div>
                        <span className="example-val" id="slider2-span"></span>
                        <button
                           className="btn btn-info btn-sm mt-4 pull-right mt-3"
                           id="lockbutton"
                        >
                           Lock
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Moving the slider by clicking pips
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="extra-padding  mb-5">
                        <div className="slider-pips">
                           <div className="slider" id="slider-pips">
                              <Nouislider
                                 range={{ min: 0, max: 100 }}
                                 start={[20, 80]}
                                 connect
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Colored Connect Elements</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-color">
                        <div className="slider" id="slider-color">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Changing the slider by key press
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="keypress-slider pt-5">
                        <div id="keypress">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <input
                           type="text"
                           className="form-control my-4"
                           id="input-with-keypress-1"
                        />
                        <input
                           type="text"
                           className="form-control"
                           id="input-with-keypress-0"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Skipping steps</h4>
                  </div>
                  <div className="card-body">
                     <div className="skipping-slider">
                        <div id="skipstep">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <span
                           className="example-val"
                           id="skip-value-lower"
                        ></span>
                        <span
                           className="example-val"
                           id="skip-value-upper"
                        ></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Using the slider with huge numbers
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="hugenumber-slider">
                        <div id="slider-huge">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <span className="example-val" id="huge-value"></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Creating a toggle</h4>
                  </div>
                  <div className="card-body">
                     <div className="toggle-slider">
                        <div id="slider-toggle">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Soft limits</h4>
                  </div>
                  <div className="card-body">
                     <div className="extra-padding mb-5">
                        <div className="softlimit-slider">
                           <div id="soft">
                              <Nouislider
                                 range={{ min: 0, max: 100 }}
                                 start={[20, 80]}
                                 connect
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider direction</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-direction">
                        <div id="slider-direction">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                        <div className="example-val" id="field"></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Color picker</h4>
                  </div>
                  <div className="card-body">
                     <div className="extra-padding">
                        <NouiColorPicker />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider orientation</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-orientation">
                        <div id="slider-vertical" className="slider-vertical">
                           <Nouislider
                              range={{ min: 0, max: 100 }}
                              start={[20, 80]}
                              connect
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default MainNouiSlider;
