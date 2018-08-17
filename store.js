import { createStore } from "redux";
import reducers from "./reducers.js";

const store = createStore(reducers);
store.subscribe(() => console.log(store.getState()));
var unsubscribe = store.subscribe(() => console.log("zmiana"));
unsubscribe();
store.dispatch(addComment("pierwszy komentarz"));
store.dispatch(addComment("drugi komentarz"));

store.subscribe(() => {
  const comments = store.getState().comments;
  ReactDOM.render(<CommentsList comments={comments} />, mountingPoint);
});
