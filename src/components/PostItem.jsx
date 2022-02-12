import React from 'react';
import MyButton from "./UI/button/MyButton";
import { useNavigate } from 'react-router-dom';
import Counter from "./Counter";
import ReactTwitterFollowButton from 'react-twitter-follow-button';

const PostItem = (props) => {
    const router = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <div className="petimage">
                    <img src={props.post.url} alt="cat" />
                </div>
                <div className="petdesc">
                    <h1>{props.post.title}</h1>
                    <h2>{props.post.subtitle}</h2>
                    {props.post.body}
                </div>
            </div>
        </div>
    );
};

export default PostItem;
