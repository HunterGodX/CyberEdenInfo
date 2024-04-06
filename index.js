const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: 'Asia/Dhaka', //https://www.zeitverschiebung.net/en/ and find your city
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - CyberInfo started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1164997553541107762')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=PK2lYJoaq7Y') //Must be a youtube video link 
    .setState('to "𝕊𝕝𝕒𝕪 𝔼𝕧𝕖𝕣𝕪𝕕𝕒𝕪"')
    .setName('in 💥🅲🆈🅱🅴🆁 🅴🅳🅴🅽✨')
    .setDetails(`@𝟑𝟐𝐊[${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1016845411895488532/1142051842126262312/cybereden-cyber.gif?ex=66225029&is=660fdb29&hm=9f499651e8e277aee78a239bb39cad186a84479a79090ce9ffad7778db169dcd&')
    .setAssetsLargeText('Join in 💥🅲🆈🅱🅴🆁 🅴🅳🅴🅽✨')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1016845411895488532/1142051842499563591/verified-verificado.gif?ex=66225029&is=660fdb29&hm=57889a17871c1defafe25ea309822b06c82dce9bd9666cedc9a61691f7b03767&')
    .setAssetsSmallText('𝑽𝒆𝒓𝒊𝒇𝒊𝒆𝒅')
    .addButton('Join the Discord Server', 'https://discord.gg/invite/muamGJmVju')
    .addButton('Add me on Facebook', 'https://www.facebook.com/ritwik.rahman1');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `𝑳𝒊𝒇𝒆![${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
