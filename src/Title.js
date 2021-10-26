import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";
// import { inputReducer } from "./redux/inputReducer";

function Title(props) {
const text = useSelector(state => {
    const { inputReducer } = state;
    return inputReducer.text;
})
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="card-title">
      <div className="caed-title-top">
        <input type="text" onChange={handleChange} />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Title;
