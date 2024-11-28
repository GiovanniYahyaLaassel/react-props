import React, {useState} from "react";
import Header from "./components/header";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
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
