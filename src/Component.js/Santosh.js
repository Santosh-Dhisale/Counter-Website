// import React from "react";

// const App = (props) => {
//     const number = [6,16,3,4,7,9,3]

//     const listitem = number.map((element) =>{
//         return <li>{element}</li>
//     })
//     console.log(listitem);

//     return(
//         <div>
//             <h1>The Numbers of Given:-</h1>
//             <ul>
//                 <li>{listitem}</li>
//             </ul>
//         </div>
//     )
// }

// export default App;





import React, {Component} from "react";

class App extends Component {

    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("componentDidMount: When render component render first time")
    }

    increment(){
        this.setState({count: this.state.count + 5})
    }

    decrement(){
        this.setState({count: this.state.count - 5})
    }

    render() {
        return (
           <center>
             <div>
                <h1>{this.state.count}</h1>
                <h2>Counter</h2>
                <button onClick={this.increment.bind(this)}>Increment value</button>
                <button onClick={this.decrement.bind(this)}>Decrementvalue</button>
            </div>
           </center>
        )
    }
}
export default App;








// import logo from './logo.svg';
// import './App.css';
// import { isContentEditable } from '@testing-library/user-event/dist/utils';
// import { Component, useState } from 'react';


// const Counter = () => {
//   const [count, setCount] = useState(10);
//   const Increament = () => setCount(count + 5)
//   const Decreament = () => setCount(count - 5)
// }

// class App extends Components {
//   render () {


//    return (
//     <div className="App">
//       <header className="App-header">
     
        
//        <div class="main">
//          <h1>To Find the Counter App</h1>
//          <div class="content">
//           <button onClick>click me this button</button>
//          </div>
//         <button onClick={Increament}>Increament</button>
//          <button onClick={Decreament}>Decreament</button>
//        </div>

        
//       </header>
//     </div>
//   );

// }
// }
// export default App;