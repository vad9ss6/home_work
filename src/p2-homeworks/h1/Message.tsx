import React from "react";
import classes from "./Message.module.css";

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: messageType) {
    return (
        <div className={classes.message_main_container}>
            <div>
                <img src={props.avatar} alt="avatar" className={classes.message_avatar}/>
            </div>

            <div className={classes.message_container}>
                <div className={classes.message_user_name}>
                    {props.name}
                </div>
                <div className={classes.message}>
                    <div className={classes.message_text}>
                        {props.message}
                    </div>
                    <div className={classes.message_time}>
                        {props.time}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Message;
