import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', subtitle: '', body: '', url: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', subtitle: '', body: '', url: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Name"
            />
            <MyInput
                value={post.subtitle}
                onChange={e => setPost({...post, subtitle: e.target.value})}
                type="text"
                placeholder="Breed, location"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Description"
            />
            <MyInput
                value={post.url}
                onChange={e => setPost({...post, url: e.target.value})}
                type="text"
                placeholder="Image url"
            />
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;
