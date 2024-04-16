import React from "react";

function ShortLink() {
  return (
    <div className="course-info">
      <div className="course-info__header-short-url">
        <i className="fas fa-link course-info__short-url-icon"></i>
        <span className="course-info__short-url-text">لینک کوتاه</span>
      </div>
      <span className="course-info__short-url">
        https://sabzlearn.ir/?p=117472
      </span>
    </div>
  );
}

export default ShortLink;
