<template>
    <div class="header">
        <div class="box">
            <h1>{Alan Trebugeais}</h1>
        </div>
    </div>
    <div class="header2">
        <div class="firstbox">
            <h2>Welcome to my portfolio !</h2>
        </div>
    </div>
    <table id="Tables">
        <tr>
            <th>Project</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>GitHub Projects</td>
            <td>Discord</td>
        </tr>
    </table>
   <!--  <div class="header3">
        <div class="thirdbox">
            <h2>Projects</h2>
        </div>
    </div>
    <div class="header4">
        <div class="fourthbox">
            <h2>Contacts</h2>
        </div>
    </div> -->
    <div class="header5">
        <div class="secondbox">
            <h2><a href="https://github.com/ExtraBinoss/Portfolio-website" target="_blank">Github Projects</a></h2>
        </div>
    </div>
    <div class="mainBox"></div>
</template>

<style scoped>
.header {
    color : #97D2EC;
    background-color: #25316D;
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
    position: absolute;
    left: 48%;
    top: 27%;
    transform: translate(-50%, -50%);

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
.box {
    padding: 10px; 
    border: 1px solid #222c60;
    margin: 10px;
    background-color: rgb(37,49,109);
    box-shadow: 0px 5px 40px 5px #5F6F94;
    transition: 0.3s;
    border-radius: 10px;
}

.fifthbox {
    padding: 10px; 
    border: 1px solid #222c60;
    margin: 10px;
    background-color: rgb(37,49,109);
    box-shadow: 0px 1px 40px 1px #5F6F94;
    transition: 0.3s;
    border-radius: 10px;
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
}
.secondbox {
    opacity : 0.6;
    padding: 10px; 
    border: 1px solid rgb(37,49,109); 
    margin: 10px;
    box-shadow: 0px 5px 40px 5px #5F6F94;
    border-radius: 10px;
}
.thirdbox {
    padding: 10px; 
    border: 1px solid #222c60;
    margin: 10px;
    background-color: rgb(37,49,109);
    box-shadow: 0px 1px 40px 1px #5F6F94;
    transition: 0.3s;
    border-radius: 10px;
}
.fourthbox {
    padding: 10px; 
    border: 1px solid rgb(37,49,109); 
    margin: 10px;
    box-shadow: 0px 1px 40px 1px #5F6F94;
    position : absolute;
    border-radius: 10px;
}
.box:hover { 
    background: rgb(35, 48, 113);
    background: linear-gradient(0deg, rgb(24, 39, 113) 100%, rgba(30,67,73,1) 100%);
    box-shadow: 0px 5px 40px 5px #5F6F94;
    opacity: 1;
}
.secondbox:hover {
    opacity : 1;
    background: linear-gradient(0deg, rgb(24, 39, 113) 100%, rgba(30,67,73,1) 100%);
    box-shadow: 0px 5px 40px 5px #5F6F94;
    transition: 0.5s;
}
.mainBox {
    background-color: rgb(37,49,109);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}
a {
    text-decoration: underline;
    color : #97D2EC;
}
</style>