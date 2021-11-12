import React from "react";
import "./Comment.css";
const Comment = (props) => {
  console.log(props);
  return (
    <div>
      {props.comments.map((element) => {
        return (
          <div className="comments">
            <h2>{element.username}</h2>
            <p>{element.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
