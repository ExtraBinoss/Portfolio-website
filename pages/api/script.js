import axios from 'axios';

export default {
    data() {
        return {
            repos: []
        }
    },
    async created() {
        const { data } = await axios({
            method: 'get',
            url: `https://api.github.com/users/ExtraBinoss/repos`,
            headers: {
                "Content-Type": "application/json",
                'Accept-Encoding': 'identity',
            },
        })
        this.repos = data;
    }
}