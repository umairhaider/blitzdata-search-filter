import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  thumb: {
    color: '#000',
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: '#000',
  },
});

const NumberSlider = ({ value, changeNumber, minNumber, maxNumber, attributeName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={changeNumber}
        valueLabelDisplay='on'
        min={minNumber}
        max={maxNumber}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  );
};

export default NumberSlider;
