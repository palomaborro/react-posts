import http from './BaseService';

// Get a /posts
export const getPosts = () => {
    return http.get("/posts")
}

// Get a /posts/:id
export const getPost = (postId) => {
    return http.get(`/posts/${postId}`)
}