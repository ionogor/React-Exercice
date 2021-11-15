import React from "react";
import "./Post.css";
import Comment from "../Comment/Comment";
import { height } from "dom-helpers";

const Post = (props) => {
  return (
    <div className="posts-container-wrapper">
      <h1>Instagram</h1>
      {props.posts.map((post) => {
        console.log(post.comments.length);
        return (
          <>
            <div className="post-border">
              <div className="post-header">
                <img
                  src={post.thumbnailUrl}
                  alt="icon"
                  style={{ width: "35px", height: "35px" }}
                />
                <h2>{post.username} </h2>
              </div>

              <img
                src={post.imageUrl}
                alt="imageURL"
                style={{ width: "100%" }}
              />
              <div className="likes-comment">
                <img
                  src={post.icon}
                  alt="icon"
                  style={{ width: "25px", height: "25px", margin: "10px" }}
                />
                <span className="qt-like">{post.likes}</span>
                <img
                  src={post.mess}
                  alt="mess"
                  style={{ width: "25px", height: "25px", margin: "10px" }}
                />
                <span className="qt-comments">{post.comments.length}</span>
              </div>

              <p style={{ display: "flex" }}>{post.likes} likes</p>
              <Comment comments={post.comments} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Post;
