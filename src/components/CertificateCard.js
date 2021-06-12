import React from "react";

function CertificateCard({ data, light }) {
  return (
    <ul className="list-group mb-1">
      <li
        className={
          light
            ? "list-group-item d-flex justify-content-between align-items-center certificate_light"
            : "list-group-item d-flex justify-content-between align-items-center certificate_dark"
        }
      >
        {data.heading}
        <span className="badge bg-primary rounded-pill certificate_view">
          <a target="_blank" rel="noreferrer" className="text-white" href={data.link}>
            view
          </a>
        </span>
      </li>
    </ul>
  );
}

export default CertificateCard;
