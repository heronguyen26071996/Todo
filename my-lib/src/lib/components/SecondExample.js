import React, { Component } from 'react';
import '../../demo/index.css'
// class Demo extends Component {
//   constructor(props) {
//     const { title} = props;
//     super(props);
//     this.state = { color: 'green' };
//   }

//   render() {
//     console.log("Ham render da duoc chay",title);
//     return (
//       <div>
//         {this.props.title}
//       </div>

//     )
//   }
// }
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Demo></Demo>
//       </div>
//     );
//   }
// }
const Notification = (props) => {
  const { title } = props;
  return (
    <div className="notification">
      <h2 className="numbertask">{title} Active Tasks</h2>
    </div>
  );
};
export default Notification;