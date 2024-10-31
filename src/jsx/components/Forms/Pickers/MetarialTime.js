import React, { useState } from "react";
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function BasicTImePicker() {
   const [selectedDate, handleDateChange] = useState(new Date());

   return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <TimePicker
            autoOk
            label=""
            value={selectedDate}
            onChange={handleDateChange}
         />
      </MuiPickersUtilsProvider>
   );
}

export default BasicTImePicker;
