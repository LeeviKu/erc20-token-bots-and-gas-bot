# price, holder amount and gas fee bots
- 3 discord bots that show erc 20 token's price, holder amount and current gas fees as their nickname
## how to use
- download the files
- install node.js
- go to the folder in terminal and type
  - npm install
- create .env file to root and give it these values:  
gasFeeBotClientId=************** // guide for getting the id https://www.freecodecamp.org/news/create-a-discord-bot-with-python/  
priceBotClientId=**************  
holdersBotClientId=************  
guildId=*************  // go to your discord channel and right click the name and select copy id  
etherscanApiKey=**************  // get the api key https://etherscan.io/apis  
tokenContract=*****************  // for example go to dextools search your coin and copy from under the name "token contract"  
tokenPair=****************  // from same place you got the "token contract" but now copy the pair  
  
- lastly type node discord.js in terminal
- and there you go the bot should be running!
- if you have any questions or problems contact: leevi.kukkula@gmail.com
- throw me some eth or other erc 20 tokens: 0x8587bacF9AC1Cb9De3E5E0fD2Bb2FB480F6Cf58D
