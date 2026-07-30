const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {
  polling: true,
});

// Ganti dengan URL RAW foto banner kamu
const PHOTO_URL = "https://github.com/bootscoin00-cmyk/gramybot/main/banner.jpg";

bot.onText(/\/start/, (msg) => {
  bot.sendPhoto(msg.chat.id, PHOTO_URL, {
    caption: `🎮 Welcome to GRAMY!

Play the mini game, invite your friends, and earn rewards.

Backed by TON Blockchain.

Click the button below to start!`,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🎮 Play for Airdrop",
            web_app: {
              url: "https://gramy5.netlify.app",
            },
          },
        ],
        [
          {
            text: "📢 Announcement",
            url: "https://t.me/gramyannouncement",
          },
        ],
      ],
    },
  });
});

console.log("GRAMY Bot is running...");
