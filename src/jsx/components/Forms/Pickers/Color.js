import React, { useState } from "react";

import ColorPicker from "material-ui-color-picker";

const MyColorPicker = () => {
   const [color, setColor] = useState("");

   return (
      <ColorPicker
         name="color"
         defaultValue="#000"
         value={color}
         onChange={(color) => setColor(color)}
      />
   );
};

export default MyColorPicker;
