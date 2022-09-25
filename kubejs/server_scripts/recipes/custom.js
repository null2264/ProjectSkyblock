// priority: 0

onEvent('recipes', (event) => {
    event.custom({
        type: "fabricaeexnihilo:crucible_heat",
        block: "kibe:heater",
        heat: 10
    });
});
