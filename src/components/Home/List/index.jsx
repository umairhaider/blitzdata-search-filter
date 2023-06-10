import React from 'react';
import ListItem from './ListItem';
import './styles.css';

const List = ({ blitzDataList = {items: []} }) => (
  <div className='list-wrap'>
    {blitzDataList?.items?.map((item) => (
      <ListItem key={item['@sort']} item={item} />
    ))}
  </div>
);

export default List;
