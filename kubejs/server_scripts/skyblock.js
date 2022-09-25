onEvent('block.right_click', event => {
    const { block, hand, item, world, player } = event
    if (hand.name() != "MAIN_HAND") return

    const validBlocks = [
        "minecraft:grass_block",
        "minecraft:dirt"
    ]

    if (item == "empty" && player.isCrouching()) {
        if (!validBlocks.includes(block.id)) return

        const entity = block.createEntity("item")
        entity.item = "fabricaeexnihilo:stone_pebble"
        entity.setPosition(block.pos.x + 0.5, block.pos.y + 0.5, block.pos.z + 0.5)
        entity.spawn()
    }
})

