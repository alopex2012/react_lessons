import React from "react";
import '../styles/PostItem.css';

export default function PostItem(props) {

    return (
        <div className="post">
            <div className="post_content">
                <strong className="post_title">
                    {props.number}. {props.post.title}
                </strong>
                <div className="post_description">
                    {props.post.description}
                </div>
            </div>
            <div className="post_btn">
                <button>Delete</button>
            </div>
        </div>
    )
}