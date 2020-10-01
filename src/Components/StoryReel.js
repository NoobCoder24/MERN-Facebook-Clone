import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://avatars1.githubusercontent.com/u/26550159?s=460&u=907cfbccdacc2cfb10b300f61f9260044988d67a&v=4"
        profileSrc="https://thenoobcoder.ml/images/Aboutme.jpg"
        title="NoobCoder"
      />
      <Story
        image="https://pbs.twimg.com/profile_banners/44196397/1576183471/600x200"
        profileSrc="https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg"
        title="Elon Musk"
      />
      <Story
        image="https://pbs.twimg.com/profile_banners/15506669/1448361938/600x200"
        profileSrc="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
        title="Jeff Bezos"
      />
    </div>
  );
};

export default StoryReel;
