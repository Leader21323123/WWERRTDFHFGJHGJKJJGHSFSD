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
 client.on('message',async message => {
  if(message.content.startsWith(prefix + "2bc")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send(':regional_indicator_b::regional_indicator_c:| **ارسل الرسالة الان**').then(msg => {

    let awaitM = message.channel.awaitMessages(filter, {
      max: 1,
      time: 20000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      msg.edit(':regional_indicator_b::regional_indicator_c:| **هل انت متأكد؟**');
      let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
        message.guild.members.forEach(member => {
          msg.edit(':regional_indicator_b::regional_indicator_c:| **جاري الارسال**');
          collected.first().delete();
          member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);
        });
        }
      });
    });
    });
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
        if(!message.channel.guild) return;
     if(message.content.startsWith(prefix + 'bc')) {
     if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
     if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
     let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
     let BcList = new Discord.RichEmbed()
     .setThumbnail(message.author.avatarURL)
     .setAuthor(`محتوى الرساله ${args}`)
     .setDescription(`
     عند إرآدة حضرتك إرسآل هذه الرسآلة بأمبيد أضغط على 📝
     عند إرآدة حضرتك إرسآل هذه الرسآلة بدون أمبيد أضغط على ✏
     عند إرآدتك منشن العضو أكتب 
     <user>
     لإرسال اسم السيرفر
     <server>
     لمنشنه أسم المرسل
     <by>
     `)
     if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
     msg.react('📝')
     .then(() => msg.react('✏'))
     .then(() =>msg.react('📝'))
      
     let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
     let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
      
     let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
     let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
     EmbedBc.on("collect", r => {
      
     message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
     message.guild.members.forEach(m => {
     let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
     var bc = new
     Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(EmbedRep)
     .setThumbnail(message.author.avatarURL)
     m.send({ embed: bc })
     msg.delete();
     })
     })
     NormalBc.on("collect", r => {
       message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
     message.guild.members.forEach(m => {
     let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
     m.send(NormalRep);
     msg.delete();
     })
     })
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
client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [`L-help `,`L-inv`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);

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
-   [L-bc ]  [ لارسال رسالة لجميع اعضاء السيرفر  ]

-   [L-2bc ]  [ لارسال رسالة لجميع اعضاء السيرفر بطريقه أخرى ]

-   [L-obc ]  [لارسال رساله للأونلاين فقط ]
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
-   [L-inv ]  [ لإضافه البوت الى سيرفرك ]

أو من خلال الرابط التالي
https://discordapp.com/api/oauth2/authorize?client_id=453902836133265410&permissions=8&scope=bot
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

**

`)


message.author.sendEmbed(embed)

}
});


 

          
client.login(process.env.BOT_TOKEN);
