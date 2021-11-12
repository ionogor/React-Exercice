import React from "react";
const Comment = (props) => {
  console.log(props);
  return (
    <div className="commets">
      {props.comments.map((element) => {
        return (
          <div>
            <p>
              <h3>{element.username}</h3>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
