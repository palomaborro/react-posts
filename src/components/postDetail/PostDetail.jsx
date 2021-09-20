import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPost } from '../../services/PostsService';

const PostDetail = () => {
    const { postId } = useParams(); // 

    const [post, setPost] = useState(null); // Nos traemos el post
    const [loading, setLoading] = useState(true);

    useEffect(() => { // Request pasando el id del post
        setLoading(true) // Para que aparezca el estado de carga antes del post
        getPost(postId)
        .then(post => setPost(post))
    }, [postId]) // Para que solo haya una petición

    useEffect(() => { // Cada vez que carga el id de un post el Loading se quita y se repite con cada cambio de id
        if (post) {
            setLoading(false)
        }
    }, [post])

    return (
        <div>
            {loading ? (
            <p>Loading...</p>
            ) : (
                <>
                    <h1>{post.title}</h1>
                </>
            )}
            <Link to={`/posts/${Number(postId) -1}`}>
                Previous post
            </Link>
            <Link to={`/posts/${Number(postId) +1}`}>
                Next post
            </Link>
        </div>
    );
};

export default PostDetail;