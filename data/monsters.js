// wolf, barrel rat, slime, plains cat,
// start by listing all plains monsters. 
// add location data for specific locations.
// add stats and description.

// chance locations to pull in locationData once built

export const MONSTERS = {
    raccoon: {
        name: "Raccoon",
        location: [{
            name: "Fields",
            chance: 20,
        }, {
            name: "Farmhouse",
            chance: 15,
        }, {
            name: "BerryPatch",
            chance: 15,
        }],
        level: 1,
        health: 10,
        conditionOne: "no condition",

    },
    crow: {
        name: "Crow",
        location: [{
            name: "Fields",
            chance: 35,
        }, {
            name: "Farmhouse",
            chance: 20,
        }, {
            name: "BerryPatch",
            chance: 20,
        }],
        level: 1,
        health: 15,
    },
    barrel_rat: {
        name: "Barrel Rat",
        location: [{
            name: "Fields",
            chance: 35,
        },
        {
            name: "Farmhouse",
            chance: 35
        }, {
            name: "BerryPatch",
            chance: 20,
        },],
        level: 2,
        health: 20,

    },
    ferrell_fox: {
        name: "Feral Fox",
        location: [{
            name: "Fields",
            chance: 20,
        }, {
            name: "BerryPatch",
            chance: 20,
        }],
        level: 2,
        health: 25,
    },
    juvenile_Ferrell_fox: {
        name: "Juvenile Feral Fox",
        location: [{
            name: "Fields",
            chance: 3,

        }, {
            name: "BerryPatch",
            chance: 3,
        }],
        level: 2,
        health: 25,
    },
    plains_cat: {
        name: "Plains Cat",
        location: [{
            name: "Fields",
            chance: 15
        }],
        level: 3,
        health: 30,
    },
    juvenile_plains_cat: {
        name: "Juvenile Plains Cat",
        location: [{
            name: "Fields",
            chance: 3,
        }],
        level: 3,
        health: 30,
    },
    murder_of_crows: {
        name: "Murder of Crows",
        location: [{
            name: "Fields",
            chance: 3
        }, {
            name: "BerryPatch",
            chance: 3
        }],
        level: 5,
        health: 50,
    },
    scarecrow: {
        name: "Possessed Scarcrow",
        location: [{
            name: "Fields",
            chance: 50,
        }],
        level: 5,
        health: 75,
    },
    rabbit: {
        name: "rabbit",
        location: [{
            name: "BerryPatch",
            chance: 25,
        }],
        level: 1,
        health: 10,
    },
    frantic_bee: {
        name: "Frantic Bee",
        location: [{
            name: "BerryPatch",
            chance: 20,
        }],
        level: 1,
        health: 5,
    },
    giant_wasp: {
        name: "Giant Wasp",
        location: [{
            name: "BerryPatch",
            chance: 30
        }],
        level: 2,
        health: 25,
    },
    were_rabbit: {
        name: "WereRabbit",
        location: [{
            name: "Fields",
            chance: 5,
        }, {
            name: "BerryPatch",
            chance: 15,
        }, {
            name: "Farmhouse",
            chance: 5
        }],
        level: 3,
        health: 30
    },
    wild_dog: {
        name: "Wild Dog",
        location: [{
            name: "BerryPatch",
            chance: 20,
        }, {
            name: "Farmhouse",
            chance: 25
        }],
        level: 3,
        health: 30,
    },
    giant_barrel_rat: {
        name: "Giant Barrel Rat",
        location: [{
            name: "Farmhouse",
            chance: 35,
        }
        ],
        level: 4,
        health: 35,
    },
    giant_wasp_queen: {
        name: "Giant Wasp Queen",
        location: [{
            name: "BerryPatch",
            chance: 50
        }],
        level: 5,
        health: 75,
    },
    // add bee queen to NPCs
    brown_bear: {
        name: "Brown Bear",
        location: [{
            name: "BerryPatch",
            chance: 15
        }],
        level: 4,
        health: 50,
    },
    juvenile_brown_bear: {
        Name: "Juvenile Brown Bear",
        location: [{
            name: "BerryPatch",
            chance: 3
        }],
        level: 4,
        health: 50,
    }
};