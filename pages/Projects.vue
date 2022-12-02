<template>
    <div class="header">
        <div class="box">
            <div class = "typewriter"><NuxtLink to="/"><h1>{Projects}</h1></NuxtLink></div>
                <!-- <h1><NuxtLink to= "/">{Alan Trebugeais}</NuxtLink></h1> -->
            </div>
        </div>
    <div class="mainBox">
        <table id ="hello">
            <td id="porttable"><a href="https://github.com/EpitechPromo2027/B-CPE-110-MPL-1-1-BSQ-alan">BSQ</a></td>
        </table>
    <a href="https://github.com/EpitechPromo2027/B-CPE-110-MPL-1-1-BSQ-alan.trebugeais"><img src="https://cdn.discordapp.com/attachments/1037432546054643845/1048242876468965376/image.png"></a>
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
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
    typing 3.5s steps(40, end),
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
    background-color: rgb(37,49,109);
    box-shadow: 0px 1px 40px 1px #5F6F94;
    border-radius: 10px;
    letter-spacing: 2px;
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
}
</style>