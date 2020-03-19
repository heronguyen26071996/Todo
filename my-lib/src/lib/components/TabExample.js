import React, { Component } from 'react';
import '../../demo/index.css'
import classnames from 'classnames';
const Notification = (props) => {
  const { value } = props;
//   if(key==="true")
//   {
//     <h2 className="numbertask">{title} Active Tasks</h2>
//   }
//   else{
// <h2 className="numbertask">{title} Active Tasks2</h2>
//   }
  return ( 
  
    <div className="divCom">
        <label   href='#target1' className={classnames(value === 1 && "active")}  
      onClick={() => props.filterByStatus(1)}  > Active Tasks1</label>
      <label  href="#" className={classnames(value === 2 && "actived")}
           onClick={() => props.filterByStatus(2)} className="numbertask"> Active Tasks2</label>
    {/* {(() => {
      switch(value) {
       case 1:
      return <label   href='#target1' className={classnames(value === 1 && "active")}  
      onClick={() => props.filterByStatus(value), value===1} > Active Tasks1</label>;
         case 2:
          return<label  href="#" className={classnames(value === 2 && "actived")}
           onClick={() => props.filterByStatus(value), value===2} className="numbertask"> Active Tasks2</label>;
        default:
          return null;
      }
    })()} */}
  </div>
     
  );
};
export default Notification;