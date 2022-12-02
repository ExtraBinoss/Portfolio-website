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
                    <td id="git"><a href="Projects" target="_blank">Projects</a></td>
                </div>
                <td id="git"><a href ="Contact">Contact</a></td>
                <!-- <td id="git"><NuxtLink to= "Contact">Discord</NuxtLink></td> -->
            </tr>
        </table>
    </div>
    <div class="mainBox"></div>
</template>

<style scoped>

.typewriter h1 {
    overflow: hidden;
    border-right: .15em solid #97D2EC;
    white-space: nowrap; 
    margin: 0 auto;
    letter-spacing: .15em;
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

#git {
    font-weight: 700;
}
#PortfolioTable {
    background-color: rgb(35, 48, 113);
    color : #97D2EC;
    font-weight : 700;
    
}
#hello {
    background-color: rgb(35, 48, 113);
    color : #97D2EC;
    font-size:30px;
    padding : 10vh;
    margin-top: 16vh;
    margin-right: -0.1vh;
    border-spacing: 35px;
    font-weight: 700;
}
#porttable {
    background-color: #25316D;
    color : #97D2EC;
    font-size:30px;
}
.header {
    color : #97D2EC;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
}
.header5 {
    color : #97D2EC;
    background-color: #25316D;
    position: absolute;
    left: 37%;
    top: 65%;
    transform: translate(-50%, -50%);

}
.header2 {
    color : #97D2EC;
    background-color: #25316D;
}
.header3 {
    color : #97D2EC;
    background-color: #25316D;
    position: absolute;
    left: 45%;
    top: 45%;
    transform: translate(-50%, -50%);

}
.header4 {
    color : #97D2EC;
    background-color: #25316D;
    /* position: absolute; */
    /*left: 55%;
    top: 45%;
    transform: translate(-50%, -50%); */

}


.fifthbox {
    padding: 10px; 
    border: 1px solid #222c60;
    margin: 10px;
    background-color: rgb(37,49,109);
    box-shadow: 0px 1px 40px 1px #5F6F94;
    transition: 0.3s;
    border-radius: 10px;
    letter-spacing: 2px;
}
.firstbox {
    padding: 1.2vh; 
    border: 1px solid rgb(37,49,109); 
    margin: 5vh;
    box-shadow: 0px 1px 40px 1px #5F6F94;
    width: 36vh;
    height : 2vw;
    position: absolute;
    left: 10%;
    top: 30%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    letter-spacing: 2px;
}
.secondbox {
    opacity : 0.6;
    padding: 10px; 
    border: 1px solid rgb(37,49,109); 
    margin: 10px;
    box-shadow: 0px 5px 40px 5px #5F6F94;
    border-radius: 10px;
    letter-spacing: 2px;
}
.thirdbox {
    padding: 10px; 
    border: 1px solid #222c60;
    margin: 10px;
    background-color: rgb(37,49,109);
    box-shadow: 0px 1px 40px 1px #5F6F94;
    transition: 0.3s;
    border-radius: 10px;
    letter-spacing: 2px;
}
.fourthbox {
    padding: 10px; 
    border: 1px solid rgb(37,49,109); 
    margin: 10px;
    box-shadow: 0px 1px 40px 1px #5F6F94;
    position : absolute;
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

#Tables th {
    padding: 0.7vh;
    border: 1px solid rgb(37,49,109); 
    margin: 1vh;
    box-shadow: 0px 1px 40px 1px #5F6F94;
    border-radius: 10px;
    letter-spacing: 2px;
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
td:hover { 
    background: rgb(35, 48, 113);
    background: linear-gradient(0deg, rgb(24, 39, 113) 100%, rgba(30,67,73,1) 100%);
    box-shadow: 0px 5px 40px 5px #5F6F94;
    transition: 0.5s;
    opacity : 1;
}


.background {
    background-color: rgb(35, 48, 113);
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
#Tables th:hover {
    opacity : 1;
    background: linear-gradient(0deg, rgb(24, 39, 113) 100%, rgba(30,67,73,1) 100%);
    box-shadow: 0px 5px 40px 5px #5F6F94;
    transition: 0.5s;
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
div {
    overflow:hidden
}
</style>