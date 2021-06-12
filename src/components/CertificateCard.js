import React from "react";

function CertificateCard({ data, light }) {
  return (
    <div
      className={
        light
          ? "resume-card_body_light certificate"
          : "resume-card_body certificate"
      }
      key={data.heading}
    >
      <p
        className="resume-card_name"
        style={{ fontWeight: "500", margin: "auto" }}
      >
        {data.heading}
      </p>
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className={light ? "certificate_light" : "certificate_dark"}
      >
        (verify)
      </a>
    </div>
  );
}

export default CertificateCard;
