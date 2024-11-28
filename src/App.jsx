import React, {useState} from "react";
import Header from "./components/header";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import { posts } from "./components/Data/posts (1)";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BlogPost/>
      <Footer/>
    </>
  )
}

export default App
