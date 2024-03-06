import { examine, handleSecondaryControls } from "../script.js";

export const NPCs = {
  dwarf: {
    name: "Gallahan",
    buttons: [
      {
        text: "Ask the dwarf his name",
        function: function () {
          examine("The dwarf tells you his name.");
        },
      },
      {
        text: "Ask why he came to Sonir",
        function: function () {
          examine("The dwarf tells you why he came to Sonir");
        },
      },
      {
        text: "Ask about the town",
        function: function () {
          examine("The dwarf tells you about the town");
        },
      },
      {
        text: "More Options",
        function: function () {
          //more options
          handleSecondaryControls(NPCs.dwarf.more.buttons);
          examine("Goblin got yer tongue lad? Out with it!");
        },
      },
    ],

    more: {
      buttons: [
        {
          text: "Ask about the Bone King",
          function: function () {
            //about the Bone King
            examine("The dwarf tells you about the Bone King");
          },
        },
        {
          text: "Ask about the plains",
          function: function () {
            //about the plains
            examine("The dwarf tells you about the plains");
          },
        },
        {
          text: "Ask about his past",
          function: function () {
            //about his past
            examine("The dwarf tells you an adventure from his past");
          },
        },
        {
          text: "Ask about his remedies",
          function: function () {
            examine("The dwarf tells you about his herb craft.");
          },
        },
      ],
    },
  },
};
