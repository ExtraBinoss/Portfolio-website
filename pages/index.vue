<style scoped>
@import './stylesheets/style.css';
@import './stylesheets/indexstyle.css';
</style>

<script>

</script>
<template>
    <head>
        <title>Alan Trebugeais</title>
        <!-- <link href="css/style.css" type="text/css" rel="stylesheet"> -->
    </head>
    <div class="header">
        <div class="box">
            <div class = "typewriter"><NuxtLink to="/"><h1>{Alan Trebugeais}</h1></NuxtLink></div>
                <!-- <h1><NuxtLink to= "/">{Alan Trebugeais}</NuxtLink></h1> -->
            </div>
        </div>
    <div class="mainBox">
        <table id ="hello">
            <td id="porttable">I am a student at Epitech,
            <br>Welcome to my portfolio !</td>
    </table>
        <table id="Tables">
            <tr>
                <div class="header5">
                    <td id="git"><a href="Projects">Projects</a></td>
                </div>
                <td id="git"><a href ="Contact">Contact</a></td>
                <!-- <td id="git"><NuxtLink to= "Contact">Discord</NuxtLink></td> -->
            </tr>
        </table>
    </div>
    <div class="mainBox"></div>
</template>
