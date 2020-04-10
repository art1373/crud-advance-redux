import { createStore } from "redux";
import rootReducer from "../redux/reducers/index";
import initialState from "../redux/reducers/initialState";
import * as actions from "../redux/actions/courseActions";

it("should create our Store, and fetch state", () => {
  const store = createStore(rootReducer, initialState);
  const course = { title: "CLEAN CODE" };
  const action = actions.createCourseSuccess(course);
  store.dispatch(action);
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
