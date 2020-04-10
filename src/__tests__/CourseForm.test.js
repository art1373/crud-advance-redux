import React from "react";
import CourseForm from "../components/courses/CourseForm";
import { render, cleanup } from "react-testing-library";
// import { shallow } from "enzyme";

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };
  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render a form and add course h2 tag", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
  // expect(wrapper.find("form").length).toBe(1);
  // expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it("it should render a button with label 'Save' when not saving", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
  // expect(wrapper.find("button").text()).toEqual("Save");
});
it("it should render a button with label 'Saving...' when saving", () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");

  // const wrapper = renderCourseForm({ saving: true });
  // expect(wrapper.find("button").text()).toEqual("Saving...");
});
