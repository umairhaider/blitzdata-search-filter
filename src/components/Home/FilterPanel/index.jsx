import React from 'react';
import { categoryList, ratingList } from '../../../constants';
import CheckboxProton from '../../common/CheckboxProton';
import ToggleProton from '../../common/ToggleProton';
import NumberSlider from '../../common/NumberSlider';
import './styles.css';
import DatePickerProton from '../../common/DatePickerProton';


const FilterPanel = ({
  selectEnum,
  selectToggle,
  changeChecked,
  changeNumber,
  attributeList,
  changedDate,
  selectedEnums = {},
  selectedToggles = {},
  selectedNumbers = {},
  selectedDates = {},
}) => (
  <div>
    {attributeList.map(({ attribute, type, label }) => {
      if (type === 'int') {
        return (
          <React.Fragment key={attribute}>
            <p className='label-range'>{label}</p>
            <NumberSlider
              value={selectedNumbers[attribute]}
              changeNumber={(value) => changeNumber(attribute, value)}
              minNumber={100}
              maxNumber={5000}
            />
          </React.Fragment>
        );
      }

      else if (type === 'date') {
        return (
          <React.Fragment key={attribute}>
            <p className='label-range'>{label}</p>
            <DatePickerProton 
              selectedDate={selectedDates[attribute]} // Use attribute-specific state
              changeDated={(date) => changedDate(attribute, date)} // Pass attribute along with date to the handler
            />
          </React.Fragment>
        );
      }

      else if (type === 'enum') {
        return (
          <React.Fragment key={attribute}>
            <p className='label'>{label}</p>
            <ToggleProton
              options={ratingList}
              value={selectedToggles[attribute]} // Use attribute-specific state
              selectToggle={(value) => selectToggle(attribute, value)} // Pass attribute along with value to the handler
            />
          </React.Fragment>
        );
      }

      return null;
    })}
  </div>
);

export default FilterPanel;
