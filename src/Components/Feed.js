import React from "react";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://thenoobcoder.ml/images/Aboutme.jpg"
        message="Hellooo...."
        timestamp="1601493943737"
        imgName="imgName"
        username="NoobCoder"
      />
    </div>
  );
};

export default Feed;
