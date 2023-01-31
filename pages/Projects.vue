<style scoped>
@import './stylesheets/style.css';
@import './stylesheets/projectstyle.css';

</style>

<script>

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
</script>

<template>
    <div class="header">
        <div class="box">
            <div class = "typewriter"><NuxtLink to="/"><h1>{Projects}</h1></NuxtLink></div>
            </div>
        </div>
        <div class="mainBox">
            <table id ="firstTable">
                <td id="porttable">Where to find my projects.</td>
            </table> 
            <table id ="secondTable">
                <td id="porttable"><a href="https://github.com/ExtraBinoss" target = "blank">Github</a></td>
            </table>
        <!-- <carousel navigation-button>
            <slide v-for="repo in repos" :key="repo.id">
                <div class="project-box">
                    <h2>{{ repo.name }}</h2>
                    <p>{{ repo.description }}</p>
                </div>
            </slide>
        </carousel> -->
        </div>
</template>