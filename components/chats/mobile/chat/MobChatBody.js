import React from "react";
import ChatBubbles from "../../chat/ChatBubbles";
import ImageBubble from "../../chat/ImageBubble";
import { MessageContext } from "../../../../context/MessageContext";
import { useContext } from "react";

const MobChatBody = () => {
  const { message } = useContext(MessageContext);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDate = (date) => {
    const d = new Date(date);
    let day = d.getDate().toString();
    let year = d.getFullYear().toString();
    let month = d.getMonth().toString();
    let hrs = d.getHours().toString();
    let min = d.getMinutes().toString();
    var ampm = hrs >= 12 ? "PM" : "AM";

    const timeStamp =
      months[month] +
      ", " +
      day +
      " " +
      year +
      " " +
      hrs +
      ":" +
      min +
      " " +
      ampm;

    return timeStamp;
  };

  return (
    <div className="overflow-y-scroll scrollbar-hide max-h-[580px] md:max-h-[520px] w-full">
      <ChatBubbles message="We are Working Fine" />
      <ChatBubbles message="We are Working Fine" />
      <ImageBubble image="/davido.png" />
      <ChatBubbles message="We are Working Fine" />
      <ImageBubble image="/talks.png" />
      <ChatBubbles message="We are Working Fine" />
      {message.length != 0 ? (
        <>
          {message?.map((message, index) => {
            let date = getDate(message.timeStamp);

            return (
              <ChatBubbles
                timeStamp={date}
                message={message.message}
                key={index}
              />
            );
          })}
        </>
      ) : null}
      <div
        id="bottom"
        style={{ float: "left", clear: "both", marginTop: "50px" }}
      ></div>
    </div>
  );
};

export default MobChatBody;
