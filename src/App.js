import Post from "./components/Post/Post";
import Search from "./components/SearchBar/SearchBar";

import postsList from "./data";

function App() {
  //Html + Javascript => JSX - SINTAXA REACT
  console.log("posts:", postsList);

  //props-> properties
  return (
    <div className="App">
      <Post posts={postsList} />
      <Search />
    </div>
  );
}

export default App;
