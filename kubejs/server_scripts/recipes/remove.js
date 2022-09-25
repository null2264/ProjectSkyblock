// priority: 1000

onEvent('recipes', (event) => {
    const removals = [
        {
            output: /kibe:\w+_generator_mk./
        }
    ];

    removals.forEach((removal) => {
        event.remove(removal);
    });
});
