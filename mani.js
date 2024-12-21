const TelegramBot = require('node-telegram-bot-api'); 
const token ='AAGAC17BFvXkVPWd_r0PTWDnIjXc62mp5H4';
const bot = new TelegramBot(token, {polling: true});
    
bot.on('message', function(msg){
   console.log(msg) 
})