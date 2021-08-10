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
//   javascript - let's the user know that the robot loves code
//   lie - swears that the bot cannot lie
//   hubot memorise <something> - remember something for later
//   hubot recall - recalls the things previously memorised
//   hubot what is your favourite <something> - replies with robot's favourite something

function shuffle(groupSize, inputList) {
  const groups = []
  let list = [...inputList]
  while (list.length >= groupSize) {
    const group = []
    while (group.length < groupSize) {
      const index = Math.floor(Math.random() * list.length)
      group.push(list.splice(index, 1))
    }
    groups.push(group)
  }
  // Any spares get randomly distributed
  while (list.length > 0) {
    const index = Math.floor(Math.random() * groups.length)
    const group = groups[index]
    const item = list.pop()
    group.push(item)
  }
  return groups
}

module.exports = function (robot) {
  //  YOUR CODE HERE
  //  Example
  robot.hear(/javascript/i, function (msg) {
    return msg.send("I love writing code! It's my favourite thing ever!")
  })

  robot.hear(/zoom/i, function (msg) {
    if (!process.env.ZOOM_LINK) {
      return
    }
    return msg.send(`The zoom link for the class is: ${process.env.ZOOM_LINK}`)
  })

  robot.respond(/shuffle (\d+) (((.*),)*(.*))/i, function (msg) {
    const groupSize = msg.match[1]
    const list = msg.match[2].split(',')

    const groups = shuffle(groupSize, list).map((g) => g.join(', '))
    return msg.send(`The groups are:\n  ${groups.join('\n  ')}`)
  })

  robot.respond(/hi|hello|hey+a|howdy/i, function (msg) {
    return msg.send('Howdy!')
  })

  robot.hear(/lie/i, function (msg) {
    return msg.send('I like big bots and I cannot lie!')
  })

  const memorisedThings = []
  robot.respond(/memorise (.*)/i, function (msg) {
    const token = msg.match[1]
    memorisedThings.push(token)
    return msg.send('Okay, I will remember ' + token)
  })

  robot.respond(/recall/i, function (msg) {
    return msg.send(memorisedThings.join('\n'))
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
