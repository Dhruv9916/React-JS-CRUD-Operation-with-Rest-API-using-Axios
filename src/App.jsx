import { useEffect } from "react";
import { getPost } from "./api/PostApi";

function App() {
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);
  return <h1>hekek</h1>;
}

export default App;
