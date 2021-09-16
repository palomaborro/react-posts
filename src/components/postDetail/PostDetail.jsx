import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams() // 
    return (
        <div>
            Posts
        </div>
    );
};

export default PostDetail;