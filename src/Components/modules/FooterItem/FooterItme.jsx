import React from "react";

function FooterItme({ title, children }) {
  return (
    <div className="col-4">
      <div className="footer-widgets__item">
        <span className="footer-widgets__title">{title}</span>
        {children}
      </div>
    </div>
  );
}

export default FooterItme;
