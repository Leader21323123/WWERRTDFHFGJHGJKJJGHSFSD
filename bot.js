const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'L-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`L-inv `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('L-users')){ //الامر
 if(!message.author.id === '353747612580577281') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', message => {
 
     if (message.content.startsWith(prefix + "sug")) { 
     if (!message.channel.guild) return;
     let args = message.content.split(" ").slice(1).join(' ');
     client.users.get("285805483510726657").send(
         "\n" + "**" + "● السيرفر :" + "**" +
         "\n" + "**" + "» " + message.guild.name + "**" +
         "\n" + "**" + " ● المرسل : " + "**" +
         "\n" + "**" + "» " + message.author.tag + "**" +
         "\n" + "**" + " ● الرسالة : " + "**" +
         "\n" + "**" + args + "**")
     }
     });
client.on('ebnklb',function(ebnklb) {
     
     if(ebnklb.content.startsWith("<@453902836133265410>")) {
         ebnklb.channel.send('Hey Im **L-BOT!**  A Nice Bot Developed By:`<@285805483510726657>`')
         ebnklb.channel.send('My Prefix `L-`')
 
     }
 });
 client.on('message', ra3d => {
 var prefix = "L-";
                         let args = ra3d.content.split(" ").slice(1).join(" ")
 if(ra3d.content.startsWith(prefix + 'cc')) {
     if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
              if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
               ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                   setInterval(function(){})
                     let count = 0;
                     let ecount = 0;
           for(let x = 1; x < `${parseInt(args)+1}`; x++){
             ra3d.guild.createRole({name:x,
               color: 'RANDOM'})
               }
             }
        });

client.login(process.env.BOT_TOKEN);
