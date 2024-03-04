import { items } from "./data/items.js";
import { NPCs } from "./data/NPCS.js";
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
// Axes and amenities shop inventory
const axesInventory = [
  items.smallHealthPotion,
  items.carvingKnife,
  items.dagger,
  items.axe,
  items.seaDagger,
];
// npcs options

// buttons
const btnOne = document.querySelector("#buttonOne");
const btnTwo = document.querySelector("#buttonTwo");
const btnThree = document.querySelector("#buttonThree");
const btnFour = document.querySelector("#buttonFour");
// Secondary buttons
const secondaryBtnOne = document.querySelector("#secondaryOne");
const secondaryBtnTwo = document.querySelector("#secondaryTwo");
const secondaryBtnThree = document.querySelector("#secondaryThree");
const secondaryBtnFour = document.querySelector("#secondaryFour");
const secondaryControls = document.querySelector("#secondaryControls");
const btnBackpack = document.querySelector("#inventory");
const divBackpack = document.querySelector("#btnBackpack");

// stats and such
export const header = document.querySelector("h1");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const backpackContainer = document.querySelector("#backpack-container");
const shopContainer = document.querySelector("#shop-container");
const itemContainer = document.querySelector("#item-container");

function createShopItems(items) {
  items.forEach((item) => {
    const shopDiv = document.createElement("div");
    const shopSpan = document.createElement("span");
    const shopButton = document.createElement("button");
    const itemText = item.description;
    shopDiv.classList.add("items");
    shopSpan.innerText = item.name;
    shopButton.innerText = "Buy";
    console.log(itemText);
    shopSpan.onclick = () => {
      text.innerHTML += itemText;
    };
    itemContainer.appendChild(shopDiv);
    shopDiv.appendChild(shopSpan);
    shopDiv.appendChild(shopButton);
  });
}

function handleShop(shopInventory) {
  shopContainer.classList.remove("hidden");
  backpackContainer.classList.remove("hidden");
  btnOne.classList.add("hidden");
  text.innerHTML = "You take a look at what the dwarf has to sell:<br><br>";
  createShopItems(shopInventory);

  console.dir(itemContainer);
}

function handleBackpack() {
  if (backpackContainer.className === "hidden") {
    backpackContainer.classList.remove("hidden");
  } else if (shopContainer.className !== "hidden") {
    return;
  } else {
    backpackContainer.classList.add("hidden");
  }
}

export function npcName(NPCs) {
  header.innerHTML = NPCs.name;
}
function hideTabs() {
  backpackContainer.classList.add("hidden");
  shopContainer.classList.add("hidden");
  btnOne.classList.remove("hidden");

  while (itemContainer.hasChildNodes()) {
    itemContainer.removeChild(itemContainer.firstChild);
  }
}
function handleNavigation(locationData) {
  hideTabs();
  // secondaryControls.style.display = "none";
  console.log(locationData);
  header.innerText = locationData.name;
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

// secondary buttons
export function handleSecondaryControls(secondaryOptions) {
  console.log(secondaryOptions);
  hideTabs();
  header.innerText = secondaryOptions.name;
  secondaryControls.style.display = "block";
  secondaryBtnOne.innerText = secondaryOptions.btnContents[0];
  secondaryBtnTwo.innerText = secondaryOptions.btnContents[1];
  secondaryBtnThree.innerText = secondaryOptions.btnContents[2];
  secondaryBtnFour.innerText = secondaryOptions.btnContents[3];
  secondaryBtnOne.onclick = secondaryOptions.btnFunctions[0];
  secondaryBtnTwo.onclick = secondaryOptions.btnFunctions[1];
  secondaryBtnThree.onclick = secondaryOptions.btnFunctions[2];
  secondaryBtnFour.onclick = secondaryOptions.btnFunctions[3];
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

export const examine = (examineText) => {
  console.log(examineText);
  text.innerHTML = examineText;
};
// examine code ONLY

const examineOptions = (location) => {
  console.log("Examining...");
  handleSecondaryControls(location.examineOptions);
  // text.innerHTML = location.examineText;
};

const goBack = (location) => {
  handleNavigation(location);
};

// set1 [buyItems, sellItems, giveDram, questBoard, goPlains, goPath2]

const buyItems = (e) => {
  handleShop();
  // goShopContainer();
};
const sellItems = (e) => {
  handleShop();
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

const locationData = [
  {
    // /*onLoad*/ name: "THE VILLAGE OF SONIR",

    btnContents: [
      'Enter "Axes and Amenities"',
      'Enter "The Last Dram"',
      "Set Forth",
      "Examine The Village",
    ],
    btnFunctions: [
      goStore,
      goTavern,
      setForth,
      function () {
        examineOptions(locationData[0]);
      },
    ],
    displayText:
      "<span><strong>Welcome</strong> young adventurer, to the village of Sonir. Strange creatures have appeared beyond the village gates. <strong>The King of Covehn has called for aid!</strong> All those young, and capable of travel, are to make for the kingdom at once! <br><br><strong>The Bone King</strong> has risen once more! <br> You must train hard, and venture far from home to help save the kingdom from this terrible threat.<br><br> What do you wish to do?</span>",
    examineOptions: {
      name: "THE VILLAGE OF SONIR",
      btnContents: [
        "Examine the Shop",
        "Examine the Tavern",
        "Examine the Village Gates",
        "Close",
      ],
      btnFunctions: [
        function () {
          examine(
            '<span>You examine the little shop.<br><br> It\'s really nothing more than a large, round, wooden door build into the side of a hill. An equally round, lovingly painted, red sign is displayed with pride above the little door:<br><br> <strong>"AXES AND AMENITIES:<br>ONE STOP SHOP FOR ALL YOUR<br> ADVENTURING SUPPLIES!"</strong> <br><br> What do you wish to do?</span>'
          );
        },
        function () {
          examine(
            "<span>You examine the tavern.<br><br> The village's tavern sits to your right. It's a simple structure of carved stone and wood, but your eyes quickly fall upon a well kept sign standing by the door. <br><br><strong>\"THE LAST DRAM <br>BEST ALE SOUTH OF THE VEREL FOREST!<br>JUST ONE SIP, AND ALL YOUR <br>SORROWS WILL FADE AWAY!</strong>\"<br><br> What do you wish to do?</span>"
          );
        },
        function () {
          examine(
            "<span>You examine the Village Gates.<br><br> The gates are old, as tall as a mountain troll, and made of thick, sturdy dark oak logs.<br><br> Given the residents of this village, it's no wonder their defenses are so strong. Why, it would take at least <strong>two</strong> mountain trolls to break through that gate!<br><br> What do you wish to do?</span"
          );
        },
        function () {
          goBack(locationData[1]);
        },
      ],
      displayText:
        "<span>The village of Sonir is very small, with fewer than 200 residents within it's walls. From the village square, you can determing that there is only one shop, and one tavern here. Despite this, the little village is known for two things:<br><br> Due to it's quaint location far from any warfronts, many aging warriors find thier way to Sonir to await thier final rest.<br><br> What is the other thing the village is known for, you ask? Why its their <strong>World Famous EmberBerry Ale</strong> of course!!</span>",
    },
  },
  // base set[town1, store1, bar1, path1]
  {
    /*Sonir */ name: "Sonir",
    btnContents: [
      'Enter "Axes and Amenities"',
      'Enter "The Last Dram"',
      "Set Forth",
      "Examine the Village",
    ],
    btnFunctions: [
      goStore,
      goTavern,
      setForth,
      function () {
        examineOptions(locationData[1]);
      },
    ],
    displayText:
      "<span>You have returned to the village square. <br><br>The village crier announces the King's call to arms once more. <br><br> What will you do next?</span>",
    examineOptions: {
      btnContents: [
        'Examine "Axes and Alms"',
        'Examine "The Last Dram"',
        "Examine Village Gates",
        "close",
      ],
      btnFunctions: [
        function () {
          examine(
            '<span>You examine the storefront once more.<br><br> Upon closer examination you recognize the wood of the door as Blue Mahoe. It\'s a rare wood, taken from the beautiful Blue Rosewood trees from the southern shores.<br><br> You see an addition to the sign, a little rectangular pice of scrap wood on a chain which reads:<br><br><strong>"FRESH POTIONS BREWED DAILY!"</strong><br><br> What do you wish to do? </span>'
          );
        },
        function () {
          examine(
            "<span>You examine the tavern's entrance once more.<br><br> There have been no significant changes since you last surveyed the tavern.<br><br> What do you wish to do?</span>"
          );
        },
        function () {
          examine(
            "<span>You examine the Village Gates once more. <br><br> Two fae males stand by the gate, waiting patiently for the shift in the gaurd. Though their faces remain pristine without a wrinkle, or crows foot in sight, any who have learned to read the fae's eyes would know these two to be ancient in mortal terms.<br> A sign that even fae warriors find their final days peaceful here in Sonir. <br><br> What do you wish to do?</span>"
          );
        },
        function () {
          goBack(locationData[1]);
        },
      ],
      displayText:
        "<span>Not much has changed since you last surveyed the village. a few people glance your way as they go about their days.<br><br> What do you wish to do?</span>",
    },
  },
  {
    /*axes and amenities*/ name: "Axes and Amenities",

    btnContents: [
      "Buy Items",
      "Speak to Dwarf",
      "Return to Village",
      "Examine the Store",
    ],
    btnFunctions: [
      function () {
        handleShop(axesInventory);
      },
      function () {
        handleSecondaryControls(NPCs.dwarf);
        examine(
          "\"Hahah, It's about time I got a <em><strong>curious</strong></em> adventurer through my doors! Well, come little one. What's on yer mind?\" He asks with a friendly laugh that seems to boom in the small space. <br><br> What do you wish to ask?"
        );
        npcName(NPCs.dwarf);
      },
      // make this a function like examineOptions
      goTown,
      function () {
        examineOptions(locationData[2]);
      },
    ],
    displayText:
      '<span>You duck inside to find the interior of the shop is not much larger than a halfling\'s home. There are two small doors leading off to different rooms on either side; both with large signs stating:<br><br> <strong>"NO ENTRY"</strong> <br><br>An elderly dwarven male watches you from the counter. He speaks in a low, but gentle voice: <br>"Hello, young one... Anything catch\'n yer eye?"<br><br> What will you do next?</span>',
    examineOptions: {
      name: `"Axes & Amenities"`,
      btnContents: [
        "Examine the Room",
        "examine the dwarf",
        "Examine the other rooms",
        "Close",
      ],
      btnFunctions: [
        function () {
          examine(
            "You examine the interior of the shop more closely. there are several displays along the walls, and in the center of the room.<br><br> Some are laiden with books and Tomes. Some are covered in plants of all kinds(Some of which seem to move when you're not watching them.) Some are filled with delicious looking fruits and root vegetables. There's a rack behind the counter where two ducks, a very plump pheasant, and some creature you can't quite identiy hang, waiting for purchase.<br><br> There are two racks near the counter. One is covered in axes, swords, daggers, and you even spot a worn spear! The other displays three full sets of leather armour, one seemingly crafted to fit a halfling, one a bit larger, fit for a dwarf, and the other tall and lean, with an elf's signet embossed at the cuffs.<br><br> What do you wish to do?"
          );
        },
        function () {
          examine(
            "You examine the dwarf. The first thing you notice is that he is old. <em><strong>Really</strong></em> old. <br><br>His once red hair is now mostly grey, but a few strands of fire red still fight through tangled mane. His beard grows nearly to the ground, showing this dwarf has never fallen in battle, and tied in multiple grey-and-red braids.<br><br>There are three long, jagged scars running from his left temple, down to his chin, cutting across his left eye, nose, and lip.<br>The eye in question, has been replaced by a stunning golden device that seems to track your movements as if it were truly watching you.<br><br>The dwarf wears a simple green tunic, revealing many similarly grisly scars along his arms and legs. It is clear he has seen many battles in his earlier days.<br><br> What do you wish to do?"
          );
        },
        function () {
          examine(
            "You examine the two small doors. The first is just a simple dark oak door. Upon closer inspection you notice a second sign carved into the door itself which reads: \"HOME SWEET HOME\"<br> <br> The other door is slightly cracked open. You can hear the roar of a furnace, as well as the clangs of someone working with the metals within.<br><br> A particulary loud 'CLANG' rings out, followed by a 'THUMP' and a string of curses that could make even a troll blush!!<br><br> \"Dont mind Nettah,\" The elderly dwarf remarks, drawing your attention away as he pushes the door shut with his boot.<br><br>\"She's the best smith I've ever seen! Even if she does curse worse than a sun-dazed goblin on a two-week bender...\" He adds the last bit under his breath, then turns back to his wares."
          );
        },
        function () {
          goBack(locationData[2]);
        },
      ],
      displayText:
        "<span>The dwarf raises an eyebrow as you examine his establishment. <br><br> What do you wish to do?</span>",
    },
  },
  {
    /*The Last Dram*/ name: "The Last Dram",
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
        examineOptions(locationData[3]);
      },
    ],
    displayText:
      "<span>You enter the small tavern. There are a few other travelers at the tables. A halfling male with what looks to be a long healed burn scar across the right side of his face nods your way in a silent greeting.<br><br> What will you do?</span>",
    examineOptions: {
      btnContents: [
        "Examine your surroundings",
        "Examine the barkeep",
        "Speak to the Barkeep",
        "Close",
      ],
      btnFunctions: [
        function () {
          examine(
            "You examine your surroundings more closely.<br><br> Behind the bar are several massive kegs, each labeled with a different type of ale, whiskey, or rum.<br> Above the bar, several trophy heads look back down at you with taxidermied eyes. <br><br>Of note, you see: a wolf, a barrel rat, it's head nearly the size of your own, and a plains cat, only slightly larger than the rat.<br><br> What do you wish to do?"
          );
        },
        function () {
          examine(
            'You examine the barkeep more closely. Upon further examination, you realize the little male is standing atop not one, but <em><strong>Three</strong></em> crates! He notices your wide eye\'d expression and growls.<br><br><strong>"My eyes are up here, pal!!"</strong><br> He huffs, before pointing to the menu board. <br>"Either buy sum\'tin or get out!"<br><br>What do you wish to do?'
          );
        },
        function () {
          examine(
            'The barkeep lets out another annoyed growl, then lets out an exasperated sigh.<br><br> "OH FOR THE LUV OF... CAN\'T YOU SEE I\'M BUSY HERE??"<br> The little halfling lets out a frustrated growl while filling another dram and sending it down the bar to another patron. With the order filled, he lets out another long, suffering sigh, then turns to face you.<br><br> "Fine... fine..." He grumbles.<br> "What? What do you want to know?"'
          );
        },
        function () {
          goBack(locationData[3]);
        },
      ],
      displayText:
        "<span>You examine the tavern.<br><br> The space is much larger than you expected.<br> Several patrons sit at the round tables throughout, and near the back, a hooded figure seems to be asleep in one of the booths adorning the walls.<br><br> What do you wish to do?</span>",
    },
  },
  {
    /*pathOne */ name: "RoadOne",
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
        examineOptions(locationData[4]);
      },
    ],
    displayText:
      "<span>(<strong>Plains Recommended level: 1 )</strong><br>You venture past the village gates to find gentle field of green ahead; the perfect start for our young adventurer! <br>A well kept path cuts through the plains, leading to a crossroads up ahead. So long as you keep to the path, you will be safe, but fortune favors the bold...<br><br> What will you do next?</span>",
    examineOptions: {
      btnContents: [
        "Examine the Plains",
        "Examine the Road Ahead",
        "Examine the EmberBerry patch",
        "Close",
      ],
      btnFunctions: [
        function () {
          examine(
            "<span>You examine the Plains. The sea of green is broken periodically by copses of trees. <br><br>To the east you can see an 🏡old farmhouse.<br> To the west, the 🍓berry patch is just visible in the distance.<br><br>Behind you lies the village, and in the distance, you can just make out the scarecrow that marks the crossroads to the south.<br><br> What do you wish to do?</span>"
          );
        },
        function () {
          examine(
            "<span>You examine the road ahead.<br><br>You can see what looks like a scarecrow far to the south, and know it to be the crossroads that leads away from the village. <br>The road is well kept, and even now you can see the village guard on their patrol. So long as you stick to the road, you will be safe.<br><br> What do you wish to do?</span>"
          );
        },
        function () {
          examine(
            "You examine the berry patch.<br><br> There is not much that you can discern from this distance. The berry patch lies far to the west.<br><br> What do you wish to do?"
          );
        },
        function () {
          goBack(locationData[4]);
        },
      ],
      displayText:
        "<span>The plains seem to stretch on for miles ahead of you.<br><br> The lush field of green is tall enough to reach a halfling's chin. Every now and then, you can see the grass rustle, and you're fairly certain that was a tail breaching the grass up ahead.<br><br> What do you wish to do?</span>",
    },
  },
  /*all examine function options*/

  // setOne [storeOptions, barOptions, ]
];

addEventListener("load", () => {
  handleNavigation(locationData[0]);
  btnBackpack.onclick = handleBackpack;
});
