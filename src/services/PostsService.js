import http from './BaseService';

// Get a /posts
export const getPosts = () => {
    return http.get("/posts")
}