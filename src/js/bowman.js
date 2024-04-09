import Character from "./character";

export default class Bowman extends Character {
    constructor(name) {
        super(name, "Bowman", 25, 25);
        this.special = [
            {
                id: 1,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            },
            {
                id: 2,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
                // <- обратите внимание, описание "засекречено"
            }
        ]
    }

    getSpecialAttacks() {
        const result = [];
        const { special } = this;

        if (!special) {
            return result;
        }

        for (let i = 0; i < special.length; i++) {
            result.push({
                id: special[i].id,
                name: special[i].name,
                icon: special[i].icon,
                description: special[i].description ? special[i].description : 'Описание недоступно'
            });
        }
        return result;
    }
}
