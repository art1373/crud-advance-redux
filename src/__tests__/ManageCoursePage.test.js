import React from "react";
import { mount } from "enzyme";
import { authors, courses, newCourse } from "../../tools/mockData";
import { ManageCoursePage } from "../components/courses/ManageCoursePage";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    history: {},
    saveCourse: jest.fn(),
    loadCourses: jest.fn(),
    loadAuthors: jest.fn(),
    course: newCourse,
    match: {},
    formIsValid: jest.fn(),
  };
  const props = { ...defaultProps, ...args };

  return mount(<ManageCoursePage {...props} />);
}
it("sets error whilte trying to submit an empty form", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required");
});
