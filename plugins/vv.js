const { bot, forwardOrBroadCast, parsedJid } = require('../lib')

bot(
  {
    pattern: 'vv ?(.*)',
    fromMe: true,
    desc: 'antiViewOnce',
    type: 'whatsapp',
  },
  async (message, match) => {
    if (
      !message.reply_message ||
      (!message.reply_message.image &&
        !message.reply_message.video &&
        !message.reply_message.audio)
    ) {
      return await message.send(
        '*Reply to a View Once image, video or audio with vv*'
      )
    }

    const [jid] = parsedJid(match)
    await forwardOrBroadCast(jid || message.jid, message, { viewOnce: false })
  }
)
