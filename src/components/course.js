import React, { useState, useEffect } from "react";
import Courses from "./course-indvidual";
import "./course.css";

let Course_card = ({ apiCall }) => {
  const [course_data, setCourse_data] = useState({});
  // const SERVER_URL = "http://127.0.0.1:5000/course";

  const SERVER_URL = "https://coursemangmentapi.herokuapp.com/course";
  useEffect(() => {
    apiCall({}, "post", SERVER_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourse_data(data);
        console.log(data);
      });
  }, [apiCall]);

  let content = [];
  for (var i in course_data) {
    content.push(
      <Courses
        course_name={course_data[i]["course_name"]}
        course_duration={course_data[i]["course_duration"]}
        course_discription={course_data[i]["course_discription"]}
      />
    );
  }

  return <div>{content}</div>;
};
export default Course_card;
