import React from 'react';
import './styles.css';

const ListItem = ({
  item: { title, images, excerpt, editiondate, },
}) => (
  <div className='listItem-wrap'>
    <img src={images != null ? images[0]['base'] + images[0]['180x180_wp'] : ""} alt='' />
    <header>
      <h4>{title}</h4>
      <span>{editiondate}</span>
    </header>
    <footer>
      <p>
        <span>{excerpt}</span>
      </p>
    </footer>
  </div>
);

export default ListItem;
