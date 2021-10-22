import React from "react";

const CourseIndvidual = (props) => {
  return (
    <div className="container">
      <div className="course-preview">
        <h6>Course</h6>
        <h2>{props.course_name}</h2>
        <a href="/">
          View all chapters <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className="container__text">
        <h2>Callbacks & Closures</h2>
        <div className="container__text__star">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <p>{props.course_discription}</p>
        <div className="container__text__timing">
          <div className="container__text__timing_time">
            <h2>Hands-on Time</h2>
            <p>30 min</p>
          </div>
          <div className="container__text__timing_time">
            <h2>Total Time</h2>
            <p>{props.course_duration}</p>
          </div>
        </div>
        <button className="btn">
          Buy Course <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default CourseIndvidual;
