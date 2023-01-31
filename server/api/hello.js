import axios from 'axios';

export default defineEventHandler(async (event) => {
    
    const config = useRuntimeConfig()

    const { data } = await axios({
        method: 'get',
        url: `https://api.github.com/users/ExtraBinoss/repos`,
        headers: {
            Authorization: `Bearer ${config.token}`,
            "Content-Type": "application/json",
            'Accept-Encoding': 'identity',
        },
    })
    const repos = data;
    let reposList = '';
    repos.forEach(repo => {
        reposList += `<div>
            <h2>${repo.name}</h2>
            <p>${repo.description}</p>
        </div>`;
    });
    document.getElementById("repositories").innerHTML = reposList;
    return (data);
}); 