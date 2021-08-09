// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//

module.exports = function (robot) {
  //  YOUR CODE HERE
  //  Example
  robot.hear(/javascript/i, function (msg) {
    return msg.send('I love writing code!')
  })

  robot.hear(/lie/i, function (msg) {
    return msg.send('I like big bots and I cannot lie!')
  })

  const arrays = []
  robot.respond(/memorise (.*)/i, function (msg) {
    const token = msg.match[1]
    return msg.send('I like big bots and I cannot lie!')
  })

  /* Random Example
    If a user asks what is your favourite x, the bot respond according to the question */
  robot.respond(/what is your favourite (.*)/i, function (msg) {
    let fav
    fav = msg.match[1]
    console.log(fav)
    switch (fav) {
      case 'food':
        return msg.reply("I'm a robot--I don't eat food!")
      case 'band':
        return msg.reply("It's gotta be Daft Punk!")
      case 'programming language':
        return msg.reply('Javascript, of course!')
      default:
        return msg.reply("I don't have a favourite " + fav + ". What's yours?")
    }
  })
}

/************************************
  
  EXAMPLES OF THE KEY HUBOT FUNCTIONS
  
  ************************************/

// module.exports = function(robot) {

//  Example
//  robot.hear(/javascript/i, function(msg) {
//    return msg.send("I love writing code!");
//  });

/* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
// robot.respond(/hi|hello/i, function(msg) {
//   return msg.send("Howdy!");
// });

/* Random Example
    If a user asks what is your favourite x, the bot respond according to the question */
// robot.respond(/what is your favourite (.*)/, function(msg) {
//   let fav;
//   fav = msg.match[1];
//   console.log(fav);
//   switch (fav) {
//     case "":
//       return msg.reply("I'm a robot--I don't eat !");
//       break;
//     case "band":
//       return msg.reply("It's gotta be Daft Punk!");
//       break;
//     case "programming language":
//       return msg.reply("Javascript, of course!");
//       break;
//     default:
//       return msg.reply("I don't have a favourite " + fav + ". What's yours?");
//   }
// });
// };
