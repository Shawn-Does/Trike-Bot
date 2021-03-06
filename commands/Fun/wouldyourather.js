module.exports = {
    name: "wouldyourather",
    aliases: ["wyr", "wur"],
    category: "Fun",
    description: "Would you rather?",
    ownerOnly: false,
    run: async (client, message, args) => {
        const choices = [
          "Would you rather have to smell the last thing you ate forever or have someone flick you when you yawn?",
          "Would you rather have shoes made of Lego or clothes made of kiwi?",
          "Would you rather become a frog when you upset somebody or become a unicorn every time you’re upset?",
          "Would you rather have to update social media saying each time you sneeze or only be able to listen to your favourite song covered by the Wiggles?",
          "Would you rather get a stomach bug in the middle of the first date or on your wedding?",
          "Would you rather be able to hear the thoughts of others (only when they are mad) or have to always eat the same food?",
          "Would you rather smash every plate you touch or every mirror you see?",
          "Would you rather take your mother’s favourite possession for £1000 or take a baby’s favourite toy (in front of your mother) for £10,000?",
          "Would you rather never celebrate your favourite holiday or have your friends never celebrate their favourite holiday?",
          "Would you rather have to dress like Batman for every funeral or dress like Mr Blobby for every wedding?",
          "Would you rather only eat chalk or constantly vomit fur-balls?",
          "Would you rather skip when you are in a hurry or only be able to shower in milk?",
          "Would you rather cluck like a chicken when you read or screech like a rooster before you talk?",
          "Would you rather have springs stuck to your back or have to wear a hat that can’t be removed?",
          "Would you rather be fluent in every language (only when shouting) or understand animals but they can only whisper directly in your ear?",
          "Would you rather sweat washing up liquid or have your saliva taste like air freshener?",
          "Would you rather not be able to see your reflection or have to dress in onesies?",
          "Would you rather have a guardian angel that dislikes you or a demon bodyguard that loves you?",
          "Would you rather be Spider-Man and be covered in ants or be Ant-Man and covered in spiders?",
          "Would you rather have popcorn for teeth or teeth for nails?",
          "Would you rather be able to predict the weather (but only five minutes before) or be able to sense when someone is lying (but only to others)?",
          "Would you rather constantly be too hot or never quite dry?",
          "Would you rather always try to open a door incorrectly or always stub your toe going up stairs?",
          "Would you rather have your skin colour change to reflect your mood or never be able to tell a lie?",
          "Would you rather be considered guilty for a crime you didn’t commit or have your closest friend charged for a crime you did commit?",
          "Would you rather sound like a duck or swim like a squid?",
          "Would you rather get into an argument with Meryl Streep or Tom Hanks?",
          "Would you rather never show in photographs or always break your shopping bag?",
          "Would you rather get food poisoning monthly or always be followed by flies?",
          "Would you rather control a scourge of mosquitos or befriend a hive of bees?",
          "Would you rather constantly mimic another’s accent or only communicate through interpretative dance?",
          "Would you rather live in a house made of cocktail sticks or in a polystyrene tent?",
          "Would you rather leave a trail of glitter wherever you go or constantly find sand in your shoes?",
          "Would you rather become a plane or become a car?",
          "Would you rather hear the same song repeatedly or only listen to white noise for a year?",
          "Would you rather be followed by Roombas or an angry personal trainer?",
          "Would you rather revert back to a baby or always get stuck queuing?",
          "Would you rather be hated by your idol or eat a block of cheese daily?",
          "Would you rather have everything you make/build break or every tool you use become marshmallow?",
          "Would you rather bury your head underground when scared (like an emu) or have your skin glow when you’re scared?",
          "Would you rather be friends with an annoying ghost or be bullied by an alien but no-one believes you?",
          "Would you rather squeal like a pig when sleeping or honk like a goose when walking?",
          "Would you rather be a talented musician but not heard or a talented gymnast but not seen?",
          "Would you rather your favourite team always lose or your favourite artist lose their voice?",
          "Would you rather own a cursed games console or have to use a pigeon to send messages?",
          "Would you rather use a pillow made of ice or a mattress made of hot soup?",
          "Would you rather have to hop everywhere or climb anything that you see?",
          "Would you rather have to get the face of the person you dislike tattooed on you or constantly see them in person?",
          "Would you rather bark every time you saw a postman or talk like Mickey Mouse every time you’re in trouble?",
          "Would you rather have no taste buds or be color blind?",
          "Would you rather eat everything you see or lick everything you see?",
          "Would you rather Look like a fish or smell like a fish?",
          "Would you rather have a booger hanging from your nose for the rest of your life or earwax planted on your earlobes?",
          "Would you rather start your life over again or have $10 billion dollars as a 40-year-old?",
          "Would you rather bring back Michael Jackson or Marilyn Monroe from the dead?",
          "Would you rather be blind or castrated?",
          "Would you rather know everyone’s death date or read people’s mind?",
          "Would you rather have the ability to fly or teleport?",
          "Would you rather be as rich as Bill Gates or as smart as Albert Einstein?",
          "Would you rather be a vegetarian or a pescatarian?",
          "Would you rather have a horn or grow a tail?",
          "Would you rather read DC comics or Marvel Comics?",
          "Would you rather be a villain or a superhero?",
          "Would you rather only speak 50 languages or only understand 50 languages?",
          "Would you rather always have cold coffee or hot coffee?",
          "Would you rather be a singer or a dancer?",
          "Would you have an Alien friend or a Superhero friend?",
          "Would you rather kill 100 convicted criminals or 1 innocent person?",
          "Would you rather have a flying car or a spaceship?",
          "Would you rather save your family or your lover if both are diagnosed with a cancer?",
          "Would you rather ride a roller coaster or a water slide?",
          "Would you rather control the world for five years of your life or for five minutes every day of your life?",
          "Would you rather be a dwarf or a giant?",
          "Would you rather be alone for 10 years or never be alone for 10 years?",
          "Would you rather live spend the next 10 years of your life rich and sad or poor and happy?",
          "Would you rather miss Christmas eve or Summer camp?",
          "Would you rather be chased by a bear or by a lion?",
          "Would you rather be a French Musketeer or an English Knight?",
          "Would you rather wear a sweatshirt or a jacket?",
          "Would you rather have popcorn or pizzas during a movie?",
          "Would you rather learn to surf or learn to skate?",
          "Would you rather be one-eyes or bald?",
          "Would you rather see through walls or walk through walls?",
          "Would you rather be trailed by a zombie or by a vampire?",
          "Would you rather have a portrait drawing or a portrait photograph?",
          "Would you rather be stuck in an elevator or be stuck in air duct vent?",
          "Would you rather become a basketball star or a baseball star?",
          "Would you rather tame a dragon or a dinosaur?",
          "Would you rather be rich and not loved or loved and not rich?",
          "Would you rather be Harry Potter or the Avatar?",
          "Would you rather be a Genie or the Wizard of Oz?",
          "Would you rather play board games or console games?",
          "Would you rather learn karate or taekwondo?",
          "Would you rather visit Dubai for sightseeing or Paris for some shopping?",
          "Would you rather be a famous actor or a famous musician?",
          "Would you rather be Superman or Batman?",
          "Would you rather cancel Winter forever or Summer forever?",
          "Would you rather be one-legged or one-handed?",
          "Would you rather have your bestie or a squad?",
          "Would you rather be a scientist or a businessman?",
          "Would you rather say the truth or do the dare (in a truth or dare game)?",
          "Would you rather be a comedian or magician?",
          "Would you rather go on a vacation in Rome or in Safari?",
          "Would you rather be a Cheerleader or a Mascot?",
          "Would you rather read comics or manga?",
          "Would you rather be an old wizard or a young magician?",
          "Would you rather have lifetime free burgers at McDonald’s or chicken at KFC?",
          "Would you rather have red lights or blue lights in your bathroom?",
          "Would you rather work out or practice yoga?",
          "Would you rather go to the beach or to a swimming pool?",
          "Would you rather be a superhero or a superhero sidekick?",
          "Would you rather run long-distance races or short distance races?",
          "Would you rather have your Halloween costume or be part of a circus?",
          "Would you rather visit a Museum or a Zoo?",
          "Would you rather play hide and seek or get into a pillow fight?",
          "Would you rather learn to play the piano or the guitar?",
          "Would you rather lose the ability to stand for more than 1 hour or lose the ability to sit for more than 1 hour?",
          "Would you rather have a talking cat or a talking dog?"
        ]
        const choice = choices[Math.floor(Math.random() * choices.length)]
        message.channel.send(choice)
    },
};
