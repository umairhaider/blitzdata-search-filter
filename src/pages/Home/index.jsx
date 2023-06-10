import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import SearchBar from '../../components/Home/SearchBar';
import {getBlitzData} from '../../components/api-calls';
import './styles.css';
import { format } from 'date-fns';

const Home = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState({});
  const [selectedToggle, setSelectedToggle] = useState({});
  const [selectedNumber, setSelectedNumber] = useState({default: [1000, 5000]});
  const [selectedDate, setSelectedDate] = useState({});

  const [selectEnum, setEnum] = useState([]);

  const [blitzData, setBlitzData] = useState([{}]);
  const [blitzDataList, setBlitzDataList] = useState(blitzData);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [attributeList, setAttributeList] = useState({});

  const handleSelectCheckbox = (attribute, value) => {
    setSelectedCheckbox((prev) => ({
      ...prev,
      [attribute]: value,
    }));
  };

  const handleChangeChecked = (attribute, id) => {

    const newState = { ...selectEnum };
  
    // Find the specific checkbox list based on attribute
    const attributeList = newState[attribute];
  
    // Update the specific checkbox in the list
    const updatedList = attributeList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
  
    // Update the state
    newState[attribute] = updatedList;
  
    // Set the new state
    setEnum(newState);
  };
  

  const handleSelectToggle = (attribute, value) => {
    setSelectedToggle((prev) => ({
      ...prev,
      [attribute]: value,
    }));
  };

  const handleChangeNumber = (attribute, value) => {
    setSelectedNumber(prevState => ({
      ...prevState,
      [attribute]: value,
    }));
  };
  
  

  const handleDateChange = (attribute, date) => {
    const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');
    setSelectedDate((prev) => ({
      ...prev,
      [attribute]: formattedDate,
    }));
  };
  

  const createConditions = () => {
    let conditions = [];
  
    // Handle selectedCheckbox
    /* for (const attribute in selectedCheckbox) {
      const value = selectedCheckbox[attribute];
      if (value) {
        conditions.push(`["${attribute}", "=", "${value}"]`);
      }
    } */
  
    // Handle selectedToggle
    /* for (const attribute in selectedToggle) {
      const value = selectedToggle[attribute];
      console.log('SelectedToggle',value);
      if (value) {
        conditions.push(`["${attribute}", "=", "${value}"]`);
      }
    } */
  
    // Iterate over all selectedNumber states
    for (const attribute of Object.keys(selectedNumber)) {
      if (attribute !== 'default') {
        const value = selectedNumber[attribute];
        console.log('First', attribute);

        if (Array.isArray(value)) {
          const [minValue, maxValue] = value;
          console.log('Second', attribute);
          conditions.push(`["${attribute}", ">", "${minValue}"]`);
          conditions.push(`["${attribute}", "<", "${maxValue}"]`);
        }
      }
    }

  
    // Handle selectedDate
    for (const attribute in selectedDate) {
      const value = selectedDate[attribute];
      if (value) {
        conditions.push(`["${attribute}", ">", "${value}"]`);
      }
    }
  
    return conditions.join(',');
  };  

  const applyFilters = () => {
    let updatedList = [];
    let updatedBlitzDataList = JSON.parse(JSON.stringify(blitzData));
  
    // Iterate over all selectedToggle states
    for (const attribute in selectedToggle) {
      const value = selectedToggle[attribute];
      if (value) {
        updatedList = updatedList.filter(
          (item) => parseInt(item[attribute]) === parseInt(value)
        );
      }
    }
  
    // Iterate over all selectedCheckbox states
    for (const attribute in selectedCheckbox) {
      const value = selectedCheckbox[attribute];
      if (value) {
        updatedList = updatedList.filter(
          (item) => item[attribute] === value
        );
      }
    }
  
    // Iterate over all selectedNumber states
    for (const [attribute, values] of Object.entries(selectedNumber)) {
      if (Array.isArray(values)) {
        const [minValue, maxValue] = values;
        updatedList = updatedList.filter(
          (item) => item[attribute] >= minValue && item[attribute] <= maxValue
        );
      }
    }
  
    // Iterate over all selectedDate states
    for (const attribute in selectedDate) {
      const value = selectedDate[attribute];
      if (value) {
        updatedList = updatedList.filter(
          (item) => new Date(item[attribute]).toDateString() === new Date(value).toDateString()
        );
      }
    }
  
    // Enum Checkbox Filter
    const enumsChecked = selectEnum
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
  
    // Search Filter
    if (searchInput) {
      if(updatedBlitzDataList.items !== false
        && updatedBlitzDataList.items !== undefined
        && updatedBlitzDataList.items !== null) {
          updatedBlitzDataList.items = updatedBlitzDataList.items.filter(
            (item) =>
              item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
              -1
          );
        }
      
    }
  
    setBlitzDataList(updatedBlitzDataList);
  
    !updatedBlitzDataList?.items?.length ? setResultsFound(false) : setResultsFound(true);
  };  


  useEffect(() => {
    (async () => {
      const conditions = createConditions();
      const returnedData = await getBlitzData(conditions);
      setBlitzData(returnedData);
      setBlitzDataList(returnedData);
      const attributeList = Object.entries(returnedData.model.attributes).map(([attribute, value]) => ({
        attribute,
        type: value.type,
        label: value.label
      }));
      setAttributeList(attributeList);
    })()
  },  [selectedCheckbox, selectedToggle, selectedNumber, selectedDate]);

  useEffect(() => {
    applyFilters();
  }, [selectedToggle, selectedCheckbox, searchInput, selectedNumber]);

  return (
    <div className='home'>
      <div>
        <h1>{blitzDataList?.model?.name != null ? blitzDataList.model.name : "Loading..."}</h1>
      </div>
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className='home_panelList-wrap'>
        {/* Filter Panel */}
        <div className='home_panel-wrap'>
          {attributeList.length > 0 ?
          <FilterPanel
          selectedEnums={selectedCheckbox}
          selectEnum={handleSelectCheckbox}
          selectedToggles={selectedToggle}
          selectedNumbers={selectedNumber}
          selectToggle={handleSelectToggle}
          changeChecked={handleChangeChecked}
          changeNumber={handleChangeNumber}
          attributeList={attributeList}
          selectedDates={selectedDate}
          changedDate={handleDateChange}
        /> : <span>Loading...</span>
          }
        </div>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {blitzDataList?.items != null && blitzDataList?.items !=false ? <List blitzDataList={blitzDataList}/> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;
