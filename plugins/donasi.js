let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [6285746030186]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [?]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
