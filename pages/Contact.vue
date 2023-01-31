<style scoped>
@import './stylesheets/style.css';
@import './stylesheets/contactstyle.css';
</style>

<template>
    <div class="header">
        <div class="box">
            <div class = "typewriter"><NuxtLink to="/"><h1>{Contact}</h1></NuxtLink></div>
                <!-- <h1><NuxtLink to= "/">{Alan Trebugeais}</NuxtLink></h1> -->
            </div>
        </div>
    <div class="mainBox">
        <table id ="firstTable">
            <td id="porttable">Here's how to contact me.</td>
        </table> 
        <table id ="secondTable">
            <td id="porttable"><a href="https://www.discord.gg/q9njtunq" target = "blank">Discord</a></td>
            <td id="porttable"><a href="mailto:alan.trebugeais@epitech.eu" target = "blank">Mail</a></td>
            <td id="porttable"><a href="https://www.discord.gg/7U8K7J62" target = "blank">CV</a></td>
        </table>
    </div>
</template>
