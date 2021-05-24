const { default: axios } = require("axios");
const Discord = require("discord.js")
const gasFeeBotClient = new Discord.Client()
const priceBotClient = new Discord.Client()
const holdersBotClient = new Discord.Client()
const fetch = require('node-fetch');
require('dotenv').config()

gasFeeBotClient.on("ready", () => {
    setInterval(async () => {
      const result = await axios.get("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=ZAXZI8VT6R4X6ZYSDSNR7JFWW7U8K5RI5C")
      const low = result.data.result.SafeGasPrice
      const average = result.data.result.ProposeGasPrice
      const fast = result.data.result.FastGasPrice
      await gasFeeBotClient.guilds.cache.find(guild => guild.id === '841569963151851540').me.setNickname(`${fast} ${average} ${low}`)
      console.log(`${low} ${average} ${fast}`)
    }, 30000);
})

holdersBotClient.on("ready", () => {
    setInterval(async () => {
      const result = await axios.get("https://api.ethplorer.io/getTokenInfo/0xda23d301761e4e2bf474951f978f6dfb6f3c9f14?apiKey=freekey").catch(e => console.log(e))
      const holders = result.data.holdersCount
      await holdersBotClient.guilds.cache.find(guild => guild.id === '841569963151851540').me.setNickname(holders)
      console.log(holders)
    }, 90000);
})

priceBotClient.on("ready", async () => {
    setInterval(async () => {
      const tkinuResult = await fetch('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          query: `
            {	pair(id: \"0x214913d4aab5bb321498edb7309cf68cd8c5d86b\"){    token0Price  }}
          `
        })
      }).catch(e => console.log(e))
      const ethResult = await fetch('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          query: `
            {	pair(id: \"0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc\"){    token0Price  }}
          `
        })
      }).catch(e => console.log(e))
      const json = await tkinuResult.json()
      const json2 = await ethResult.json()
      const priceOfTkinuInEth = json.data.pair.token0Price
      const priceOfEth = json2.data.pair.token0Price
      const priceOfTkinuInUsd = priceOfTkinuInEth * priceOfEth
      await priceBotClient.guilds.cache.find(guild => guild.id === '841569963151851540').me.setNickname(Number(priceOfTkinuInUsd).toFixed(11))
      console.log(Number(priceOfTkinuInUsd).toFixed(11))
    }, 30000);
})

gasFeeBotClient.login(process.env.gasFeeBotClientId)
priceBotClient.login(process.env.priceBotClientId)
holdersBotClient.login(process.env.holdersBotClientId)
