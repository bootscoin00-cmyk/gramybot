const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendAnimation(
    msg.chat.id,
    "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif",
    {
      caption:
`🎮 Welcome to GRAMY!

🚀 Play the mini game, invite your friends, and earn rewards.

Backed by TON Blockchain.

👇 Click the button below to start.`,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🎮 Play for Airdrop",
              web_app: {
                url: "https://t.me/gramycoin_bot?startapp"
              }
            }
          ],
          [
            {
              text: "📢 Announcement",
              url: "https://t.me/GRAMYannouncement"
            }
          ]
        ]
      }
    }
  );
});

console.log("GRAMY Bot is running...");
