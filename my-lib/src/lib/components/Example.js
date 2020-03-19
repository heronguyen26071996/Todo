import React from 'react';
import '../../demo/index.css'
import udiliaLogo from './udilia-logo.svg';
import './Example.css';
const Date = (props) => {
  const { date } = props;
  return (
    <div className="date">
    {date}
    </div>
  );
};
export default Date;
