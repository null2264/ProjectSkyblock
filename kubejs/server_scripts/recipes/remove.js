// priority: 1000

onEvent('recipes', (event) => {
    const removals = [
        {
            output: /kibe:\w+_generator_mk./
        },
        {
            output: "minecraft:cobblestone",
            type: "minecraft:crafting_shapeless"
        }
    ];

    removals.forEach((removal) => {
        event.remove(removal);
    });
});
