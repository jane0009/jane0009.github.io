console.info("modifying entity spawns")

const disabled_mobs = [
  
];

EntityEvents.spawned(event => {
  const {entity: { entityType }} = event;

  if (entityType in disabled_mobs) {
    event.cancel();
  }
})