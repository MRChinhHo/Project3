import { useState } from "react";
import classes from "./LiveChat.module.css";
const LiveChat = () => {
  //sự kiện click
  const [live, setLive] = useState(false);
  const ClickHandle = () => {
    setLive(!live);
  };
  return (
    <div className={classes.messengerApp}>
      {live && (
        <div className={classes.livechat}>
          <div className={classes.content}>
            <h3>Customer Support</h3>
            <p>Let's Chat App</p>
          </div>
          <div className={classes.send}>
            <div className={classes.sendA}>
              <p className={classes.sendA1}>Xin chào</p>
              <p className={classes.sendA2}>Làm thế nào để xem sản phẩm</p>
            </div>
            <div className={classes.sendB}>
              <p className={classes.sendB1}>
                <i class="fa-sharp fa-solid fa-user-tie"></i> ADMIN: Chào bạn
              </p>
              <p className={classes.sendB2}>
                <i class="fa-sharp fa-solid fa-user-tie"></i> ADMIN: Bạn có thể
                vào mục Shop để xem sản phẩm này
              </p>
            </div>
          </div>
          <div className={classes.bottom}>
            <i class="fa-sharp fa-solid fa-user-tie"></i>
            <input
              className={classes.bottom1}
              type="text"
              placeholder="Enter Messege!"
            />
            <i class="fa-solid fa-paperclip"></i>
            <i class="fa-solid fa-face-smile"></i>
            <i class="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      )}
      <div className={classes.messengerIcon} onClick={ClickHandle}>
        <i class="fa-brands fa-facebook-messenger"></i>
      </div>
    </div>
  );
};

export default LiveChat;
