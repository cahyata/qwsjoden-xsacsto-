module.exports = client => {
  const channelId = '790258318631108680'
  
  const updateMembers = guild => {
    const channel = guild.channels.cache.get(channelId)
    channel.setName(`👳 Penumpang: ${guild.memberCount.toLocaleString()}`)
  }
  client.on('guildMemberAdd', (penumpang) => updateMembers(penumpang.guild))
  client.on('guildMemberRemove', (penumpang) => updateMembers(penumpang.guild))
  
  const guild = client.guilds.cache.get('782537011801489419')
  updateMembers(guild)
}