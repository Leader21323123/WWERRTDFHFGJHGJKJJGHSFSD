const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'L-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
client.on('ready',  () => {
client.user.setUsername("L-bc")
      })

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('L-users')){
if(!message.author.id === '285805483510726657') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
client.on('message', message => {
    if(message.content == 'L-bot-all-server') {
             if(!message.author.id === '285805483510726657') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server bots',gbots)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });



 
client.on('message', message => {
    if(message.content === "$bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});
 client.on('message', message => {
     if(message.content === 'L-inv') {
     const embed = new Discord.RichEmbed()
     .setTitle('click her to add L-bot to your server-إضغط هنا لإضافه البوت الى سيرفرك ')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=453902836133265410&permissions=8&scope=bot')
     .setColor('RANDOM')
     message.author.send(embed);
     }
   });
client.on("message", message => {
    var prefix ='L-';
            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});





  client.on("message", message => {
    var prefix ='L-';
     if (message.content === prefix + "help") {
         message.react('👌')
         if(!message.channel.guild) return message.reply('** This command only for servers **');
     message.reply(" ** Check Your DM | **:white_check_mark: ** | شوف خآصكك ي حلو ** ")
     }
});
client.on("message", message => {
    var prefix = 'L-';
 if (message.content === prefix + "help") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

** Bot ${client.user.username} Commands **
**
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
-   [L-bc ]  [لإرسال رساله لجميع أعضاء السيرفر بدون ظهور إسم المرسل و  إسم السيرفر ]

-   [L-2bc ]  [لإرسال رساله لجميع أعضاء السيرفر  مع ظهور إسم المرسل و إسم السيرفر]

-   [L-obc ]  [لارسال رساله للأونلاين فقط ]
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
-   [L-inv ]  [ لإضافه البوت الى سيرفرك ]

أو من خلال الرابط التالي
http://i8.ae/hzz7k
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

**

`)


message.author.sendEmbed(embed)

}
});
client.on("message", message => {
    var prefix = "L-";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**L-bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });

client.on('message', message => {
    var prefix = "L-";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + '2bc') {
        if (!args[1]) {
    message.channel.send("**L-bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
    

 

          
client.login(process.env.BOT_TOKEN);
