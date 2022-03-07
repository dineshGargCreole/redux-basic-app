import axios from 'axios';

export default {

    getUsers: async () => {
        let users = await axios.get('https://jsonplaceholder.typicode.com/users');
        return users.data || [];
    }
}