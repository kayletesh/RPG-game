import {
  examine,
  handleSecondaryControls,
  handleNavigation,
  handleShop,
  axesInventory,
  playerInventory,
} from "../script.js";

import { NPCs } from "./NPCS.js";
import { items } from "./items.js";

const goTown = () => {
  console.log("Returning to the town of Sonir");
  handleNavigation(locationData.sonirReturn);
};

const goStore = (e) => {
  console.log("Entering Store");
  handleNavigation(locationData.axesAndAmenities);
};

const goTavern = (e) => {
  console.log("Entering Tavern");
  handleNavigation(locationData.theLastDram);
};

const setForth = (e) => {
  console.log("Setting out for an Adventure!!");
  handleNavigation(locationData.roadOne);
};

const goQuestBoard = (e) => {
  examine(
    "You walk over to the quest board to find it completely empty.<br><br> \"Sorry lad, A group of adventurers came through a couple days back and took every job on offer!<br> Check back in a few days. I'm sure someone'll have some work for ya.\""
  );
  console.log("Checking for quests...");
};

const goPlains = (e) => {
  console.log("Going to Plains");
};

const goPathTwo = (e) => {
  console.log("Going to Path Two!");
};

const goAlchemy = (e) => {
  console.log("going to alc shop");
};

export const locationData = {
  sonirStart: {
    name: "Village of Sonir",
    displayText:
      "<span><strong>Welcome</strong> young adventurer, to the village of Sonir. Strange creatures have appeared beyond the village gates. <strong>The King of Covehn has called for aid!</strong> All those young, and capable of travel, are to make for the kingdom at once! <br><br><strong>The Bone King</strong> has risen once more! <br> You must train hard, and venture far from home to help save the kingdom from this terrible threat.<br><br> What do you wish to do?</span>",

    buttons: [
      {
        text: 'Enter "Axes and Amenities"',
        function: function () {
          handleNavigation(locationData.axesAndAmenities);
        },
      },
      {
        text: 'Enter "The Last Dram"',
        function: function () {
          handleNavigation(locationData.theLastDram);
        },
      },
      {
        text: 'Enter "Tonics and Tomes"',
        function: goAlchemy,
      },
      {
        text: "Set Forth",
        function: function () {
          handleNavigation(locationData.roadOne);
        },
      },
    ],

    btnExamine: [
      {
        function: function () {
          handleSecondaryControls(locationData.sonirStart.secondaryButtons);
          examine(
            "<span>The village of Sonir is very small, with fewer than 200 residents within it's walls. From the village square, you can determing that there are only two shops, and but a single tavern here. Despite this, the little village is known for two things:<br><br> Due to it's quaint location far from any warfronts, many aging warriors find thier way to Sonir to await thier final rest.<br><br> What is the other thing the village is known for, you ask? Why its their <strong>World Famous EmberBerry Ale</strong> of course!!</span>"
          );
        },
      },
    ],
    secondaryButtons: [
      {
        text: "Examine the Smith's",
        function: function () {
          examine(
            '<span>You examine the little shop.<br><br> It\'s really nothing more than a large, round, wooden door build into the side of a hill. An equally round, lovingly painted, red sign is displayed with pride above the little door:<br><br> <strong>"AXES AND AMENITIES:<br>ONE STOP SHOP FOR ALL YOUR<br> ADVENTURING SUPPLIES!"</strong> <br><br> What do you wish to do?</span>'
          );
        },
      },
      {
        text: "Examine the Tavern",
        function: function () {
          examine(
            "<span>You examine the tavern.<br><br> The village's tavern sits to your right. It's a simple structure of carved stone and wood, but your eyes quickly fall upon a well kept sign standing by the door. <br><br><strong>\"THE LAST DRAM <br>BEST ALE SOUTH OF THE VEREL FOREST!<br>JUST ONE SIP, AND ALL YOUR <br>SORROWS WILL FADE AWAY!</strong>\"<br><br> What do you wish to do?</span>"
          );
        },
      },
      {
        text: "Examine the alchemy shop",
        function: function () {
          examine("<span>You examine the alchemy shop.<br><br>  ");
        },
      },
      {
        text: "Examine the Square",
        function: function () {
          examine(
            "<span>You examine the village square. Sonir is a rather small village, providing a home to many a retired adventurer since it's establishment only 223 years prior. There is a beautiful, hand carved fountain at its center, the sculpture depicting the five adventurers who founded the town. among the carvings you see:<br><br> A dwarf male, warhammer proudly balanced upon his shoulder; An male halfling, younger than the others, carrying a barrel nearly his own height on his back; An elf female, several small daggers carved around her waist; A human male, shortsword in one hand, a sheild in his other; and the final carving, likely the most peculiar...<br> A female Owlcat, standing on her hind paws, wings tucked behind her. She holds a staff in one han-I mean paw, and in the other, a tome. <br><br> You've heard stories of the legendary owlcat who became not only a scholar, but one of the most successful wizards of her time! </span>"
          );
        },
      },
    ],
  },
  sonirReturn: {
    name: "Village of Sonir",
    displayText:
      "<span>You have returned to the village square. <br><br>The village crier announces the King's call to arms once more. <br><br> What will you do next?</span>",

    buttons: [
      {
        text: 'Enter "Axes and Amenities"',
        function: function () {
          handleNavigation(locationData.axesAndAmenities);
        },
      },
      {
        text: 'Enter "The Last Dram"',
        function: function () {
          handleNavigation(locationData.theLastDram);
        },
      },
      { text: 'Enter "Tonics and Tomes"', function: goAlchemy },
      {
        text: "Set Forth",
        function: function () {
          handleNavigation(locationData.roadOne);
        },
      },
    ],

    btnExamine: [
      {
        function: function () {
          handleSecondaryControls(locationData.sonirReturn.secondaryButtons);
          examine(
            "<span>The village of Sonir is very small, with fewer than 200 residents within it's walls. From the village square, you can determing that there is only one shop, and one tavern here. Despite this, the little village is known for two things:<br><br> Due to it's quaint location far from any warfronts, many aging warriors find thier way to Sonir to await thier final rest.<br><br> What is the other thing the village is known for, you ask? Why its their <strong>World Famous EmberBerry Ale</strong> of course!!</span>"
          );
        },
      },
    ],
    secondaryButtons: [
      {
        text: "Examine the BlackSmith's",
        function: function () {
          examine(
            '<span>You examine the storefront.<br><br> Upon closer examination you recognize the wood of the door as Blue Mahoe. It\'s a rare wood, taken from the beautiful Blue Rosewood trees from the southern shores.<br><br> You see an addition to the door, a little rectangular pice of scrap wood on a chain which reads:<br><br><strong>"FRESH POTIONS BREWED DAILY!"</strong><br><br> What do you wish to do? </span>'
          );
        },
      },
      {
        text: "Examine the Tavern",
        function: function () {
          examine(
            "<span>You examine the tavern.<br><br> The village's tavern sits to your right. It's a simple structure of carved stone and wood, but your eyes quickly fall upon a well kept sign standing by the door. <br><br><strong>\"THE LAST DRAM <br>BEST ALE SOUTH OF THE VEREL FOREST!<br>JUST ONE SIP, AND ALL YOUR <br>SORROWS WILL FADE AWAY!</strong>\"<br><br> What do you wish to do?</span>"
          );
        },
      },
      {
        text: "Examine the Alchemist's shop",
        function: function () {
          examine(
            "<span>You examine the Village Gates. <br><br> Two fae males stand by the gate, waiting patiently for the shift in the gaurd. Though their faces remain pristine without a wrinkle or crows foot in sight, any who have learned to read the fae's eyes would know these two to be ancient in mortal terms.<br> A sign that even fae warriors find their final days peaceful here in Sonir. <br><br> What do you wish to do?</span>"
          );
        },
      },
      {
        text: "Examine the fountain",
        function: function () {
          examine(
            "You examine the fountain in the village square more closely.<br><br>Crystal clear water pours from five spouts into the basin, providing fresh drinking water for the entire village. The sculptures of the five founders peer down at you."
          );
        },
      },
    ],
  },
  axesAndAmenities: {
    name: "Axes and Amenities",
    displayText:
      '<span>You duck inside to find the interior of the shop is not much larger than a halfling\'s home. There are two small doors leading off to different rooms on either side; both with large signs stating:<br><br> <strong>"NO ENTRY"</strong> <br><br>An elderly dwarven male watches you from the counter. He speaks in a low, but gentle voice: <br>"Hello, young one... Anything catch\'n yer eye?"<br><br> What will you do next?</span>',
    buttons: [
      {
        text: "Check the store's stock",
        function: function () {
          handleShop(axesInventory);
        },
      },
      {
        text: "Speak to the Dwarf",
        function: function () {
          handleSecondaryControls(NPCs.gallahan.buttons);
          examine(
            '"Hahah, It\'s about time I got a <em><strong>curious</strong></em> adventurer through my doors!<br> The name\'s Gallahan, but mah friends call me "The Hammer"!<br><br> Come on then, lad. What\'s on yer mind?" He asks with a friendly laugh that seems to boom in the small space. <br><br> What do you wish to ask?'
          );
        },
      },

      {
        text: "Peak Behind the Door",
        function: function () {
          examine(
            '"OI!! EMPLOYEH\'S ONLAE!!!" The female dwarf, Nettah, shouts at you from within the forge. You hear a scraping sound, about a second before a blur of motion within the forge catches your attention.<br><br> "THUMP!!" You gasp, and the shopkeep lets out a string of curses of his own as an axe blade buries itself into the door, an inch from the crack you had been peaking through. <br><br> "NETTAH!!!" The elderly dwarf bellows, "YOU CAN\'T JUST GO AROUND THROWIN AXES AT OUR CUSTOMERS!!!" <br><br> "Yer Jokin!! He coulda been a peepin tom! Tryin ta steal all yer secrets granda! What then?" <br><br> The two continue to argue for a few moments, before Gallahan finally shuts the door with a sigh. <br> "Sorry lad, mah grandaughter can be a wee bit protective of our craft. Best not be tryin to disturb her work."'
          );
        },
      },
      {
        text: "Return to Village",
        function: function () {
          handleNavigation(locationData.sonirReturn);
        },
      },
    ],

    btnExamine: [
      {
        function: function () {
          handleSecondaryControls(
            locationData.axesAndAmenities.secondaryButtons
          );
          examine(
            "<span>The dwarf raises an eyebrow as you examine his establishment. He waits patiently while you look around. <br><br> What do you wish to do?</span>"
          );
        },
      },
    ],
    secondaryButtons: [
      {
        text: "Examine the Room",
        function: function () {
          examine(
            "You examine the interior of the shop more closely.<br><br> There are several displays along the walls, and in the center of the room.<br><br> Some are filled to the brim with hand crafted toys and games for the village's youngest denizens. Some are filled with delicious looking fruits and root vegetables. <br>There's a rack behind the counter where two ducks, a very plump pheasant, and some creature you can't quite identiy hang, waiting for purchase.<br><br> There are two racks near the counter. One is covered in axes, swords, daggers, and you even spot a worn spear! <br>The other displays three full sets of leather armour; one seemingly crafted to fit a halfling, one a bit larger, and quite a bit wider, fit for a dwarf. The third is tall and lean, with an elf's signet embossed at the cuffs.<br><br> What do you wish to do?"
          );
        },
      },
      {
        text: "Examine the Dwarf",
        function: function () {
          examine(
            "You examine the dwarf. The first thing you notice is that he is old. <em><strong>Really</strong></em> old. <br><br>His once red hair is now mostly grey, but a few strands of fire still fight through tangled mane. His beard grows nearly to the ground, showing this dwarf has never fallen in battle, and is tied in multiple grey-and-red braids.<br><br>There are three long, jagged scars running from his left temple, down to his chin, cutting across his left eye, nose, and lip.<br>The eye in question, has been replaced by a stunning golden device that seems to track your movements as if it were truly watching you.<br><br>The dwarf wears a simple green tunic, revealing many similarly grisly scars along his arms and legs. It is clear he has seen many battles in his earlier days.<br><br> What do you wish to do?"
          );
        },
      },
      {
        text: "Examine the Other Rooms",
        function: function () {
          examine(
            "You examine the two small doors. The first is just a simple dark oak door. Upon closer inspection you notice a second sign carved into the door itself which reads: \"HOME SWEET HOME\"<br> <br> The other door is slightly cracked open. You can hear the roar of a furnace, as well as the clangs of someone working with the metals within.<br><br> A particulary loud 'CLANG' rings out, followed by a 'THUMP' and a string of curses that could make even a troll blush!!<br><br> \"Dont mind Nettah,\" The elderly dwarf remarks, drawing your attention away as he pushes the door shut with his boot.<br><br>\"She's the best smith I've ever seen! Even if she does curse worse than a sun-dazed goblin on a two-week bender...\" He adds the last bit under his breath, then turns back to his wares."
          );
        },
      },
      {
        text: "Examine the Counter",
        function: function () {
          examine(
            "You examine the counter. Many potions, herbs, and handcrafted knives lay within the glass case. Beyond the counter, on the wall behind the dwarven male, a warhammer the size of a small orc is displayed with great care on the wall. You've seen this weapon before, depicted in the sculpture at the village center. Your eyes widen as you realize you stand before one of the founders of Sonir, happily enjoying his retirement as nothing more than a humble shopkeeper. The dwarf catches the look in your eyes and chuckles softly to himself. He gives you a wink, then gesture's back to the counter. 'See anyt'ing ye like, lad?'"
          );
        },
      },
    ],
  },

  theLastDram: {
    name: "The Last Dram",
    displayText:
      "<span>You enter the small tavern. There are a few other travelers at the tables. A halfling male with what looks to be a long healed burn scar across the right side of his face nods your way in a silent greeting.<br><br> What will you do?</span>",

    buttons: [
      {
        text: "Buy a Dram of Ale",
        function: function () {
          if (playerInventory.includes(items.EmberBerryAle)) {
            text.innerHTML = items.EmberBerryAle.noMore;
            return;
          }
          playerInventory.push(items.EmberBerryAle);
          text.innerHTML =
            items.EmberBerryAle.buyText + items.EmberBerryAle.description;
        },
      },
      {
        text: "Check the Quest Board",
        function: goQuestBoard,
      },
      {
        text: "Sit Down at a Table",
        function: function () {
          examine("<span>You take a seat in one of the empty booths </span>");
        },
      },
      {
        text: "Return to Village",
        function: goTown,
      },
    ],
    btnExamine: [
      {
        function: function () {
          handleSecondaryControls(locationData.theLastDram.secondaryButtons);
          examine(
            "<span>You examine the tavern.<br><br> The space is much larger than you expected.<br> Several patrons sit at the round tables throughout, and near the back, a hooded figure seems to be asleep in one of the booths adorning the walls.<br><br> What do you wish to do?</span>"
          );
        },
      },
    ],

    secondaryButtons: [
      {
        text: "Examine the Bar",
        function: function () {
          examine("You examine the bar");
        },
      },
      {
        text: "Examine the other patrons",
        function: function () {
          examine("You examine the patrons");
        },
      },
      {
        text: "Examine the Barkeep",
        function: function () {
          examine(
            'You examine the barkeep more closely. Upon further examination, you realize the little male is standing atop not one, but <em><strong>Three</strong></em> crates! He notices your wide eye\'d expression and growls.<br><br><strong>"My eyes are up here, pal!!"</strong><br> He huffs, before pointing to the menu board. <br>"Either buy sum\'tin or get out!"<br><br>What do you wish to do?'
          );
        },
      },
      {
        text: "Speak to the Barkeep",
        function: function () {
          handleSecondaryControls(NPCs.lionel.buttons);
          examine(
            'The barkeep growls, then lets out an exasperated sigh.<br><br> "OH FOR THE LUV OF... CAN\'T YOU SEE I\'M BUSY HERE??"<br><br> As the halfling speaks, a dwarf male looking not much older than you raps a hand on the bar. "OI, THISTLEFOOT! ANOTHER DRAM DOWN HERE!!"<br><br> The little halfling lets out another frustrated growl while filling a dram, then sends it down to the rowdy dwarf. With the order fulfilled, he lets out another long, suffering sigh, then turns to face you.<br><br> "Fine... fine..." He grumbles.<br> "What? What do you want to know?"'
          );
        },
      },
    ],
  },
  roadOne: {
    name: "Road One",
    displayText:
      "<span>(<strong>Plains Recommended level: 1 )</strong><br>You venture past the village gates to find gentle field of green ahead; the perfect start for our young adventurer! <br>A well kept path cuts through the plains, leading to a crossroads up ahead. So long as you keep to the path, you will be safe, but fortune favors the bold...<br><br> What will you do next?</span>",
    buttons: [
      { text: "Explore the Plains", function: goPlains },
      { text: "Venture Further From Sonir", function: goPathTwo },
      {
        text: "Speak to the Guards",
        function: function () {
          console.log("speaking with guards");
        },
      },
      { text: "Return to Sonir", function: goTown },
    ],
    btnExamine: [
      {
        function: function () {
          handleSecondaryControls(locationData.roadOne.secondaryButtons);
          examine(
            "<span>The plains seem to stretch on for miles ahead of you.<br><br> The lush field of green is tall enough to reach a halfling's chin. Every now and then, you can see the grass rustle, and you're fairly certain that was a tail breaching the grass up ahead.<br><br> What do you wish to do?</span>"
          );
        },
      },
    ],
    secondaryButtons: [
      {
        text: "Examine the Plains",
        function: function () {
          examine(
            "<span>You examine the Plains. The sea of green is broken periodically by copses of trees. <br><br>To the east you can see an 🏡old farmhouse.<br> To the west, the 🍓berry patch is just visible in the distance.<br><br>Behind you lies the village, and in the distance, you can just make out the scarecrow that marks the crossroads to the south.<br><br> What do you wish to do?</span>"
          );
        },
      },
      {
        text: "Examine the Road Ahead",
        function: function () {
          examine(
            "<span>You examine the road ahead.<br><br>You can see what looks like a scarecrow far to the south, and know it to be the crossroads that leads away from the village. <br>The road is well kept, and even now you can see the village guard on their patrol. So long as you stick to the road, you will be safe.<br><br> What do you wish to do?</span>"
          );
        },
      },
      {
        text: "Examine the EmberBerry Patch",
        function: function () {
          examine(
            "You examine the berry patch.<br><br> There is not much that you can discern from this distance. The berry patch lies far to the west.<br><br> What do you wish to do?"
          );
        },
      },
      {
        text: "Examine the ______",
        function: function () {
          examine("You examine the ______");
        },
      },
    ],
  },
};
