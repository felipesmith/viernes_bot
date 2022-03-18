require("dotenv").config();
const { Telegraf } = require("telegraf"); // import telegram lib
const axios = require("axios");
const CronJob = require("cron").CronJob;
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
  const job = new CronJob(
    "0 0 08 * * 5",
    function () {
      bot.telegram.sendMessage(ctx.message.chat.id, "VIERNECITO PAPÁ");
      bot.telegram.sendAudio(
        ctx.message.chat.id,
        "CQACAgEAAxkBAAERvARiLNqFF0IptUAs1qGQTbFi0mqNbAACtQIAAq0RaUWydfXp27BxhSME"
      );
    },
    null,
    true,
    "America/Argentina/Buenos_Aires"
  );
  ctx.reply("Hola! Recibirás el audio todos los viernes a las 8:00 am.");
  if (new Date().getDay() == 5) {
    if (new Date().getHours() > 8) {
      bot.telegram.sendMessage(ctx.message.chat.id, "VIERNECITO PAPÁ");
      bot.telegram.sendAudio(
        ctx.message.chat.id,
        "CQACAgEAAxkBAAERvARiLNqFF0IptUAs1qGQTbFi0mqNbAACtQIAAq0RaUWydfXp27BxhSME"
      );
    }
  }
  job.start();
});
bot.help((ctx) =>
  ctx.reply("Recibirás el audio todos los viernes a las 8:00 am.")
);
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("Hola", (ctx) =>
  ctx.reply("Hola! Recibirás el audio todos los viernes a las 8:00 am.")
);
bot.launch();
