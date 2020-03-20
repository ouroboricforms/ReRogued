import Loot from './Loot.js';
import Monster from './Monster.js';
import Stairs from './Stairs.js';

const monsterTable = [
    { name: 'Steve-hog', color: 'lightgrey', ascii: 'ॐ', offset: { x: 2, y: 3 }, health: 6 },
    { name: 'Billington-Bat', color: 'red', ascii: `Ƀ`, offset: { x: 4, y: 3 }, health: 4 },
    { name: 'Hermanit', color: 'gold', ascii: '¿', offset: { x: 6, y: 3 }, health: 3 },
    { name: 'Jeanetic-Freak', color: 'lightblue', ascii: 'J', offset: { x: 4, y: 3 }, health: 10 }
]

const lootTable = [
    { name: 'Long Bong', color: 'white', ascii: '/', offset: { x: 6, y: 3 }, damageMod: 2 },
    { name: 'zombie juice', color: 'brown', ascii: '!', offset: { x: 6, y: 3 } },
    { name: 'Five dolla bill', color: 'green', ascii: '$', offset: { x: 6, y: 3 } },
    { name: 'Black metal war vest', color: 'lightblue', ascii: '#', offset: { x: 4, y: 3 } }
]

class Spawner {
    constructor(world) {
        this.world = world;
    }

    spawn(spawnCount, createEntity) {
        for (let count = 0; count < spawnCount; count++) {
            let entity = createEntity();
            this.world.add(entity);
            this.world.moveToSpace(entity);
        }
    }

    spawnLoot(spawnCount) {
        this.spawn(spawnCount, () => {
            return new Loot(
                getRandomInt(this.world.width - 1),
                getRandomInt(this.world.height - 1),
                this.world.tilesize,
                lootTable[getRandomInt(lootTable.length)]
            );
        });
    }

    spawnMonsters(spawnCount) {
        this.spawn(spawnCount, () => {
            return new Monster(
                getRandomInt(this.world.width - 1),
                getRandomInt(this.world.height - 1),
                this.world.tilesize,
                monsterTable[getRandomInt(lootTable.length)]
            );
        });
    }
    spawnStairs() {
        let stairs = new Stairs(this.world.width - 10, this.world.height - 10, this.world.tilesize);
        this.world.add(stairs);
        this.world.moveToSpace(stairs);
    }
}



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

export default Spawner;