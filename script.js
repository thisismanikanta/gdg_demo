const TelegramBot = require('node-telegram-bot-api'); 
const token ='8028456317:AAGAC17BFvXkVPWd_r0PTWDnIjXc62mp5H4';
const bot = new TelegramBot(token, {polling: true});
    
bot.on('message', function(msg){
   console.log(msg) 
})
