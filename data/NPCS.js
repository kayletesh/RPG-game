import { examine, handleSecondaryControls, npcName } from "../script.js";

export const NPCs = {
  dwarf: {
    name: "Gallahan",
    btnContents: [
      "Ask the dwarf his name",
      "Ask why he came to Sonir",
      "Ask about the town",
      "More Options",
    ],

    btnFunctions: [
      function () {
        //dwarf's name
        examine("The dwarf tells you his name.");
        npcName(NPCs.dwarf);
        // header.innerText = "Gallahan";
      },
      function () {
        //why he came to Sonir
        examine("The dwarf tells you why he came to Sonir");
        npcName(NPCs.dwarf);
      },
      function () {
        //about the town
        examine("The dwarf tells you about the town");
        npcName(NPCs.dwarf);
      },
      function () {
        //more options
        handleSecondaryControls(NPCs.dwarf.more);
        examine("Goblin got yer tongue lad? Out with it!");
        npcName(NPCs.dwarf);
      },
    ],
    more: {
      btnContents: [
        "Ask about the Bone King",
        "Ask about the plains",
        "Ask about his past",
        "Ask about his remedies",
      ],
      btnFunctions: [
        function () {
          //about the Bone King
          examine("The dwarf tells you about the Bone King");
          npcName(NPCs.dwarf);
        },
        function () {
          //about the plains
          examine("The dwarf tells you about the plains");
          npcName(NPCs.dwarf);
        },
        function () {
          //about his past
          examine("The dwarf tells you an adventure from his past");
          npcName(NPCs.dwarf);
        },
        function () {
          examine("The dwarf tells you about his herb craft.");
          npcName(NPCs.dwarf);
        },
      ],
    },
  },
};
