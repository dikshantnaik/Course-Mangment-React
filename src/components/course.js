import React, { useState, useEffect } from "react";
import CourseIndvidual from "./course-indvidual";
import "./course.css";

let Course_card = ({ apiCall2 }) => {
  const [course_data, setCourse_data] = useState({});
  const url = "http://127.0.0.1:5001/course";
  useEffect(() => {
    apiCall2({}, "post", url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourse_data(data);
      });
  }, [apiCall2]);

  let content = [];
  for (var i in course_data) {
    content.push(
      <CourseIndvidual
        course_name={course_data[i]["course_name"]}
        course_duration={course_data[i]["course_duration"]}
        course_discription={course_data[i]["course_discription"]}
      />
    );
  }

  return <div>{content}</div>;
};
export default Course_card;
