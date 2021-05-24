# price, holder amount and gas fee discord bots
- 3 discord bots that show erc 20 token's price, holder amount and current gas fees as their nickname  
![image of bots](https://i.imgur.com/bOQJ0QV.png)
## how to use
- Download the files.
- Install node.js
- Go to the folder in terminal and type
  - npm install
- Create 3 bots. Guide: https://www.freecodecamp.org/news/create-a-discord-bot-with-python/  
- Put these values into the .env file:  
gasFeeBotClientId=************** // guide for getting the id https://www.freecodecamp.org/news/create-a-discord-bot-with-python/  
priceBotClientId=**************  
holdersBotClientId=************  
guildId=************* // go to your discord channel and right click the name and select copy id  
etherscanApiKey=************** // get the api key https://etherscan.io/apis  
tokenContract=***************** // for example go to dextools search your coin and copy "token contract" from under the name  
tokenPair=**************** // from same place you got the "token contract" but now copy the pair  
decimalAmount=11 // how many decimal points the price has
  
- Lastly type node discord.js in terminal.
- And there you go the bot should be running!
- If you have any questions or problems add me in discord: paskapeli73#3717
### throw me some eth: 0x8587bacF9AC1Cb9De3E5E0fD2Bb2FB480F6Cf58D
