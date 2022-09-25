// priority: 0

onEvent('recipes', (event) => {
    event.replaceInput({}, "minecraft:chest", "#c:wooden_chests");
    event.replaceOutput({}, "minecraft:chest", "expandedstorage:wood_chest");
});
