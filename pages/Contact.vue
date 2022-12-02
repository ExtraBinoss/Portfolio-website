<template>
    <div class="header">
        <div class="box">
            <div class = "typewriter"><NuxtLink to="/"><h1>{Contact}</h1></NuxtLink></div>
                <!-- <h1><NuxtLink to= "/">{Alan Trebugeais}</NuxtLink></h1> -->
            </div>
        </div>
    <div class="mainBox">
        <table id ="hello">
            <td id="porttable"><a href="https://www.discord.gg/7U8K7J62">Discord</a></td>
        </table>
    <a href="https://www.discord.gg/7U8K7J62"><img src="https://cdn.discordapp.com/attachments/1037432546054643845/1048241871597613146/profile-removebg-preview.png"></a>
    </div>
    <div class="mainBox">
    </div>
</template>

<style scoped>

img {
    margin-top: -5vh;
}
td {
    opacity: 1;
    padding: 0.7vh;
    border: 1px solid rgb(37,49,109); 
    margin: 1vh;
    box-shadow: 0px 6px 8px 1px #5F6F94;
    border-radius: 10px;
    letter-spacing: 2px;
}
#Tables {
    color : #97D2EC;
    font-size:30px;
    padding : -0.2vh;
    margin-top: -10vh;
    border-spacing: 35px;
}

#hello {
    background-color: rgb(35, 48, 113);
    color : #97D2EC;
    font-size:30px;
    padding : 10vh;
    margin-top: 16vh;
    margin-right: -0.1vh;
    border-spacing: 30px;
    font-weight: 700;
}
#porttable {
    background-color: #25316D;
    color : #97D2EC;
    font-size:30px;
}
.typewriter h1 {
    overflow: hidden;
    border-right: .15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: 
    typing 2.2s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #97D2EC; }
}
.box {
    opacity:1.0;
    padding: 10px; 
    border: 1px solid #222c60;
    margin: 10px;
    background-color: #25316d;
    box-shadow: 0px 3px 8px 1px #5F6F94;
    border-radius: 10px;
    letter-spacing: 2px;
}
.box:hover { 
    background: rgb(35, 48, 113);
    background: linear-gradient(0deg, rgb(24, 39, 113) 100%, rgba(30,67,73,1) 100%);
    box-shadow: 0px 4px 8px 5px #5F6F94;
    transition: 0.5s;
    opacity : 1;
}
.header {
    color : #97D2EC;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
}
.mainBox {
    background-color: rgb(37,49,109);
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: top;
    width: 100%;
    height: 100vh;
    overflow:hidden;
}
a {
    color : #97D2EC;
    border-radius: 50%;
}
div {
    overflow:hidden
}
</style>
