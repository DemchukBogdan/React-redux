import React from "react";
import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "./redux/actions";

function Likes(props) {
  return (
    <div>
      <div className="button-controls">
        <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
        <button onClick={props.onDecrementLikes}>Dislike</button>
      </div>
    </div>
  );
}

function mapeStateToProps(state) {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      return dispatch(incrementLikes());
    },
    onDecrementLikes: () => {
      return dispatch(decrementLikes());
    },
  };
}

export default connect(mapeStateToProps, mapDispatchToProps)(Likes);
