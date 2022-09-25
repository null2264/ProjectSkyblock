// priority: 0

onEvent('recipes', (event) => {
    event.replaceInput({}, "minecraft:chest", "#c:wooden_chests");
    event.replaceInput({}, "fabricaeexnihilo:stone_pebble", "botania:pebble");
    event.replaceOutput({}, "fabricaeexnihilo:stone_pebble", "botania:pebble");
    event.replaceOutput({}, "minecraft:chest", "expandedstorage:wood_chest");
});
