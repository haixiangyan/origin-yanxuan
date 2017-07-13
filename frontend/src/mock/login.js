const Mock = require('mockjs');
const Random = Mock.Random;

export const login = [{
    path: '/users/login',
    type: 'post',
    data(body) {
        const data = {
            result: 'success',
            user: {
                "_id": "5964653f7c95dd120ca8e5b9",
                "telephone": "18805862675",
                "password": "123456",
                "__v": 0,
                "address": [],
                "interest": []
            }
        }
        return data;
    }
}]