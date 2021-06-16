const Discord = require("discord.js");
const client = new Discord.Client();
const wiki = require("wikijs").default
//Below, insert your bot login token as login_token
let login_token = "";
//Below insert your bot user id as bot_id
let bot_id = ""
client.once('ready', ()=> {
    console.log("Bot activated");
})
client.on("message", (msg) => {
    let message = msg.content
    if(message.includes("./") && msg.author.id != bot_id){
        let x = message.split("/")
        const res = x[1].replace(" ", "_")
        let lnk = "https://en.wikipedia.org/wiki/"+res
        msg.channel.send(lnk)       
    }
    if(message.includes(".!info")){
        msg.channel.send("This bot allows you to get the Wikipedia article to anything you type in discord. Use './title of article' to search now!")       
    }
})
client.login(login_token)