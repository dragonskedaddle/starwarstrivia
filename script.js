const questions = {
    "1": {
        "question": "Which Star Wars movie was filmed entirely in the studio?",
        "options": ["Revenge of the Sith", "Return of the Jedi", "Star Wars", "Attack of the Clones"],
        "answer": "0"
    },
    "2": {
        "question": "Which of the three main heroes (Luke, Leia, and Han Solo) in the first Star Wars trilogy refused to sign a three picture deal?",
        "options": ["Carrie Fisher", "Harrison Ford", "They all signed", "Mark Hamill"],
        "answer": "1"
    },
    "3": {
        "question": "What color is Mace Windu's lightsaber?",
        "options": ["Red", "Blue", "Purple", "Green"],
        "answer": "2"
    },
    "4": {
        "question": "'The Star Wars Holiday Special' marked the first appearance of which Star Wars character?",
        "options": ["Lando Calrissian", "Jabba the Hutt", "Boba Fett", "Jar Jar Binks"],
        "answer": "2"
    },
    "5": {
        "question": "What actor pulled out of Episode III: Revenge of the Sith when he discovered that non-union actors were being used in the film?",
        "options": ["Mel Gibson", "George Clooney", "Gary Coleman", "Gary Oldman"],
        "answer": "3"
    },
    "6": {
        "question": "Who is the only non Jedi in the original Star Wars trilogy to use a lightsaber?",
        "options": ["R2-D2", "Han Solo", "Princess Leia", "Chewbacca"],
        "answer": "1"
    },
    "7": {
        "question": "Who served as Jabba the Hutt's chief of staff?",
        "options": ["Bib Fortuna", "Sarlacc", "Nute Gunray", "Maz Kanata"],
        "answer": "0"
    },
    "8": {
        "question": "Approximately how many languages can C-3PO speak?",
        "options": ["6 Trillion", "6 Thousand", "6 Million", "6 Billion"],
        "answer": "2"
    },
    "9": {
        "question": "What kind of Trooper is introduced at the beginning of Rogue One?",
        "options": ["Shadow Trooper", "Shock Trooper", "Death Trooper", "Scout Trooper"],
        "answer": "2"
    },
    "10": {
        "question": "In Return of the Jedi, Jabba refers to Han as his favorite what?",
        "options": ["Scoundrel", "Prisoner", "Knick-Knack", "Decoration"],
        "answer": "3"
    },
    "11": {
        "question": "What is the name of Boba Fett's ship?",
        "options": ["Slave 1", "Tantive IV", "Ebon Hawk", "Ravager"],
        "answer": "0"
    },
    "12": {
        "question": "What does Han say when Leia first tells him that she loves him?",
        "options": ["\"It's about time\"", "\"I love you too\"", "\"I know\"", "\"Yeah, I figured\""],
        "answer": "2"
    },
    "13": {
        "question": "What did fans of The Mandalorian name \"The Child\"?",
        "options": ["Baby Jabba", "Baby Oola", "Baby Mando", "Baby Yoda"],
        "answer": "3"
    },
    "14": {
        "question": "In The Force Awakens, what abandoned vehicle does Rey live in?",
        "options": ["Medical Frigate", "Escape Pod", "Sandcrawler", "AT-AT"],
        "answer": "3"
    },
    "15": {
        "question": "What sort of business did Luke's Uncle Owen run?",
        "options": ["Speeder Repair Shop", "Droid Repair Shop", "Moisture Farm", "Catina"],
        "answer": "2"
    },
    "16": {
        "question": "In Rogue One, what is the Empire removing from the holy city on Jedha?",
        "options": ["Jedi Texts", "Tibanna Gas", "Kyber Crystals", "Force Sensitive Citizens"],
        "answer": "2"
    },
    "17": {
        "question": "In The Empire Strikes Back, which All Terrain Walker does the Empire use to capture the rebel base?",
        "options": ["AT-TE", "AT-HS", "AT-AT", "AT-ST"],
        "answer": "2"
    },
    "18": {
        "question": "How many people does Darth Vader kill in The Empire Strikes Back?",
        "options": ["1", "2", "3", "4"],
        "answer": "1"
    },
    "19": {
        "question": "How old is Yoda when he finally succumbs to the Force?",
        "options": ["500", "700", "900", "300"],
        "answer": "2"
    },
    "20": {
        "question": "What is Count Dooku's Sith name?",
        "options": ["Darth Nihilus", "Darth Tyranus", "Darth Maul", "Darth Sidious"],
        "answer": "1"
    },
    "21": {
        "question": "Who did Obi-Wan Kenobi defeat in the Battle of Naboo?",
        "options": ["Darth Tyranus", "Darth Sidious", "Darth Maul", "Darth Malak"],
        "answer": "2"
    },
    "22": {
        "question": "In The Rise of Skywalker, who makes a brief cameo as the bartender in the cantina on Kijimi?",
        "options": ["John Williams", "J. J. Abrams", "George Lucas", "James Earl Jones"],
        "answer": "0"
    },
    "23": {
        "question": "Which character appears briefly at the end of Rogue One: A Star Wars Story?",
        "options": ["Princess Leia", "Yoda", "Luke Skywalker", "Obi-Wan Kenobi"],
        "answer": "0"
    },
    "24": {
        "question": "What kind of beast inhabits the Great Pit of Carkoon?",
        "options": ["Rathtar", "Fyrnock", "Rancor", "Sarlacc"],
        "answer": "3"
    },
    "25": {
        "question": "Which species stole the plans to the Death Star?",
        "options": ["Selonians", "Bothans", "Khommites", "Mynocks"],
        "answer": "1"
    },
    "26": {
        "question": "Who is the commander of the Death Star in A New Hope?",
        "options": ["Darth Vader", "Moff Gideon", "Lorth Needa", "Wilhuff Tarkin"],
        "answer": "3"
    },
    "27": {
        "question": "What creature lives in the garbage compactor of the original Death Star?",
        "options": ["Dianoga", "Asyyyriak", "Sarlacc", "Gundark"],
        "answer": "0"
    },
    "28": {
        "question": "In The Empire Strikes Back, what odds does C-3P0 give Han for successfully navigating the asteroid field?",
        "options": ["720 to 1", "3720 to 1", "643720 to 1", "43720 to 1"],
        "answer": "1"
    },
    "29": {
        "question": "During the first episode of The Mandalorian, what creature is seen roasting on a spit?",
        "options": ["Space Slug", "Spice Spider", "Kowakian Monkey Lizard", "Genosian Brain Worm"],
        "answer": "2"
    },
    "30": {
        "question": "Which pilot was shot down by Final Order forces during the Battle of Exegol?",
        "options": ["Wedge Antilles", "Biggs Darklighter", "Snap Wexley", "Thane Kyrell"],
        "answer": "2"
    },
    "31": {
        "question": "Which admiral leads the space assault on Imperial forces during the Battle of Scarif?",
        "options": ["Admiral Vaspar", "Admiral Gorin", "Admiral Ackbar", "Admiral Raddus"],
        "answer": "3"
    },
    "32": {
        "question": "In The Force Awakens, what are Han and Chewie hauling on their freighter?",
        "options": ["Rancors", "Sarlaccs", "Rathtars", "Wampas"],
        "answer": "2"
    },
    "33": {
        "question": "In the Star Wars Holiday Special, what holiday is being celebrated on Kashyyyk?",
        "options": ["Light Day", "Life Day", "Love Day", "Force Day"],
        "answer": "1"
    },
    "34": {
        "question": "Which Sith Lord is known for using a double-bladed lightsaber and is Darth Sidious' apprentice?",
        "options": ["Darth Maul", "Darth Tyranus", "Darth Vader", "Darth Plagueis"],
        "answer": "0"
    },
    "35": {
        "question": "What is the name of Han Solo's ship?",
        "options": ["TIE Fighter", "X-wing", "Millennium Falcon", "Slave 1"],
        "answer": "2"
    },
    "36": {
        "question": "In 'The Empire Strikes Back', on which planet does Luke Skywalker receive Jedi training from Yoda?",
        "options": ["Dagobah", "Endor", "Tatooine", "Hoth"],
        "answer": "0"
    },
    "37": {
        "question": "Who is Princess Leia's adoptive father?",
        "options": ["Obi-Wan Kenobi", "Bail Organa", "Anakin Skywalker", "Lando Calrissian"],
        "answer": "1"
    },
    "38": {
        "question": "In 'Return of the Jedi', which creature does Jabba the Hutt sentence Luke, Han, and Chewbacca to be fed to?",
        "options": ["Rancor", "Sarlacc", "Womp Rat", "Tauntaun"],
        "answer": "0"
    },
    "39": {
        "question": "Who is Rey's grandfather?",
        "options": ["Darth Maul", "Emperor Palpatine", "Darth Vader", "Count Dooku"],
        "answer": "1"
    },
    "40": {
        "question": "What is the name of the desert planet where Anakin Skywalker was discovered?",
        "options": ["Tatooine", "Dagobah", "Jakku", "Hoth"],
        "answer": "0"
    },
    "41": {
        "question": "Which bounty hunter captures Han Solo in 'The Empire Strikes Back'?",
        "options": ["Boba Fett", "IG-88", "Dengar", "Bossk"],
        "answer": "0"
    },
    "42": {
        "question": "Who kills Jabba the Hutt in 'Return of the Jedi'?",
        "options": ["Princess Leia", "Han Solo", "Luke Skywalker", "Chewbacca"],
        "answer": "0"
    },
    "43": {
        "question": "In 'The Force Awakens', who is the leader of the First Order?",
        "options": ["Supreme Leader Snoke", "Kylo Ren", "General Hux", "Captain Phasma"],
        "answer": "0"
    },
    "44": {
        "question": "What is the color of Mace Windu's lightsaber?",
        "options": ["Blue", "Green", "Purple", "Red"],
        "answer": "2"
      },
    "45": {
        "question": "Who says the famous line, 'May the Force be with you'?",
        "options": ["Obi-Wan Kenobi", "Darth Vader", "Han Solo", "Yoda"],
        "answer": "0"
    },
    "46": {
        "question": "What is the name of the bounty hunter who tracks down Han Solo in 'The Force Awakens'?",
        "options": ["Boba Fett", "Bossk", "Dengar", "Rathtar"],
        "answer": "3"
    },
    "47": {
        "question": "Which planet is the headquarters of the Jedi Order in the prequel trilogy?",
        "options": ["Naboo", "Coruscant", "Alderaan", "Kamino"],
        "answer": "1"
    },
    "48": {
        "question": "What is the name of the crime lord who rules over the Hutt Cartel?",
        "options": ["Jabba the Hutt", "Bib Fortuna", "Ziro the Hutt", "Gardulla the Hutt"],
        "answer": "0"
    },
    "49": {
        "question": "Who portrays Princess Leia Organa in the original trilogy?",
        "options": ["Carrie Fisher", "Natalie Portman", "Daisy Ridley", "Felicity Jones"],
        "answer": "0"
    },
    "50": {
        "question": "Which bounty hunter is responsible for the creation of the Clone Army?",
        "options": ["Boba Fett", "Jango Fett", "Dengar", "Aurra Sing"],
        "answer": "1"
    },
    "51": {
        "question": "What is the home planet of Chewbacca?",
        "options": ["Kashyyyk", "Endor", "Tatooine", "Dagobah"],
        "answer": "0"
    },
    "52": {
        "question": "In 'The Last Jedi', who is the master codebreaker recruited by Finn and Rose?",
        "options": ["DJ", "Lando Calrissian", "Poe Dameron", "Maz Kanata"],
        "answer": "0"
    },
    "53": {
        "question": "Which species is known for their exceptional piloting skills and resistance to mind control?",
        "options": ["Wookiees", "Bothans", "Twileks", "Rodians"],
        "answer": "1"
    },
    "54": {
        "question": "What is the name of the desert scavenger who becomes a central character in the sequel trilogy?",
        "options": ["Padmé Amidala", "Ahsoka Tano", "Rey", "Jyn Erso"],
        "answer": "2"
    },
    "55": {
        "question": "Which character is known for saying, 'I've got a bad feeling about this' in multiple Star Wars movies?",
        "options": ["Han Solo", "Obi-Wan Kenobi", "C-3PO", "Anakin Skywalker"],
        "answer": "0"
    },
    "56": {
        "question": "What is the capital city of the Galactic Republic and later the Galactic Empire?",
        "options": ["Coruscant", "Naboo", "Alderaan", "Tatooine"],
        "answer": "0"
    },
    "57": {
        "question": "In 'The Phantom Menace', who is revealed to be the creator of C-3PO?",
        "options": ["R2-D2", "Anakin Skywalker", "Obi-Wan Kenobi", "Qui-Gon Jinn"],
        "answer": "1"
    },
    "58": {
        "question": "What is the name of the Sith apprentice who becomes Darth Vader?",
        "options": ["Darth Plagueis", "Darth Tyranus", "Darth Sidious", "Anakin Skywalker"],
        "answer": "3"
    },
    "59": {
        "question": "What is the name of the gas giant planet where Cloud City is located?",
        "options": ["Tatooine", "Hoth", "Bespin", "Endor"],
        "answer": "2"
    },
    "60": {
        "question": "Which group of warriors is known for their connection to the Force and using lightsabers?",
        "options": ["Sith", "Mandalorians", "Jedi", "Bounty Hunters"],
        "answer": "2"
    },
    "61": {
        "question": "In 'The Clone Wars' animated series, who is Anakin Skywalker's Padawan?",
        "options": ["Ahsoka Tano", "Padmé Amidala", "Barriss Offee", "Luminara Unduli"],
        "answer": "0"
    },
    "62": {
        "question": "What is the name of the Resistance pilot who becomes a key figure in the sequel trilogy?",
        "options": ["Poe Dameron", "Finn", "Kylo Ren", "Snoke"],
        "answer": "0"
    },
    "63": {
        "question": "Which bounty hunter wears Mandalorian armor and has a deep connection to the Darksaber?",
        "options": ["Boba Fett", "Jango Fett", "Cad Bane", "Bo-Katan Kryze"],
        "answer": "3"
    },
    "64": {
        "question": "Who is the supreme leader of the Knights of Ren in the sequel trilogy?",
        "options": ["Kylo Ren", "Snoke", "General Hux", "Captain Phasma"],
        "answer": "0"
    },
    "65": {
        "question": "What is the name of the Wookiee co-pilot of the Millennium Falcon?",
        "options": ["Lando Calrissian", "Chewbacca", "Greedo", "Wedge Antilles"],
        "answer": "1"
    },
    "66": {
        "question": "What is the name of the aquatic planet where the Gungan species resides?",
        "options": ["Kamino", "Naboo", "Mon Cala", "Ryloth"],
        "answer": "1"
    },
    "67": {
        "question": "Who is the leader of the Separatist Alliance in the prequel trilogy?",
        "options": ["Darth Maul", "Count Dooku", "General Grievous", "Nute Gunray"],
        "answer": "1"
    },
    "68": {
        "question": "Which Sith Lord's real name is Sheev Palpatine?",
        "options": ["Darth Vader", "Darth Sidious", "Darth Tyranus", "Darth Plagueis"],
        "answer": "1"
    },
    "69": {
        "question": "What is the name of the furry species to which Chewbacca belongs?",
        "options": ["Wookiees", "Ewoks", "Rodians", "Trandoshans"],
        "answer": "0"
    },
    "70": {
        "question": "In 'The Force Awakens', what is the name of the map fragment that reveals Luke Skywalker's location?",
        "options": ["Death Star Plans", "Starkiller Base Blueprints", "Star Chart", "The Skywalker Map"],
        "answer": "3"
    },
    "71": {
        "question": "Which Sith Lord trained both Darth Tyranus and Darth Maul?",
        "options": ["Darth Vader", "Darth Sidious", "Darth Plagueis", "Darth Bane"],
        "answer": "1"
    },
    "72": {
        "question": "What is the name of the Imperial officer in 'A New Hope' who oversees the construction of the Death Star?",
        "options": ["Admiral Tarkin", "General Veers", "Admiral Piett", "Grand Moff Tarkin"],
        "answer": "3"
    },
    "73": {
        "question": "In 'The Clone Wars' animated series, who is the leader of the Nightsisters of Dathomir?",
        "options": ["Mother Talzin", "Asajj Ventress", "Barriss Offee", "Ahsoka Tano"],
        "answer": "0"
    },
    "74": {
        "question": "What is the nickname given to the planet Tatooine in 'A New Hope'?",
        "options": ["Ice Planet", "Desert Oasis", "Jungle World", "Sand Planet"],
        "answer": "3"
    },
    "75": {
        "question": "Which character is known for saying, 'Do or do not, there is no try.'?",
        "options": ["Obi-Wan Kenobi", "Yoda", "Qui-Gon Jinn", "Mace Windu"],
        "answer": "1"
    },
    "76": {
        "question": "What is the name of the Rebel Alliance's main capital ship in 'Return of the Jedi'?",
        "options": ["Tantive IV", "Mon Calamari Cruiser", "Nebulon-B Frigate", "Home One"],
        "answer": "3"
    },
    "77": {
        "question": "Who is the captain of the Millennium Falcon?",
        "options": ["Han Solo", "Lando Calrissian", "Chewbacca", "Wedge Antilles"],
        "answer": "0"
    },
    "78": {
        "question": "In 'The Phantom Menace', who wins the podracing event on Tatooine?",
        "options": ["Sebulba", "Anakin Skywalker", "Watto", "Qui-Gon Jinn"],
        "answer": "1"
    },
    "79": {
        "question": "Which species is known for its connection to the Force and its ability to manipulate minds?",
        "options": ["Sith", "Togruta", "Chiss", "Mirialan"],
        "answer": "0"
    },
    "80": {
        "question": "What is the name of the organization that enforces law and order in the galaxy?",
        "options": ["Galactic Senate", "Galactic Empire", "Galactic Republic", "Galactic Alliance"],
        "answer": "2"
    },
    "81": {
        "question": "What is the name of the gas giant planet that houses the mining facility Cloud City?",
        "options": ["Bespin", "Endor", "Hoth", "Mustafar"],
        "answer": "0"
    },
    "82": {
        "question": "Who is the Grand Master of the Jedi Order in the prequel trilogy?",
        "options": ["Qui-Gon Jinn", "Mace Windu", "Obi-Wan Kenobi", "Yoda"],
        "answer": "3"
    },
    "83": {
        "question": "In 'The Rise of Skywalker', what is the name of the Sith planet where Emperor Palpatine returns?",
        "options": ["Exegol", "Mortis", "Korriban", "Malachor"],
        "answer": "0"
    },
    "84": {
        "question": "What is the name of the order of warrior monks who serve as guardians of peace and justice in the galaxy?",
        "options": ["Sith", "Mandalorians", "Jedi", "Bounty Hunters"],
        "answer": "2"
    },
    "85": {
        "question": "Which character is known for saying, 'The Force will be with you, always.'?",
        "options": ["Obi-Wan Kenobi", "Yoda", "Luke Skywalker", "Leia Organa"],
        "answer": "3"
    },
    "86": {
        "question": "Who is the creator of the Clone Army?",
        "options": ["Darth Sidious", "Count Dooku", "Darth Plagueis", "Jango Fett"],
        "answer": "3"
    },
    "87": {
        "question": "What is the name of the infamous podracer who Anakin Skywalker beats in 'The Phantom Menace'?",
        "options": ["Sebulba", "Watto", "Greedo", "Dengar"],
        "answer": "0"
    },
    "88": {
        "question": "Which planet is the hidden base of the Rebel Alliance in 'A New Hope'?",
        "options": ["Hoth", "Yavin 4", "Endor", "Dantooine"],
        "answer": "1"
    },
    "89": {
        "question": "In 'The Clone Wars' animated series, who is the captain of the Republic's 501st Legion?",
        "options": ["Anakin Skywalker", "Obi-Wan Kenobi", "Ahsoka Tano", "Rex"],
        "answer": "3"
    },
    "90": {
        "question": "What is the name of the icy planet that serves as the Rebel Alliance's Echo Base in 'The Empire Strikes Back'?",
        "options": ["Hoth", "Endor", "Yavin 4", "Dagobah"],
        "answer": "0"
    },
    "91": {
        "question": "In 'The Force Awakens', what is Finn's designation within the First Order before he defects?",
        "options": ["FN-2187", "TK-421", "CT-7567", "CC-2224"],
        "answer": "0"
    },
    "92": {
        "question": "Who is the leader of the Mandalorians in the animated series 'Star Wars: The Clone Wars'?",
        "options": ["Jango Fett", "Bo-Katan Kryze", "Pre Vizsla", "Sabine Wren"],
        "answer": "2"
    },
    "93": {
        "question": "What is the name of the Sith Lord who is known for his mastery of manipulation and creating Darth Vader?",
        "options": ["Darth Sidious", "Darth Plagueis", "Darth Tyranus", "Darth Maul"],
        "answer": "1"
    },
    "94": {
        "question": "Which species is known for their unique ability to navigate through hyperspace?",
        "options": ["Togruta", "Mon Calamari", "Bothans", "Chiss"],
        "answer": "3"
    },
    "95": {
        "question": "In 'Return of the Jedi', what type of creature does Luke Skywalker ride on the forest moon of Endor?",
        "options": ["Tauntaun", "Womp Rat", "Ronto", "Speeder Bike"],
        "answer": "3"
    },
    "96": {
        "question": "What is the name of the smuggler and gambler who loses the Millennium Falcon to Han Solo in a game of sabacc?",
        "options": ["Lando Calrissian", "Jabba the Hutt", "Dengar", "Watto"],
        "answer": "0"
    },
    "97": {
        "question": "Who is the queen of Naboo in 'The Phantom Menace'?",
        "options": ["Padmé Amidala", "Leia Organa", "Sabé", "Mon Mothma"],
        "answer": "0"
    },
    "98": {
        "question": "What is the name of the aquatic creature that tries to devour Luke Skywalker in the trash compactor on the Death Star?",
        "options": ["Sarlacc", "Rancor", "Dianoga", "Exogorth"],
        "answer": "2"
    },
    "99": {
        "question": "In 'The Clone Wars' animated series, who is the leader of the droid army?",
        "options": ["Dooku", "Grievous", "Ventress", "Tambor"],
        "answer": "1"
    },
    "100": {
        "question": "What is the nickname given to the Millennium Falcon by Han Solo?",
        "options": ["The Gray Ghost", "The Fastest Ship", "The Scoundrel's Pride", "The Kessel Run"],
        "answer": "2"
    },
    "101": {
        "question": "Who is the founder of the Sith Order?",
        "options": ["Darth Sidious", "Darth Plagueis", "Darth Bane", "Darth Maul"],
        "answer": "2"
    },
    "102": {
        "question": "What is the name of the system that is destroyed by the Death Star in 'A New Hope'?",
        "options": ["Tatooine", "Endor", "Alderaan", "Hoth"],
        "answer": "2"
    },
    "103": {
        "question": "In 'The Force Awakens', what is the name of the scavenger who befriends Finn and helps him on his journey?",
        "options": ["Rose Tico", "Jyn Erso", "Rey", "Ahsoka Tano"],
        "answer": "2"
    },
    "104": {
        "question": "What is the name of the planet that serves as the headquarters of the Jedi Order in the sequel trilogy?",
        "options": ["Naboo", "Coruscant", "Ahch-To", "Kamino"],
        "answer": "2"
    },    
    "105": {
        "question": "Who is the leader of the Rebel Alliance in 'Return of the Jedi'?",
        "options": ["Mon Mothma", "Leia Organa", "Han Solo", "Wedge Antilles"],
        "answer": "0"
    },
    "106": {
        "question": "What is the name of the species that Yoda belongs to?",
        "options": ["Ewoks", "Wookiees", "Yoda's species", "Rodians"],
        "answer": "2"
    },
    "107": {
        "question": "What is the name of the Sith apprentice who becomes Darth Tyranus?",
        "options": ["Darth Sidious", "Darth Vader", "Count Dooku", "Darth Maul"],
        "answer": "2"
    },
    "108": {
        "question": "In 'The Phantom Menace', what is the podrace announcer's name?",
        "options": ["Watto", "Sebulba", "Ben Quadinaros", "Fode"],
        "answer": "3"
    },
    "109": {
        "question": "Which character is known for saying, 'I find your lack of faith disturbing'?",
        "options": ["Darth Vader", "Emperor Palpatine", "Obi-Wan Kenobi", "Han Solo"],
        "answer": "0"
    },
    "110": {
        "question": "What is the name of the bounty hunter who wears Mandalorian armor and is the protagonist of the Disney+ series 'The Mandalorian'?",
        "options": ["Boba Fett", "Cad Bane", "Din Djarin", "Jango Fett"],
        "answer": "2"
    },
    "111": {
        "question": "In 'The Rise of Skywalker', who reveals themselves to be a Sith loyalist and assassinates Supreme Leader Snoke?",
        "options": ["Kylo Ren", "General Hux", "Maz Kanata", "Pryde"],
        "answer": "3"
    },
    "112": {
        "question": "What is the name of the massive creature that resides in the trash compactor on the Death Star?",
        "options": ["Sarlacc", "Rancor", "Dianoga", "Exogorth"],
        "answer": "2"
    },
    "113": {
        "question": "Who is the leader of the Jedi Order in 'Attack of the Clones'?",
        "options": ["Qui-Gon Jinn", "Obi-Wan Kenobi", "Yoda", "Mace Windu"],
        "answer": "2"
    },
    "114": {
        "question": "What is the name of the criminal organization that Han Solo owes money to in 'The Force Awakens'?",
        "options": ["The Hutt Syndicate", "The Crimson Dawn", "The Black Sun", "The Pyke Syndicate"],
        "answer": "1"
    },
    "115": {
        "question": "In 'Revenge of the Sith', who fights Anakin Skywalker on the volcanic planet of Mustafar?",
        "options": ["Obi-Wan Kenobi", "Count Dooku", "Yoda", "Mace Windu"],
        "answer": "0"
    },
    "116": {
        "question": "What is the name of the tiny, green-skinned Jedi Master who trains Luke Skywalker?",
        "options": ["Qui-Gon Jinn", "Obi-Wan Kenobi", "Yoda", "Mace Windu"],
        "answer": "2"
    },
    "117": {
        "question": "In 'The Empire Strikes Back', what does Darth Vader reveal to Luke Skywalker during their lightsaber duel?",
        "options": ["He's Luke's father", "He's Leia's father", "He's Obi-Wan's brother", "He's Han Solo's brother"],
        "answer": "0"
    },
    "118": {
        "question": "What is the name of the city-planet that is the home of the Galactic Senate and Jedi Temple?",
        "options": ["Tatooine", "Coruscant", "Naboo", "Kamino"],
        "answer": "1"
    },
    "119": {
        "question": "Who says the line, 'The ability to destroy a planet is insignificant next to the power of the Force.'?",
        "options": ["Darth Vader", "Grand Moff Tarkin", "Emperor Palpatine", "Count Dooku"],
        "answer": "1"
    },
    "120": {
        "question": "What is the name of the character who famously exclaims, 'It's a trap!'?",
        "options": ["Admiral Ackbar", "Lando Calrissian", "Admiral Piett", "General Veers"],
        "answer": "0"
    },
    "121": {
        "question": "In 'The Phantom Menace', who wins the Boonta Eve Classic podracing event?",
        "options": ["Sebulba", "Anakin Skywalker", "Ratts Tyerell", "Ben Quadinaros"],
        "answer": "1"
    },
    "122": {
        "question": "What is the name of the diminutive alien species that lives on the forest moon of Endor?",
        "options": ["Ewoks", "Jawas", "Gungans", "Womp Rats"],
        "answer": "0"
    },
    "123": {
        "question": "Which character is known for saying, 'I am altering the deal, pray I don't alter it any further.'?",
        "options": ["Darth Vader", "Emperor Palpatine", "Obi-Wan Kenobi", "Han Solo"],
        "answer": "1"
    },
    "124": {
        "question": "What is the name of Han Solo's son who becomes a central character in the sequel trilogy?",
        "options": ["Ben Solo", "Luke Solo", "Anakin Solo", "Leia Solo"],
        "answer": "0"
    },
    "125": {
        "question": "Who is the leader of the Gungans in 'The Phantom Menace'?",
        "options": ["Boss Nass", "Captain Tarpals", "Jar Jar Binks", "Ric Olié"],
        "answer": "0"
    },
    "126": {
        "question": "In 'Return of the Jedi', what is the name of the crime lord who employs Jabba's rancor keeper?",
        "options": ["Bib Fortuna", "Greedo", "Dengar", "Salacious B. Crumb"],
        "answer": "0"
    },
    "127": {
        "question": "What is the name of the stormtrooper division that Finn belongs to before defecting?",
        "options": ["Stormtrooper Corps", "First Order Trooper Corps", "Finn Division", "FN Corps"],
        "answer": "1"
    },
    "128": {
        "question": "Which character is known for saying, 'Fear is the path to the dark side. Fear leads to anger, anger leads to hate, hate leads to suffering.'?",
        "options": ["Darth Vader", "Emperor Palpatine", "Yoda", "Obi-Wan Kenobi"],
        "answer": "2"
    },
    "129": {
        "question": "What is the name of the Imperial admiral who is obsessed with capturing the Rebel Alliance in 'The Empire Strikes Back'?",
        "options": ["Admiral Motti", "Admiral Ozzel", "Admiral Ackbar", "Admiral Piett"],
        "answer": "1"
    },
    "130": {
        "question": "In 'The Force Awakens', who is the leader of the Resistance?",
        "options": ["Leia Organa", "Poe Dameron", "Rey", "Finn"],
        "answer": "0"
    },
    "131": {
        "question": "What is the name of the red, double-bladed lightsaber used by Darth Maul?",
        "options": ["Sith Saber", "Dark Blade", "Double Saber", "Darth Saber"],
        "answer": "3"
    },
    "132": {
        "question": "In 'The Clone Wars' animated series, who is the leader of the Death Watch faction of Mandalorians?",
        "options": ["Jango Fett", "Bo-Katan Kryze", "Pre Vizsla", "Sabine Wren"],
        "answer": "2"
    },
    "133": {
        "question": "What is the name of the gas giant planet that is the home of the Gungan species?",
        "options": ["Tatooine", "Naboo", "Endor", "Coruscant"],
        "answer": "1"
    },
    "134": {
        "question": "In 'The Rise of Skywalker', what is the name of the Sith dagger that leads to the Emperor's wayfinder?",
        "options": ["Dagger of Mortis", "Sith Dagger of Power", "Dagger of Exegol", "Dagger of Ren"],
        "answer": "2"
    },
    "135": {
        "question": "What is the name of the protocol droid fluent in over six million forms of communication?",
        "options": ["C-3PO", "R2-D2", "BB-8", "HK-47"],
        "answer": "0"
    },
    "136": {
        "question": "In 'The Phantom Menace', what is the name of Anakin Skywalker's podracing vehicle?",
        "options": ["Racer X-38", "Podracer X-34", "Podracer T-16", "Podracer T-14"],
        "answer": "1"
    },
    "137": {
        "question": "Who is the leader of the Nightbrothers on Dathomir and the biological brother of Darth Maul?",
        "options": ["Savage Opress", "Asajj Ventress", "Darth Plagueis", "Quinlan Vos"],
        "answer": "0"
    },
    "138": {
        "question": "In 'The Force Awakens', who is the Supreme Leader of the First Order?",
        "options": ["Snoke", "Kylo Ren", "General Hux", "Captain Phasma"],
        "answer": "0"
    },
    "139": {
        "question": "What is the name of the ice planet where the Rebel Alliance establishes Echo Base in 'The Empire Strikes Back'?",
        "options": ["Hoth", "Endor", "Tatooine", "Kamino"],
        "answer": "0"
    },
    "140": {
        "question": "In 'The Rise of Skywalker', what is the name of the planet where Rey confronts Emperor Palpatine?",
        "options": ["Exegol", "Mustafar", "Korriban", "Malachor"],
        "answer": "0"
    },
    "141": {
        "question": "What is the name of the Jedi Master who discovers the secret to eternal life and becomes Darth Plagueis the Wise?",
        "options": ["Qui-Gon Jinn", "Yoda", "Obi-Wan Kenobi", "Dooku"],
        "answer": "3"
    },
    "142": {
        "question": "In 'Return of the Jedi', who tells Luke Skywalker, 'There is good in him, I've felt it.'?",
        "options": ["Obi-Wan Kenobi", "Yoda", "Leia Organa", "Anakin Skywalker"],
        "answer": "2"
    },
    "143": {
        "question": "What is the name of the planet destroyed by Starkiller Base in 'The Force Awakens'?",
        "options": ["Alderaan", "Endor", "Hoth", "Ilum"],
        "answer": "3"
    },
    "144": {
        "question": "In 'Attack of the Clones', which bounty hunter tries to assassinate Padmé Amidala?",
        "options": ["Aurra Sing", "Boba Fett", "Jango Fett", "Zam Wesell"],
        "answer": "3"
    },
    "145": {
        "question": "What is the name of the ancient Sith Lord who created the Rule of Two?",
        "options": ["Darth Revan", "Darth Malgus", "Darth Bane", "Darth Vitiate"],
        "answer": "2"
    },
    "146": {
        "question": "In 'The Clone Wars' animated series, who is the ruler of Mandalore during the Mandalorian Civil War?",
        "options": ["Duchess Satine", "Bo-Katan Kryze", "Ursa Wren", "Sabine Wren"],
        "answer": "0"
    },
    "147": {
        "question": "What is the name of the ancient Sith homeworld?",
        "options": ["Dromund Kaas", "Korriban", "Ziost", "Rakata Prime"],
        "answer": "1"
    },
    "148": {
        "question": "In 'The Rise of Skywalker', who is revealed to be Rey's grandfather?",
        "options": ["Darth Sidious", "Kylo Ren", "Darth Vader", "Darth Maul"],
        "answer": "0"
    },
    "149": {
        "question": "What is the name of the scavenger who discovers Luke Skywalker's lightsaber in 'The Force Awakens'?",
        "options": ["Leia Organa", "Maz Kanata", "Poe Dameron", "Rey"],
        "answer": "3"
    },
    "150": {
        "question": "In 'The Phantom Menace', what is the name of the Trade Federation's battle droids?",
        "options": ["Battle Bots", "B1 Battle Droids", "Droidekas", "Vulture Droids"],
        "answer": "1"
    },
    "151": {
        "question": "In 'The Force Awakens', what is the name of the junk dealer on Jakku who offers food portions in exchange for scrap?",
        "options": ["Unkar Plutt", "Teedo", "Bobbajo", "Derek Klivian"],
        "answer": "0"
    },
    "152": {
        "question": "What is the name of the species that Jabba the Hutt belongs to?",
        "options": ["Hutts", "Trandoshans", "Dugs", "Toydarians"],
        "answer": "0"
    },
    "153": {
        "question": "In 'Return of the Jedi', what is the name of the green, frog-like musician who plays in Jabba's palace?",
        "options": ["Max Rebo", "Sy Snootles", "Salacious B. Crumb", "Oola"],
        "answer": "0"
    },
    "154": {
        "question": "Who is the leader of the Wookiees on the planet Kashyyyk?",
        "options": ["Chewbacca", "Tarfful", "Zaalbar", "Lumpawaroo"],
        "answer": "1"
    },
    "155": {
        "question": "In 'The Rise of Skywalker', what is the name of the droidsmith who helps repair C-3PO's memory?",
        "options": ["Zorii Bliss", "Babu Frik", "Maz Kanata", "Beaumont Kin"],
        "answer": "1"
    },
    "156": {
        "question": "What is the name of the Imperial officer who is force choked by Darth Vader in 'A New Hope'?",
        "options": ["Admiral Motti", "Admiral Ozzel", "Captain Needa", "General Veers"],
        "answer": "0"
    },
    "157": {
        "question": "In 'Attack of the Clones', who is the Jedi Knight assigned to protect Padmé Amidala?",
        "options": ["Obi-Wan Kenobi", "Qui-Gon Jinn", "Plo Koon", "Ki-Adi-Mundi"],
        "answer": "0"
    },
    "158": {
        "question": "What is the name of the moisture farmer who raises Luke Skywalker on Tatooine?",
        "options": ["Uncle Owen", "Aunt Beru", "Uncle Lars", "Aunt Shmi"],
        "answer": "0"
    },
    "159": {
        "question": "In 'The Clone Wars' animated series, who is the leader of the Witches of Dathomir, also known as the Nightsisters?",
        "options": ["Mother Talzin", "Asajj Ventress", "Barriss Offee", "Ahsoka Tano"],
        "answer": "0"
    },
    "160": {
        "question": "What is the name of the podracing announcer in 'The Phantom Menace'?",
        "options": ["Fode", "Beed", "Watto", "Sebulba"],
        "answer": "1"
    },
    "161": {
        "question": "In 'The Force Awakens', what is the name of the stormtrooper who decides to defect and join the Resistance?",
        "options": ["FN-2187", "TK-421", "FN-2199", "FN-2000"],
        "answer": "0"
    },
    "162": {
        "question": "What is the name of the creature that Obi-Wan Kenobi rides on Utapau while pursuing General Grievous?",
        "options": ["Tauntaun", "Narglatch", "Boga", "Varactyl"],
        "answer": "2"
    },
    "163": {
        "question": "In 'The Clone Wars' animated series, who is the Sith Lord who manipulates Ahsoka Tano to frame her for a bombing?",
        "options": ["Darth Sidious", "Darth Tyranus", "Darth Plagueis", "Darth Maul"],
        "answer": "0"
    },
    "164": {
        "question": "What is the name of the protocol droid who accompanies Darth Vader in 'The Empire Strikes Back'?",
        "options": ["C-3PO", "R2-D2", "IG-88", "4-LOM"],
        "answer": "0"
    },
    "165": {
        "question": "In 'The Phantom Menace', what is the name of the podracer mechanic who helps Anakin Skywalker prepare for the race?",
        "options": ["Watto", "Sebulba", "Ben Quadinaros", "Ric Olié"],
        "answer": "3"
    },
    "166": {
        "question": "What is the name of the high-ranking Resistance officer who commands the bomber fleet in 'The Last Jedi'?",
        "options": ["Admiral Ackbar", "Admiral Holdo", "Admiral Raddus", "Admiral Piett"],
        "answer": "1"
    },
    "167": {
        "question": "In 'The Clone Wars' animated series, what is the name of Anakin Skywalker's custom starfighter?",
        "options": ["X-wing", "B-wing", "Delta-7 Aethersprite", "Eta-2 Actis-class"],
        "answer": "3"
    },
    "168": {
        "question": "What is the name of the protocol droid who serves as the first mate on the Tantive IV in 'A New Hope'?",
        "options": ["C-3PO", "R2-D2", "TC-14", "HK-47"],
        "answer": "2"
    },
    "169": {
        "question": "In 'The Rise of Skywalker', what is the name of the First Order general who is seen on the Star Destroyer during the final battle?",
        "options": ["General Hux", "General Pryde", "General Veers", "General Ozzel"],
        "answer": "1"
    },
    "170": {
        "question": "What is the name of the desert planet where Rey is initially introduced in 'The Force Awakens'?",
        "options": ["Tatooine", "Naboo", "Jakku", "Endor"],
        "answer": "2"
    },
    "171": {
        "question": "In 'Attack of the Clones', what type of creatures chase Obi-Wan Kenobi, Anakin Skywalker, and Padmé Amidala on Geonosis?",
        "options": ["Nexu", "Reek", "Acklay", "Womp Rat"],
        "answer": "0"
    },
    "172": {
        "question": "What is the name of the podracer who participates in the Boonta Eve Classic and loses to Anakin Skywalker in 'The Phantom Menace'?",
        "options": ["Sebulba", "Watto", "Greedo", "Dengar"],
        "answer": "0"
    },
    "173": {
        "question": "In 'The Empire Strikes Back', what is the name of the bounty hunter who captures Han Solo?",
        "options": ["Boba Fett", "IG-88", "Bossk", "Dengar"],
        "answer": "0"
    },
    "174": {
        "question": "What is the name of the Rebel Alliance's stolen data tape containing the Death Star plans?",
        "options": ["Data Disk 23-7", "Death Star Plans File", "Stolen Galactic Intel", "The Death Star's Secret"],
        "answer": "1"
    },
    "175": {
        "question": "In 'The Rise of Skywalker', what is the name of the planet where Kylo Ren confronts Rey on the wreckage of the Death Star?",
        "options": ["Endor", "Jakku", "Ahch-To", "Exegol"],
        "answer": "3"
    },
    "176": {
        "question": "What is the name of the character who is the chief of the Ewok tribe in 'Return of the Jedi'?",
        "options": ["Wicket W. Warrick", "Paploo", "Logray", "Chief Chirpa"],
        "answer": "3"
    },
    "177": {
        "question": "In 'The Clone Wars' animated series, what is the name of the planet that is home to the Umbara species and the site of a major Republic campaign?",
        "options": ["Utapau", "Kamino", "Mandalore", "Umbara"],
        "answer": "3"
    },
    "178": {
        "question": "What is the name of the Jedi Master who is known for his skills as a duelist and his mastery of Form V lightsaber combat?",
        "options": ["Mace Windu", "Qui-Gon Jinn", "Plo Koon", "Ki-Adi-Mundi"],
        "answer": "0"
    },
    "179": {
        "question": "In 'The Force Awakens', what is the name of the stormtrooper who uses a lightsaber against Finn?",
        "options": ["FN-2187", "FN-2199", "FN-2000", "TK-421"],
        "answer": "1"
    },
    "180": {
        "question": "What is the name of the planet where Luke Skywalker is trained by Yoda in 'The Empire Strikes Back'?",
        "options": ["Endor", "Dagobah", "Alderaan", "Hoth"],
        "answer": "1"
    },
    "181": {
        "question": "In 'The Phantom Menace', what is the name of the podracing event in which Anakin Skywalker participates?",
        "options": ["Boonta Eve Classic", "Podrace of Malastare", "Cantina Dash", "Tatooine Turbostreak"],
        "answer": "0"
    },
    "182": {
        "question": "What is the name of the character who leads the Rebel Alliance's assault on the shield generator on Endor in 'Return of the Jedi'?",
        "options": ["Lando Calrissian", "Wedge Antilles", "Admiral Ackbar", "General Madine"],
        "answer": "2"
    },
    "183": {
        "question": "In 'The Force Awakens', what is the name of the First Order's superweapon that can destroy entire star systems?",
        "options": ["Starkiller Base", "Death Star III", "Planet Killer", "Doomsday Device"],
        "answer": "0"
    },
    "184": {
        "question": "What is the name of the Sith Lord who becomes the apprentice of Darth Sidious in 'The Phantom Menace'?",
        "options": ["Darth Vader", "Darth Maul", "Darth Tyranus", "Darth Plagueis"],
        "answer": "1"
    },
    "185": {
        "question": "In 'The Empire Strikes Back', who is revealed to be the Rebel Alliance's traitor on Hoth?",
        "options": ["Han Solo", "Princess Leia", "Chewbacca", "Admiral Ackbar"],
        "answer": "1"
    },
    "186": {
        "question": "What is the name of the gangster who puts a bounty on Han Solo's head in 'The Empire Strikes Back'?",
        "options": ["Boba Fett", "Dengar", "Jabba the Hutt", "Bossk"],
        "answer": "2"
    },
    "187": {
        "question": "In 'The Rise of Skywalker', what is the name of the desert festival that takes place on Pasaana?",
        "options": ["Canto Bight Festival", "Festival of Life", "Burning Man Festival", "Festival of the Ancestors"],
        "answer": "3"
    },
    "188": {
        "question": "What is the name of the legendary Wookiee warrior who fought in the Clone Wars and the Galactic Civil War?",
        "options": ["Chewbacca", "Zaalbar", "Tarfful", "Itchy"],
        "answer": "0"
    },
    "189": {
        "question": "In 'The Phantom Menace', what is the name of the Jedi Master who discovers the blockade of Naboo and investigates the Sith?",
        "options": ["Obi-Wan Kenobi", "Qui-Gon Jinn", "Mace Windu", "Ki-Adi-Mundi"],
        "answer": "1"
    },
    "190": {
        "question": "What is the name of the starfighter model used by the Rebel Alliance in 'A New Hope'?",
        "options": ["TIE Fighter", "A-wing", "X-wing", "Y-wing"],
        "answer": "2"
    },
    "191": {
        "question": "In 'The Force Awakens', who is the leader of the Kanjiklub criminal organization?",
        "options": ["Maz Kanata", "Bala-Tik", "Unkar Plutt", "Hondo Ohnaka"],
        "answer": "1"
    },
    "192": {
        "question": "What is the name of the forest moon that serves as the second Death Star's construction site and is the site of the Battle of Endor?",
        "options": ["Endor", "Naboo", "Yavin 4", "Kashyyyk"],
        "answer": "0"
    },
    "193": {
        "question": "In 'The Clone Wars' animated series, who is the leader of the Zygerrian slave empire?",
        "options": ["Count Dooku", "Cad Bane", "Maul", "Queen Miraj Scintel"],
        "answer": "3"
    },
    "194": {
        "question": "What is the name of the ship piloted by Han Solo and Chewbacca?",
        "options": ["Imperial Star Destroyer", "Naboo Starfighter", "Slave I", "Millennium Falcon"],
        "answer": "3"
    },
    "195": {
        "question": "In 'The Rise of Skywalker', what is the name of the system where Exegol, the hidden Sith planet, is located?",
        "options": ["Stygian Prime", "Unknown Regions", "Ilum System", "Dromund Kaas"],
        "answer": "1"
    },
    "196": {
        "question": "What is the name of the bounty hunter who is hired by Darth Vader to track down the Millennium Falcon in 'The Empire Strikes Back'?",
        "options": ["IG-88", "Bossk", "Dengar", "Boba Fett"],
        "answer": "3"
    },
    "197": {
        "question": "In 'The Force Awakens', what is the nickname of the stormtrooper who breaks from the First Order and helps Finn and Poe escape?",
        "options": ["FN-2187", "TK-421", "FN-2199", "FN-2000"],
        "answer": "0"
    },
    "198": {
        "question": "What is the name of the city-planet that is the center of the galaxy and serves as the political hub of the Galactic Republic?",
        "options": ["Coruscant", "Naboo", "Tatooine", "Kamino"],
        "answer": "0"
    },
    "199": {
        "question": "In 'The Clone Wars' animated series, who is the leader of the Shadow Collective, a criminal alliance?",
        "options": ["Jabba the Hutt", "Pre Vizsla", "Darth Sidious", "Darth Maul"],
        "answer": "3"
    },
    "200": {
        "question": "What is the name of the astromech droid that serves as the co-pilot of the Millennium Falcon?",
        "options": ["R4-P17", "R5-D4", "BB-8", "R2-D2"],
        "answer": "3"
    }
}

const width = screen.width;
const numberOfQuestions = Object.keys(questions).length
const initialQuestion = getRandom(1, numberOfQuestions)
let previousQuestions = [initialQuestion,]
let data = questions[`${initialQuestion}`]
let numberOfCorrectAnswers = 0

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function resetQuestion(qNo){
    data = questions[`${qNo}`]
    let i = 0
    $('.question').text(data["question"])
    $('.answer-container').children().each(function(){
        $(this).text(data["options"][i])
        i++
    })
    $($('.answer-container').children()[[parseInt(data["answer"])]]).addClass('correct-answer')
}

$(".begin").click(function(){
    $(".begin").animate({opacity: 0}, 750, function(){
        $("body").css("height", "auto")
        $("html").css("height", "auto")
        $(".begin").css("display", "none")
        $(".container").css("display", "flex")
        $(".container").animate({opacity: 1}, 750)
    })
})

$(".answer").click(function() {
    if($(this).text() == data["options"][parseInt(data["answer"])]){
        numberOfCorrectAnswers++
        console.log(numberOfCorrectAnswers)
    }

    $(".correct-answer").removeClass('correct-answer')

    if(previousQuestions.length == 15){
        let text = ""
        if (numberOfCorrectAnswers >= 0 && numberOfCorrectAnswers < 5){
            text = "Train harder young padawan, one day you may be able to fight the forces of the empire"
        } else if (numberOfCorrectAnswers >= 5 && numberOfCorrectAnswers < 10){
            text = "You have potential train harder and learn the skills of a true jedi"
        } else if (numberOfCorrectAnswers >= 10 && numberOfCorrectAnswers < 15){
            text = "You are close to mastery padawan, train harder"
        } else if (numberOfCorrectAnswers == 15) {
            text = "You are not only a true jedi but the council grants you the rank of master"
        }
        
        Swal.fire({
            html: 
            `<div style="font-size: ${width > 541 ? "1.75rem" : "1.25rem"}; margin-bottom: 1rem;">${text}</div>
            <div style="font-size: ${width > 541 ? "1.5rem" : "1rem" };">Your Score: ${numberOfCorrectAnswers}/15</div>`,
            background: '#1c1c1c',
            color: '#fff',
            width: `${width > 541 ? "60vw" : "80vw"}`,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            confirmButtonText: 'Try Again',
            confirmButtonColor: "#e6d11c",
            scrollbarPadding: false,
        }).then(() => {
            window.location.reload()
        })
    } else {
        let nextQuestion = getRandom(1, numberOfQuestions)
        while(previousQuestions.includes(nextQuestion)){
            nextQuestion = getRandom(1, numberOfQuestions)
        }
        previousQuestions.push(nextQuestion)

        resetQuestion(nextQuestion)
    }
})


resetQuestion(initialQuestion) //pick random question on start
