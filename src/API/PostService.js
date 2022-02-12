import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://my-json-server.typicode.com/alxtt/AnimAll/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://my-json-server.typicode.com/alxtt/AnimAll/posts' + id)
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://my-json-server.typicode.com/alxtt/AnimAll/posts${id}/comments`)
        return response;
    }
}
