import React from "react";
import PlainButton from "../common/PlainButton";
import Flickity from "react-flickity-component";

import "./Events.scss";

export default function Events() {
  const eventData = [
    {
      key: 0,
      img: "assets/images/azure.png",
      name: "Microsoft Azure Innovation Challenge",
      date: "Nov. 01 - Dec. 08 2022",
      mode: "Virtual",
      participants: 328,
      prizes: 10000,
      desc: "Build an open-source application prototype which leverages Azure Bot Service alongside other Azure services to improve healthcare outcomes for underserved communities. ",
      link: "https://health-innovationchallenge.devpost.com/?ref_feature=challenge&ref_medium=discover"
    },
    {
      key: 1,
      img: "assets/images/web3.png",
      name: "Web3 Stack Hack",
      date: "Oct. 21 - Dec. 05, 2022",
      mode: "Virtual",
      participants: 319,
      prizes: 15000,
      desc: "Oort and Storj invite builders to migrate their apps from Web2 to Web3 or create new creative Web3 applications.",
      link: "https://web3-stack-hack.devpost.com/?ref_feature=challenge&ref_medium=discover"
    },
    {
      key: 2,
      img: "assets/images/kore.png",
      name: "Kore.ai Botathon",
      date: "Nov. 17 - Dec. 15, 2022",
      mode: "Virtual",
      participants: 644,
      prizes: 10000,
      desc: "We invite you to join the creative challenge of designing a bot using the XO platform, in honor of our commitment to developers.",
      link: "https://web3-stack-hack.devpost.com/?ref_feature=challenge&ref_medium=discover"
    },
  ];

  const eventInfo = eventData.map((info) => (
    <div className="event_slide">
      <h2>{info.name}</h2>
      <div className="event_splash_container"><img className="event_splash" src={info.img}></img></div>
      <div className="event_info">
        {" "}
        <div className="event_subinfo">
          {" "}
          <div className="event_info_headers">
            {" "}
            <img src="assets/images/date.png" alt="" />
            <span className="event_header_text">{info.date}</span>
          </div>
          <div className="event_info_headers">
            <img src="assets/images/location.png" alt="" />
            <span className="event_header_text">{info.mode}</span>
          </div>
          <div className="event_info_headers">
            {" "}
            <img src="assets/images/members.png" alt="" />
            <span className="event_header_text">
              {info.participants} participants
            </span>
          </div>
          <div className="event_info_headers">
            {" "}
            <h4>$</h4>
            <span className="event_header_text">{info.prizes} in prizes</span>
          </div>
          <PlainButton scale="0.5" left="-20px">Learn More!</PlainButton>
        </div>
        <p>{info.desc}</p>
      </div>
    </div>
  ));

  return (
    <div className="events_container">
      <h1 className="site_main_header">Events</h1>
      <Flickity options={{fade: true}}>{eventInfo}</Flickity>
    </div>
  );
}
