import courseReducer from "../redux/reducers/courseReducer";
import * as actions from "../redux/actions/courseActions";

it("should add a course to courses when passed to reducer", () => {
  const initialState = [
    {
      title: "A",
    },
    {
      title: "B",
    },
  ];
  const newCourse = { title: "C" };

  const action = actions.createCourseSuccess(newCourse);

  const newState = courseReducer(initialState, action);

  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update the existing course when passed to reducer", () => {
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" },
  ];
  const course = { id: 3, title: "C_2" };
  const action = actions.updateCourseSuccess(course);
  const newState = courseReducer(initialState, action);
  const updatedCourse = newState.find((a) => a.id === course.id);
  const untouchedCourse = newState.find((a) => a.id === 1);
  const untouchedCourse2 = newState.find((a) => a.id === 2);
  expect(newState.length).toEqual(3);
  expect(updatedCourse.title).toEqual("C_2");
  expect(untouchedCourse.title).toEqual("A");
  expect(untouchedCourse2.title).toEqual("B");
});
