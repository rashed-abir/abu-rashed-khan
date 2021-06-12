import React from "react";

function ExperienceCard({ light, data }) {
  return (
    <div
      className={light ? "resume-card_body_light" : "resume-card_body"}
      key={data.heading}
    >
      <h5 className={light ? "resume-card_title_light" : "resume-card_title"}>
        {data.title}
      </h5>
      <p className={light ? "resume-card_name_light" : "resume-card_name"}>
        {data.name}
      </p>
      <p
        className={light ? "resume-card_details_light" : "resume-card_details"}
      >
        {data.details}
      </p>
    </div>
  );
}

export default ExperienceCard;
