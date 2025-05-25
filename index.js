const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false,
  // ADD THIS LINE AND THE INTENTS ARRAY BELOW
  intents: [
    Discord.Intents.FLAGS.GUILDS, // Required for guild-related events
    Discord.Intents.FLAGS.GUILD_MESSAGES, // Often needed even if not explicitly handling messages
    Discord.Intents.FLAGS.GUILD_PRESENCES, // Essential for presence updates
    Discord.Intents.FLAGS.DIRECT_MESSAGES // For direct message handling
    // You can add more intents from Discord.Intents.FLAGS if your self-bot needs them
  ]
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
    .setURL('YOUR_YOUTUBE_VIDEO_LINK_HERE') // MUST BE A VALID YOUTUBE VIDEO LINK (e.g., https://www.youtube.com/watch?v=your_video_id)
    .setState('to "𝕊𝕝𝕒𝕪 𝔼𝕧𝕖𝕣𝕪𝕕𝕒𝕪"')
    .setName('in 💥🅲🆈🅱🅴🆁 🅴🅳🅴🅽✨')
    .setDetails(`𝑳𝒊𝒇𝒆![${formatTime()}]`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://i.postimg.cc/SxqpT5bv/LogoA.gif')
    .setAssetsLargeText('Join in 💥🅲🆈🅱🅴🆁 🅴🅳🅴🅽✨')
    .setAssetsSmallImage('https://i.postimg.cc/rwMw0jg5/Verify-Blue.gif')
    .setAssetsSmallText('𝑽𝒆𝒓𝒊𝒇𝒊𝒆𝒅')
    .addButton('Join the Discord Server', 'https://discord.gg/invite/muamGJmVju')
    .addButton('Add me on Facebook', 'https://www.facebook.com/ritwik.rahman1');

  client.user.setActivity(r);

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
