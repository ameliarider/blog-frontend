import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Modal } from "./Modal"
import axios from "axios";
import { useState , useEffect } from 'react';


export function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [isPostShowVisible, setIsPostShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  
  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json")
    .then((response) => {
      console.log(response.data);
      setPosts(response.data);
    })
  }

  const handleShow = (post) => {
    console.log("handleShow", post);
    setIsPostShowVisible(true);
    setCurrentPost(post);
  }
  
  useEffect(handleIndex, []);

  const handleCreate = (params) => {
    console.log(params)
    axios.post("http://localhost:3000/posts.json", params)
    .then((response) => {
      setPosts([...posts, response.data])
    })
  }

  const handleUpdate = (post, params, successCallback) => {
    axios.patch(`http://localhost:3000/posts/${post.id}.json`).then ((response) => {
      setPosts(posts.map(p => p.id === response.data.id ? response.data : p));
      successCallback();
      setIsPostShowVisible(false);
    })
  }
  
  return (
    <main>
      <PostsNew onCreate={handleCreate} />
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={isPostShowVisible} onClose={() => setIsPostShowVisible(false)}>
        <PostsShow post={currentPost} onUpdate={handleUpdate}/>
      </Modal>
      <Footer />
    </main>
  );
}