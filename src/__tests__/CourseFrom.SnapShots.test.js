import React from "react";
import CourseForm from "../components/courses/CourseForm";
import renderer from "react-test-renderer";
import { authors, courses } from "../../tools/mockData";

it("should set Saving label to Saving... if saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={true}
    />
  );
  expect(tree).toMatchSnapshot();
});

it("should set Saving... label to Save if saving is false", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );
  expect(tree).toMatchSnapshot();
});
