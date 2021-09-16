import React, { useState, useEffect } from 'react';
import { getPosts } from '../../services/PostsService';
import { Link } from 'react-router-dom';

const PostList = () => {
	const [posts, setPosts] = useState([]); // Estado inicial de los posts
	const [loading, setLoading] = useState(true); // Estado de carga mientras aparecen los posts

	// Para pintar los posts
	useEffect(() => {
		getPosts().then((res) => {
            setPosts(res)
            setLoading(false) // Para que se quite el loading una vez carguen los posts
        });
	}, []); // Array vacío porque solo quiero que ocurra una vez

    // Para que React no haga 3 renders como con el useEffect de arrib
    useEffect(() => {
        if (posts.length > 0) {
            setLoading(false)
        }
    }, [posts]) // Solo se ejecuta cuando cambia posts

	return (
		<div>
			{loading ? (
				<p>Loading posts...</p>
			) : (
				posts.map((post) => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <Link to={`/posts/${post.id}`}>Ver post</Link>
                    </div>
            )))}
		</div>
	);
};

export default PostList;
