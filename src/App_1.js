import React, { useState, useRef } from 'react';
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

    const [title, setTitle] = useState("");
    const bodyInputRef = useRef();

    function addNewPost(e) {
        e.preventDefault();
        console.log(title);
        console.log(bodyInputRef.current.value);
    }

    return (
        <div className="App">
            <form>
                <MyInput value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" />
                <MyInput ref={bodyInputRef} type="text" placeholder="Content" />
                <MyButton onClick={addNewPost} >Add post</MyButton>
            </form>
            <PostList posts={posts} listTitle="List 1" />

        </div>
    );
}

export default App;
