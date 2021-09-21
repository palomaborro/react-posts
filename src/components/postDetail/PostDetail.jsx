import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPost, getPostComment } from '../../services/PostsService';

const PostDetail = () => {
    const { postId } = useParams(); // 

    const [post, setPost] = useState(null); // Nos traemos el post
    const [postComment, setPostComment] = useState(null); // Nos traemos el comentario del post
    const [loading, setLoading] = useState(true);
    const [loadingComment, setLoadingComment] = useState(true);

    useEffect(() => { // Request pasando el id del post
        setLoading(true) // Para que aparezca el estado de carga antes del post
        getPost(postId)
            .then(post => setPost(post))

        getPostComment(postId)
            .then(comments => setPostComment(comments))
    }, [postId]) // Para que solo haya una petición

    useEffect(() => { // Cada vez que carga el id de un post el Loading se quita y se repite con cada cambio de id
        if (post) {
            setLoading(false)
        }
    }, [post])

    useEffect(() => { 
        if (loadingComment) {
            setLoadingComment(false)
        }
    }, [loadingComment])

    return (
        <div>
            {loading ? (
            <p>Loading...</p>
            ) : (
                <>
                    <h1>{post.title}</h1>
                    <div>
                        {loadingComment ? (
                            <p>Loading comments...</p>
                        ) : (
                        postComment && postComment.length > 0 ? postComment.map(comment => (
                            <div key={comment.id}>
                                <h3>{comment.name}</h3>
                                <h5>{comment.email}</h5>
                                <p>{comment.body}</p>
                            </div>
                        )) : (
                            <p>There are no comments</p>
                        )
                        )}
                    </div>
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