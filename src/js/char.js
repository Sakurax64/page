const age = [
    "10 and under",
    "11-20 years old",
    "21-30 years old",
    "31-40 years old",
    "41-50 years old",
    "51+ years old"
];

const motivation = [
    "Survival",
    "Love",
    "Honor",
    "Control",
    "Save",
    "Serve",
    "Rule",
    "Destroy",
    "Grief",
    "Betrayal",
    "Fear",
    "Escape",
    "Revenge",
    "Recover",
    "Justice",
    "Desire",
    "Discover",
    "Achieve",
    "Hate",
    "Ambition"
];

const charClass = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard"
];

const archetype = [
    "The Hero",
    "The Alchemist",
    "The Lover",
    "The Jester",
    "The Everyperson",
    "The Innocent",
    "The Sage",
    "The Explorer",
    "The Caregiver",
    "The Creator",
    "The Ruler",
    "The Rebel"
];

const stats = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Wisdom",
    "Intelligence",
    "Charisma"
];

const race = {
    "common": [
        "Human",
        "Half-Elf",
        "Half-Orc",
        "Orc",
        "Halfling",
        "Tiefling",
        "Gnome",
        "Elf",
        "Dwarf",
        "Dragonborn"],
    "uncommon": [
        "Aarakocra",
        "Firbolg",
        "Aasimar",
        "Genasi",
        "Kenku",
        "Tortle",
        "Tabaxi",
        "Harengon",
        "Triton",
        "Locathah",
        "Verdan",
        "Goliath"

    ],
    "monstrous": [
        "Bugbear",
        "Centaur",
        "Goblin",
        "Grung",
        "Orc",
        "Kobold",
        "Hobgoblin",
        "Minotaur",
        "Lizardfolk",
        "Yuan-Ti"
    ]
};

const alignment = [
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil"
];

const starsign = [
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Saggittarius",
    "Capricorn"
];

const hairFeature = [
    "Dyed",
    "Bangs",
    "Greying",
    "Balding/Patchy",
    "Damaged",
    "Thinning",
    "Pulled back",
    "Unkempt",
    "Styled",
    "Partly Shaven",
    "Uneven",
    "Wig"
];

const hairColor = {
    "normal": [
        "Black",
        "Dark Brown",
        "Chestnut Brown",
        "Light Brown",
        "Auburn",
        "Ginger",
        "Dark Blonde",
        "Golden Blonde",
        "Flaxen",
        "Gray",
        "Salt & Pepper",
        "White"
    ],
    "unusual": [
        "Ombre",
        "Pink",
        "Lavender",
        "Dark Blue",
        "Olive Green",
        "Deep Red",
        "Pale Blue",
        "Purple"
    ]
};

const hairType = [
    "Thick",
    "Curly",
    "Fine",
    "Straight",
    "Full",
    "Glossy",
    "Dull",
    "Frizzy",
    "Silky",
    "Wavy",
    "Bouncy",
    "Flat"
];

const hairLength = [
    "Very Short",
    "Short",
    "Shoulder Length",
    "Mid-back",
    "Hip Length",
    "Pulled Back",
    "Braided",
    "Pulled Up",
    "Shaved",
    "Thigh-length +"
];

const eyeColor = {
    "normal": [
        "Dark Brown",
        "Chestnut Brown",
        "Light Brown",
        "Hazel",
        "Blue - Gray",
        "Blue - green",
        "Green",
        "Amber",
        "Black"
    ],
    "unusual": [
        "Red",
        "Pale Pink",
        "Silver",
        "Lavender",
        "Vivid Green",
        "Golden Yellow",
        "Fuschia",
        "Cyan"
    ]
};

const visualFeature = [
    "Multiple Piercings",
    "Heterochromia",
    "Tattoos",
    "Birthmark",
    "Freckles",
    "Dimples",
    "Scars",
    "Burn mark",
    "Callouses",
    "Painted Nails",
    "Heavy Makeup",
    "Light Makeup"
];

const details = [
    "Smoking",
    "Loud voice",
    "Playing with hair",
    "Excessive drinking",
    "Has an accent",
    "Vision problems",
    "Lip biting",
    "Gambling addiction",
    "Tendency to cheat",
    "Has a stutter",
    "Knuckle cracking",
    "Tendency to lie",
    "Nail biting",
    "Excessive swearing",
    "A sweet tooth",
    "Difficulty with hearing",
    "Likes to eat",
    "Sings/whistles",
    "Uses third person",
    "Soft voice"

];

const myersBriggs = {
    0: [
        "I",
        "I",
        "E",
        "E"
    ],
    1: [
        "S",
        "S",
        "N",
        "N"
    ],
    2: [
        "F",
        "T",
        "F",
        "T"
    ],
    3: [
        "P",
        "J",
        "P",
        "J"
    ]
};

const proficiency = {
    0: [
        "Acrobatics",
        "Animal Handling",
        "Stealth",
        "Survival",
        "Athletics",
        "Intimidation",
        "Deception",
        "Persuasion"
    ],
    1: [
        "History",
        "Insight",
        "Arcana",
        "Investigation",
        "Medicine",
        "Nature",
        "Perception",
        "Religion"
    ]
};

const profession = [
    "Farmer",
    "Armourer",
    "Butcher",
    "Blacksmith",
    "Barber",
    "Weaver",
    "Miller",
    "Baker",
    "Porter",
    "Thatcher",
    "Mason",
    "Carpenter",
    "Peddler",
    "Fisherman",
    "Miner",
    "Tanner",
    "Brewer",
    "Barkeep",
    "Candlemaker",
    "Merchant",
    "Priest",
    "Town Crier",
    "Scribe",
    "Sailor",
    "Stablemaster",
    "Tailor",
    "Bookbinder",
    "Cook",
    "Cartographer",
    "Knight",
    "Solider",
    "Innkeeper",
    "Bounty Hunter",
    "Smuggler",
    "Gravedigger",
    "Courier",
    "Gardener",
    "Confectioner",
    "Thief",
    "Enchanter",
    "Assassin",
    "Minstrel",
    "Hunter",
    "Guard",
    "Carriage Driver",
    "Dressmaker",
    "Alchemist",
    "Pirate",
    "Painter",
    "Logger",
    "Midwife",
    "Jeweller",
    "Fletcher",
    "Locksmith",
    "Haberdasher",
    "Doctor",
    "Shipwright",
    "Stablehand",
    "Saddler",
    "Footman",
    "Servant",
    "Spy",
    "Landlord",
    "Prostitute",
    "Healer",
    "Undertaker",
    "Mage",
    "Detective",
    "Gambler",
    "Entertainer",
    "Trader",
    "Shoemaker",
    "Monk",
    "Fortuneteller",
    "Harbormaster",
    "Mercenary",
    "Scholar",
    "Acolyte",
    "Bandit",
    "Aristocrat",
    "Engineer",
    "Accountant",
    "Cobbler",
    "Witch",
    "Leatherworker",
    "Judge",
    "Builder",
    "Clerk",
    "Courtesan",
    "Jailer",
    "Lamplighter",
    "Minister",
    "Navigator",
    "Scout",
    "Banker",
    "Necromancer",
    "Steward",
    "Gladiator",
    "Librarian",
    "Astrologer"

];

const traits = {
    0: [
        "Kind",
        "Rude",
        "Humble",
        "Arrogant",
        "Gentle",
        "Cruel",
        "Polite",
        "Blunt",
        "Outgoing",
        "Reserved",
        "Cheerful",
        "Brooding",
        "Sensitive",
        "Callous",
        "Easygoing",
        "Aggressive",
        "Energetic",
        "Quiet",
        "Patient",
        "Rash"
    ],
    1: [
        "Loyal",
        "Two-Faced",
        "Brave",
        "Cowardly",
        "Honest",
        "Liar",
        "Generous",
        "Selfish",
        "Diligent",
        "Careless",
        "Responsible",
        "Unreliable",
        "Shy",
        "Impulsive",
        "Attentive",
        "Reckless",
        "Frugal",
        "Extravagant",
        "Mischievous",
        "Obedient"
    ],
    2: [
        "Open-Minded",
        "Prejudice",
        "Creative",
        "Cunning",
        "Decisive",
        "Indecisive",
        "Wise",
        "Naive",
        "Sincere",
        "Sarcastic",
        "Orderly",
        "Messy",
        "Hardworking",
        "Lazy",
        "Mature",
        "Immature",
        "Modest",
        "Vain",
        "Persistent",
        "Meek"
    ],
    3: [
        "Intelligent",
        "Ignorant",
        "Assertive",
        "Hesitant",
        "Spoiled",
        "Cautious",
        "Reasonable",
        "Stubborn",
        "Emotional",
        "Apathetic",
        "Funny",
        "Serious",
        "Charming",
        "Moody",
        "Independent",
        "Dependent",
        "Determined",
        "Petty",
        "Pious",
        "Paranoid"
    ]
};

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

class Character {
    constructor(age, motivation, charClass, archetype, highStat, lowStat, race, alignment, starsign, hairFeature, hairColor, hairType, hairLength, eyeColor, visualFeature, details, myersBriggs, proficiency, profession, traits) {
        this.age = age;
        this.motivation = motivation;
        this.charClass = charClass;
        this.archetype = archetype;
        this.highStat = highStat;
        this.lowStat = lowStat;
        this.race = race;
        this.alignment = alignment;
        this.starsign = starsign;
        this.hairFeature = hairFeature;
        this.hairColor = hairColor;
        this.hairType = hairType;
        this.hairLength = hairLength;
        this.eyeColor = eyeColor; unusualHair
        this.visualFeature = visualFeature;
        this.details = details;
        this.myersBriggs = myersBriggs;
        this.proficiency = proficiency;
        this.profession = profession;
        this.traits = traits;
    };
};

function generateChar(eyesOption, hairOption, raceOption) {
    const char = new Character(random(age), random(motivation), random(charClass), random(archetype), random(stats), random(stats), random(race[raceOption]), random(alignment), random(starsign), random(hairFeature), random(hairColor[hairOption]), random(hairType), random(hairLength), random(eyeColor[eyesOption]), random(visualFeature), random(details), `${random(myersBriggs[0])}${random(myersBriggs[1])}${random(myersBriggs[2])}${random(myersBriggs[3])}`, `${random(proficiency[0])}, ${random(proficiency[1])}`, random(profession), `${random(traits[0])}, ${random(traits[1])}, ${random(traits[2])}, ${random(traits[3])}`);

    const insert = document.getElementById("insert");

    insert.innerHTML = `
        <section class="about-section text-center" id="chargen">
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-10">
                <p class="text-white-50">
                    Age:  ${char.age}
                    <br />
                    Motivation:  ${char.motivation}
                    <br />
                    Class:  ${char.charClass}
                    <br />
                    Archetype:  ${char.archetype}
                    <br />
                    Highest Stat:  ${char.highStat}
                    <br />
                    Lowest Stat:  ${char.lowStat}
                    <br />
                    Race:  ${char.race}
                    <br />
                    Alignment:  ${char.alignment}
                    <br />
                    Star Sign:  ${char.starsign}
                    <br />
                    Hair Feature:  ${char.hairFeature}
                    <br />
                    Hair Color:  ${char.hairColor}
                    <br />
                    Hair Type:  ${char.hairType}
                    <br />
                    Hair Length:  ${char.hairLength}
                    <br />
                    Eye Color:  ${char.eyeColor}
                    <br />
                    Visual Feature:  ${char.visualFeature}
                    <br />
                    Additional Details:  ${char.details}
                    <br />
                    Proficiency:  ${char.proficiency}
                    <br />
                    Profession:  ${char.profession}
                    <br />
                    Traits:  ${char.traits}
                    <br />
                    Myers Briggs:  ${char.myersBriggs}
                    </p>
            </div>
        </div>
    </div>
</section>
        
        `

    return char;
};

function validateForm() {
    const unusualHair = document.getElementById("unusualHair").value;
    const unusualEyes = document.getElementById("unusualEyes").value;
    const raceRarity = document.getElementById("raceRarity").value;

    console.log(generateChar(unusualEyes, unusualHair, raceRarity));
};