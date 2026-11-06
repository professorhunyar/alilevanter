const { bot, setVar, lang } = require('../lib/')

bot(
  {
    pattern: 'status ?(.*)',
    desc: lang.plugins.status.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.status.usage)
    if (!['on', 'off'].includes(match.trim().toLowerCase())) {
      return await message.send(lang.plugins.status.usage)
    }
    await setVar({ AUTO_STATUS_VIEW: match.trim().toLowerCase() === 'on' ? 'true' : 'false' }, message.id)
    return await message.send(lang.plugins.common.update)
  }
)
