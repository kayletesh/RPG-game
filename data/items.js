export const items = {
  stick: {
    name: "stick",
    buyPrice: 0,
    sellPrice: 0,
    damage: 1,
    description: "Just a boring old stick. It's not even very pointy!",
    sellText:
      "Who would want that worthless bit o' kindling? Yer better off usin' in fer yer fire!",
  },
  smallHealthPotion: {
    name: "small health pot",
    buyPrice: 10,
    healing: 10,
    description:
      "A small health potion. The red liquid bubbles like sparkling water. It smells like raspberries!",
    sellText: "No refunds on remedies of any kind...",
  },

  carvingKnife: {
    name: "Carving Knife",
    buyPrice: 5,
    sellPrice: 2,
    damage: 2,
    description:
      "A simple woodcutter's knife. It's a little dull... Better than a stick I guess...",
    sellText:
      "Well, it's a bit dull... but I reckon I can sharpen it up. Might make a decent butter knife at least...",
  },
  dagger: {
    name: "Dagger",
    buyPrice: 10,
    sellPrice: 5,
    damage: 5,
    description:
      "Just a simple dagger. The blade is sharp, and well cared for.",
    sellText: "I suppose I can part with a few coins...",
  },

  axe: {
    name: "Axe",
    buyPrice: 30,
    sellPrice: 10,
    damage: 10,
    description:
      "A large handaxe crafted from a Birch tree, treated leather, and stone.",
    sellText:
      "Eh, why not? Axes are always breakin', I could use another just in case...",
  },
  seaDagger: {
    name: "Wayfarer's Dagger",
    buyPrice: 50,
    sellPrice: 35,
    damage: 15,
    description:
      "A masterfully crafted blade aquired from a wayfarer on his way inland. The blade is dwarven steel, and will not rust no matter how the salt air bites at her. The hilt is wrapped with care in sea-salt treated leather. You can see a strip of blue-green running from the hilt to the tip of the blade. The dagger bares a simple enchantment, one meant to help it's weilder find thier way to the surface should the sea try to claim them for her own.",

    buyText:
      '"Oh, this? I won it off a wayfarer some years ago... I suppose I could be convinced to part with it. Let\'s say...50 gold?"',
    sellText:
      "\"Yer really going to sell such a fine blade? You know that's enchanted dwarven steel, right? Well, alright then.. I'll give ya 35 gold for it.\"",
  },

  // Last dram inventory

  EmberBerryAle: {
    name: "Dram of Ale",
    buyPrice: 15,
    healing: 15,
    description:
      "\"<br><br>A dram of Sonir's world famous, handcrafted, homebrewed, EmberBerry Ale!<br><br> Travelers as far as the western shores tell tales of this enchanting brew, and even the King himself once paid ten thousand gold pieces just to have a keg of the stuff brought to him in the royal city!",
    buyText:
      "\"One dram of EmberBerry Ale coming right up! You're in for a treat lad! Sonir's the only place you'll ever get to taste this stuff!",
    noMore:
      "\"You've already got enough lad! Come back when you've done with that one!\"",
  },
  // Tonics and Tomes Inventory
  healthTonic: {
    name: "Sophia's Health Tonic",
    buyPrice: 15,
    healing: 20,
    description:
      "Sophia's handcrafted health tonics. The little Owlcat spent nearly a century perfecting this brew. It smells of straberries and mint!",
  },
  manaTonic: {
    name: "Small Mana Tonic",
    buyPrice: 30,
    manaRestore: 20,
    description:
      "A small tonic used to replenish one's mana: The source of all magic. They're expensive, but worth it for any caster!",
  },
  scrollOfEmbers: {
    name: "Scroll of burning embers",
    buyPrice: 50,
    magicType: "fire",
    magicDamage: 20,
    manaCost: 10,
    description:
      'This scroll will allow the user a one time cast of "Ember Blast", which will send out sparks of embers, inflicting burn damage on an enemy.',
  },
};
