import React, {useState} from "react";
import Header from "./components/header";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import Card from "./components/Card";
import  {posts} from "./components/Data/posts (1)";
// filtro i post pubblicati
const pubblishedPosts = posts.filter((post) => post.published);
console.log('Pubblished posts:', pubblishedPosts);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header/>
      
      {/* genero le card */}

      {pubblishedPosts.map((post) => (
        <Card 

          key={post.id} 
          title={post.title}
          content={post.content}
          image={post.image}
          tags={post.tags} 
        />
      ))}
      <Footer/>

    </div>
    </>
  )
}

export default App
