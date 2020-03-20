import Entity from './Entity';


class Loot extends Entity {
    action(verb, world) {
        if (verb === 'bump') {
            world.player.add(this);
            world.remove(this);
        }
        if (verb === 'drop') {
            console.log('dropped', this);
        }
    }
}

export default Loot;