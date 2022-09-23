import React, { useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/button/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Big Title', description: 'lorem impsum dolores' },
    { id: 2, title: 'Big Title', description: 'lorem impsum dolores' },
    { id: 3, title: 'Big Title', description: 'lorem impsum dolores' },
  ]);

  /* const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); */
  const [post, setPost] = useState({ title: "", description: "" });

  function addNewPost(e) {
    e.preventDefault();
    /* const newPost = {
      id: Date.now(), title, description
    } */
    setPosts([...posts, { ...post, id: Date.now() }]);
    /*setPosts([...posts, newPost]);
    setTitle("");
    setDescription(""); */
    setPost({ title: "", description: "" });
  }

  return (
    <div className="App">
      <form>
        <MyInput value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder="Title" />
        <MyInput value={post.description} onChange={e => setPost({ ...post, description: e.target.value })} type="text" placeholder="Content" />
        <MyButton onClick={addNewPost} >Add post</MyButton>
      </form>
      <PostList posts={posts} listTitle="List 1" />

    </div>
  );
}

export default App;
