import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const COLORS = ["red", "green", "blue"];
const colors = [0, 0, 0];

class Colorpicker extends React.Component {
   state = {
      color: "rgb(127, 127, 127)",
      textValue: null,
      percent: null,
      value: 0,
      disabled: false,
      range: {
         min: 0,
         max: 100,
      },
      ref: null,
   };
   onUpdate = (index) => (render, handle, value, un, percent) => {
      colors[index] = value[0];
      this.setState({ color: `rgb(${colors.join(",")})` });
   };
   onSlide = (render, handle, value, un, percent) => {
      this.setState({
         textValue: value[0].toFixed(2),
         percent: percent[0].toFixed(2),
      });
   };

   onSkipSlide = (render, handle, value, un, percent) => {
      this.setState({
         skippingValue: value[0],
      });
   };

   handleClick = () => {
      this.setState((prevState) => ({ value: prevState.value + 10 }));
   };

   changeDisabled = () => {
      this.setState((prevState) => ({ disabled: !prevState.disabled }));
   };
   changeRange = () => {
      this.setState({
         range: {
            min: 0,
            max: 200,
         },
      });
   };

   changeByRef = () => {
      const { ref } = this.state;
      if (ref && ref.noUiSlider) {
         ref.noUiSlider.set(20);
      }
   };

   render() {
      const { color } = this.state;
      return (
         <div className="slider colorpicker-slider" id="colorpicker">
            {COLORS.map((item, index) => (
               <Nouislider
                  key={item}
                  id={item}
                  start={127}
                  connect={[true, false]}
                  orientation="horizontal"
                  range={{
                     min: 0,
                     max: 255,
                  }}
                  onUpdate={this.onUpdate(index)}
               />
            ))}
            <div id="result" style={{ background: color, color }} />
         </div>
      );
   }
}

export default Colorpicker;
