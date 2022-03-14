const animals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra",
];
const randomAnimals = [];
let TrueAnswers = 0;
let FalseAnswers = 0;


let ClickedButton = [];
let gameCardContainer = document.getElementsByClassName("game-card-container")[0];


// hayvanları karıştır ve bir diziye ata ).
const level = 3;
let heart = level;
let heartRender = document.querySelector(".player-heart > h1");
heartRender.innerHTML = heart;

function createRandomAnimalsAndShuffle(animals, numberOfAnimals) {

    // creating Random Animals array 
    for (let i = 0; i < numberOfAnimals; i++) {
        randomNumber = Math.floor(Math.random() * 224);
        randomAnimals.push(animals[randomNumber]);
        randomAnimals.push(animals[randomNumber]);

    }

    // shuffile Random Animals array 
    let currentIndex = randomAnimals.length,
        randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [randomAnimals[currentIndex], randomAnimals[randomIndex]] = [
            randomAnimals[randomIndex], randomAnimals[currentIndex]
        ];
    }





}

class game {
    constructor(randomArray) {
        this.randomArray = randomArray;
        // game card oluşturma ve karıştırlmış elemanları ata.

        this.createGameCard = () => {
            for (let i = 0; i < level * 2; i++) {
                gameCardContainer.innerHTML += `<button class = "game-card"><p class ="game-card-text">${this.randomArray[i]}</p> </button>`;
            }
        }
        this.clickButton = () => {

            let gameCardsTexts = document.getElementsByClassName("game-card-text");
            for (let i = 0; i < gameCardsTexts.length; i++) {
                setTimeout(() => {
                    gameCardsTexts[i].className = "game-card-text makeUnVisible";
                }, 2000);

                gameCardsTexts[i].addEventListener("click", () => {
                    this.handleClickEvents(gameCardsTexts[i]);
                    this.isFailOrPass();

                })

            }


        }
        // tıklama olaylarını takip ederek doğru olanları css ile değiştir.

        this.handleClickEvents = (clickedGameCard) => {
            ClickedButton.push(clickedGameCard)
            if (ClickedButton.length == 2) {
                // validate etme
                if (ClickedButton[0].textContent == ClickedButton[1].textContent) {
                    for (let i = 0; i < ClickedButton.length; i++) {
                        ClickedButton[i].className = "game-card-text makeVisible";
                    }
                    TrueAnswers++;
                    console.log("doğru cevaplar", TrueAnswers);
                    ClickedButton = [];
                } else {
                    ClickedButton = [];
                    FalseAnswers++;

                    this.renderHeart(heart--);
                    console.log("yanlış cevaplar", FalseAnswers);
                }

            } else if ((ClickedButton.length > 2)) {

                console.log("yanlış")
                ClickedButton = [];

            }



        }
        this.isFailOrPass = () => {

            if (heart == 0) {
                alert("you have failed!!");
                window.location.reload();
            }

        }
        this.renderHeart = () => {
            heartRender.innerHTML = heart;

        }


    }


}


// main 
createRandomAnimalsAndShuffle(animals, level);


let MemoryGame = new game(randomAnimals)

MemoryGame.createGameCard();
MemoryGame.clickButton();