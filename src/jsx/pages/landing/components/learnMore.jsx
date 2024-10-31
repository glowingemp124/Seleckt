import React from "react";

export const LearnMore = (props) => {
  return (
    <div id="LearnMore" className="text-center" style={{ margin: '50px 0px' }}>
      <div className="container">
        <div className="col-md-12 col-md-offset-1 section-title">
          <h2 style={{ marginTop: '10px' }} ><b>Learn More</b></h2>
        </div>
        <div className="text-center">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-lg-12">
                <h4 style={{ marginBottom: '100px' }}>{d.title}</h4>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
