let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = [
  "stick",
  //   "dagger",
  //   "shortSword",
  //   "spear",
  //   "greatSword",
  //   "fireBlast",
];
// buttons
const btnOne = document.querySelector("#buttonOne");
const btnTwo = document.querySelector("#buttonTwo");
const btnThree = document.querySelector("#buttonThree");
const btnFour = document.querySelector("#buttonFour");

// stats and such
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//   // buyItems: {
//   //   message: "examine content",
//   //   btnOptions: ["placeholder"],
//   //   displayText: `You take a look at what the dwarf has to sell.`,
//   // },

//   marsh: {
//     message: "You examine the Marsh.",
//   },
// };

function handleNavigation(locationData) {
  btnOne.innerText = locationData.btnContents[0];
  btnTwo.innerText = locationData.btnContents[1];
  btnThree.innerText = locationData.btnContents[2];
  btnFour.innerText = locationData.btnContents[3];
  btnOne.onclick = locationData.btnFunctions[0];
  btnTwo.onclick = locationData.btnFunctions[1];
  btnThree.onclick = locationData.btnFunctions[2];
  btnFour.onclick = locationData.btnFunctions[3];
  text.innerHTML = locationData.displayText;
}

// baseSet [Town1, store1, bar1, path1]
const goTown = (e) => {
  console.log("Returning to the Town of Sonir");
  handleNavigation(locationData[1]);
};

const goStore = (e) => {
  console.log("Entering Store");
  handleNavigation(locationData[2]);
};

const goTavern = (e) => {
  console.log("Entering Tavern");
  handleNavigation(locationData[3]);
};

const setForth = (e) => {
  console.log("Setting out for an Adventure!!");
  handleNavigation(locationData[4]);
};

// examine code ONLY

const examine = (location) => {
  console.log("Examining...");
  text.innerHTML = location.examineText;
};

// set1 [buyItems, sellItems, giveDram, questBoard, goPlains, goPath2]

const buyItems = (e) => {
  console.log("Buying Items");
};
const sellItems = (e) => {
  console.log("Selling Items");
};

const giveDram = (e) => {
  console.log("You Purchased a Dram");
};

const goQuestBoard = (e) => {
  console.log("Checking for quests...");
};

const goPlains = (e) => {
  console.log("Going to Plains");
};

const goPathTwo = (e) => {
  console.log("Going to Path Two!");
};

// initialize buttons

const handleBtnContent = (one, two, three) => {
  btnOne.innerText = one;
  btnTwo.innerText = two;
  btnThree.innerText = three;
};

const locationData = [
  {
    name: "start",
    btnContents: [
      'Enter "Axes and Alms"',
      'Enter "The Last Dram"',
      "Set Forth",
      "Examine The Village",
    ],
    btnFunctions: [
      goStore,
      goTavern,
      setForth,
      function () {
        examine(locationData[0]);
      },
    ],
    displayText:
      "<span><strong>Welcome</strong> young adventurer, to the village of Sonir! Strange creatures have appeared beyond the village gates. The king calls for aid! <br><strong>The Bone King</strong> has risen once more! You must train hard, and venture far from home to help save the kingdom from this terrible threat.<br><br> What do you wish to do?</span>",
    examineText:
      '<span>Upon examining the village you notice three things.<br> To your left, the village\'s only trading post; <strong>"Axes and Alms"</strong>.<br> To your right, a small tavern; <strong>"The Last Dram"</strong>, A sign near the door reads: <br> "Looking for work? Willing to brave the world outside the walls? Inquire inside." <br>Ahead of you are the village gates; the only way in or out of Sonir.</span>',
  },

  {
    // base set[town1, store1, bar1, path1]
    // town one
    name: "Sonir",
    btnContents: [
      'Enter "Axes and Alms"',
      'Enter "The Last Dram"',
      "Set Forth",
      "Examine the Village",
    ],
    btnFunctions: [
      goStore,
      goTavern,
      setForth,
      function () {
        examine(locationData[1]);
      },
    ],
    displayText:
      "<span>You have returned to the village square.<br><br> What will you do next?</span>",
    examineText:
      '<span>Upon examining the village you notice three things.<br> To your left, the village\'s only trading post; <strong>"Axes and Alms"</strong>.<br> To your right, a small tavern; <strong>"The Last Dram"</strong>, A sign near the door reads: <br> "Looking for work? Willing to brave the world outside the walls? Inquire inside." <br>Ahead of you are the village gates; the only way in or out of Sonir.</span>',
  },

  {
    // store one
    name: "Axes and Alms",
    btnContents: [
      "Buy Items",
      "Sell Items",
      "Return to Village",
      "Examine the Dwarf",
    ],
    btnFunctions: [
      buyItems,
      sellItems,
      goTown,
      function () {
        examine(locationData[2]);
      },
    ],
    displayText:
      '<span>You duck into the shop to find the storefront is not much larger than a halfling\'s hole. There are two small doors leading off to different rooms on either side; both with large signs stating <strong>"NO ENTRY"</strong> <br>An elderly dwarven male watches you from the counter. He speaks in a low, gruff voice: <br>"Hello, young one... Anything catch\'n yer eye?"<br><br> What will you do next?</span>',
    examineText:
      "<span>You examine the dwarf more closely. The first thing you notice is he is old. <em> Really</em> old. <br> There is a long, jagged scar running from the old drawf's hairline, down to his chin, cutting across his left eye.<br> The eye in question, has been replaced by a stunning golden device that seems to track your movements as if it were truly watching you.<br> The drawf wears a simple tunic, revealing many similarly grisly scars along his arms. It is clear he has seen many battles in his day. </span>",
  },
  {
    // bar one
    name: "The Last Dram",
    btnContents: [
      "Buy a Dram of Ale",
      "Check the Quest Board",
      "Return to Village",
      "Examine the Tavern",
    ],
    btnFunctions: [
      // these still need programming
      giveDram,
      goQuestBoard,
      goTown,
      function () {
        examine(locationData[3]);
      },
    ],
    displayText:
      "<span>You enter the small tavern. There are a few other travelers at the tables. A human male with what looks to be a long healed burn scar across the right side of his face nods in a silent greeting.<br><br> What will you do?</span>",
    examineText:
      '<span>Upon examination, you see a menu board nearby offering a <strong><em>"World Famous Dram of EmberBerry Ale!!!"</em></strong><br>Attached to a nearby beam, a small questboard waits. Several parchments have been nailed to the board. <br> The barkeep watches you curiously as you examine him further. The male, like the drawf, is rather old.<br> His greying hair falls past his shoulders, and one of his once green eyes has turned a milky white.',
  },
  {
    name: "pathOne",
    btnContents: [
      "Explore the Plains",
      "Venture Further From Sonir",
      "Return to Sonir",
      "Examine the Plains",
    ],
    btnFunctions: [
      goPlains,
      goPathTwo,
      goTown,
      function () {
        examine(locationData[4]);
      },
    ],
    displayText:
      "<span>(<strong>Plains Recommended level: 1 )</strong><br>You venture past the village gates to find gentle field of green ahead; the perfect start for our young adventurer! <br>A well kept path cuts through the plains, leading to a crossroads up ahead. So long as you keep to the path, you will be safe, but fortune favors the bold...<br><br> What will you do next?</span>",
    examineText:
      "Upon examining the plains you notice movement within the tall grass. strange sounds come from nearby. In the distance, you can see the grove of EmberBerry bushes.",
  },

  // setOne [storeOptions, barOptions, ]
];

addEventListener("load", handleNavigation(locationData[0]));
