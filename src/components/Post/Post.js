import React from "react";
import "./Post.css";
import Comment from "./Comment/Comment";

const Post = (props) => {
  return (
    <div className="posts-container-wrapper">
      <h1>Instagram</h1>
      {props.posts.map((post) => {
        return (
          <div>
            <img src={post.imageUrl} alt="avatar" style={{ width: "100%" }} />
            <div>
              <Comment comments={post.comments} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
