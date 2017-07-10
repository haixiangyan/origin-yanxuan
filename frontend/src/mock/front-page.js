export const login = [
    {
        path: '/test',
        type: 'post',
        data(body) {
            console.log('mock', body);
            const data = {
                result: 'success',
                data: body
            }
            return data;
        }
    }
]
