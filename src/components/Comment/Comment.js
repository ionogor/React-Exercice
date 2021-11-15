import React from "react";
import "./Comment.css";
const Comment = (props) => {
  console.log(props);
  return (
    <div className="wraper">
      {props.comments.map((element) => {
        return (
          <div className="comments">
            <h3>{element.username}</h3>
            <p style={{ margin: "10px" }}>{element.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
