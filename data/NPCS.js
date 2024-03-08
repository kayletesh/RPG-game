import { examine, handleSecondaryControls } from "../script.js";

export const NPCs = {
  gallahan: {
    name: "Gallahan",
    buttons: [
      {
        text: 'Ask why "The Hammer"',
        function: function () {
          examine("The dwarf tells you about his nickname.");
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
          handleSecondaryControls(NPCs.gallahan.more.buttons);
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
  lionel: {
    name: "Thistlefoot",
    buttons: [
      {
        text: "Ask question one",
        function: function () {
          examine("Answer question one.");
        },
      },
      {
        text: "Ask question two",
        function: function () {
          examine("answer question two");
        },
      },
      {
        text: "ask question three",
        function: function () {
          examine("answer question three");
        },
      },
      {
        text: "ask question four",
        function: function () {
          examine("answer question four");
        },
      },
    ],
  },
  sophia: {
    name: "Sophia Owlsbrook",
    buttons: [
      {
        text: "Ask question one",
        function: function () {
          examine("Answer question one");
        },
      },
      {
        text: "Ask question two",
        function: function () {
          examine("Answer question two");
        },
      },
      {
        text: "Ask question three",
        function: function () {
          examine("Answer question three");
        },
      },
      {
        text: "Ask question four",
        function: function () {
          examine("Answer question four");
        },
      },
    ],
  },
};
