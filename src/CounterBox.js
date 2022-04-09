import React from "react";
const CounterBox = (props) => {
  return (
    <>
      <p>{props.name}: {props.counter}</p>
      <button onClick={() => props.setCounter(props.counter + 1)}>Increment</button>
    </>
  )
}

// class CounterBox extends React.Component {
//   render() {
//     return(
//       <>
//        <p>{this.props.counter}</p>
//        <button onClick={() => this.props.setCounter(this.props.counter + 1)}>Increment</button>
//      </>
//     )
//   }
// }

export default CounterBox;