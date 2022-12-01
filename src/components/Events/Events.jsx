import React from "react";
import PlainButton from "../common/PlainButton";
import Flickity from "react-flickity-component";

import "./Events.scss";

export default function Events() {
  const eventData = [
    {
      key: 0,
      img: "assets/images/meta.png",
      name: "Meta APAC Robyn Hackathon 2022",
      date: "Sep. 28 - Nov. 09 2022",
      mode: "Virtual",
      participants: 143,
      prizes: 8000,
      desc: "Robyn -  is an open sourced Marketing Mix Modeling (MMM) R-package, developed by Meta Marketing Science team.",
    },
    {
      key: 1,
      img: "assets/images/meta.png",
      name: "Meta APAC Robyn Hackathon 2022",
      date: "Sep. 28 - Nov. 09 2022",
      mode: "Virtual",
      participants: 143,
      prizes: 8000,
      desc: "Robyn -  is an open sourced Marketing Mix Modeling (MMM) R-package, developed by Meta Marketing Science team.",
    },
  ];

  const eventInfo = eventData.map((info) => (
    <div className="event_slide">
      <h2>{info.name}</h2>
      <img className="event_splash" src={info.img}></img>{" "}
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
