import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";


const useStyles = makeStyles({
  root: {
    '&$checked': {
      color: '#000',
    },
  },
  checked: {},
  wrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 0,
  },
  label: {
    fontSize: '.8rem',
    fontFamily: `'Raleway', sans-serif`,
  },
});

const DatePickerProton = ({ changeDated, selectedDate }) => {
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Select date"
        value={selectedDate}
        onChange={changeDated}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerProton;
