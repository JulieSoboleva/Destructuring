import Bowman from '../bowman';
import Character from '../character';
import Daemon from '../daemon';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';
import Magician from '../magician';


test('check getSpecialAttacks', () => {
    const bowman = new Bowman('Олег');
    expect(bowman.getSpecialAttacks()).toEqual([
        {
            id: 1,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 2,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: 'Описание недоступно'
        }
    ]);
});

test('check getSpecialAttacks without special', () => {
    const bowman = new Bowman('Карл');
    bowman.special = null;
    expect(bowman.getSpecialAttacks()).toEqual([]);
});

test('check orderByProps', () => {
    const magicial = new Magician('Макар');
    expect(magicial.orderByProps(['name', 'level'])).toEqual([
        { key: 'name', value: 'Макар' },
        { key: 'level', value: 1 },
        { key: 'attack', value: 40 },
        { key: 'defence', value: 10 },
        { key: 'health', value: 100 },
        { key: 'type', value: 'Magician' }
    ]);
});

test('check levelUp', () => {
    const bowman = new Bowman("Алекс");
    bowman.levelUp();

    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(30);
    expect(bowman.defence).toBe(30);
});

test('check levelUp for dead man', () => {
    const zombie = new Zombie("Фредди");
    zombie.health = 0;
    try {
        zombie.levelUp();
    } catch (e) {
        expect(e.message).toBe("Нельзя повысить левел умершего");
    }
});

test('check name length', () => {
    try {
        new Daemon("Вольфшлегельштайнхаузенбергедорф");
    } catch (e) {
        expect(e.message).toBe("Имя должно иметь от 2 до 10 символов");
    }
});

test('check person type', () => {
    try {
        new Character("Merlin", "Cook", 10, 50);
    } catch (e) {
        expect(e.message).toBe("Не корректный тип персонажа");
    }
});

test('check method damage', () => {
    const undead = new Undead("Кощей");
    undead.damage(60);
    expect(undead.health).toBe(55);
});

test('check damage with health less zero', () => {
    const swordsman = new Swordsman("Вова");
    swordsman.damage(120);
    expect(swordsman.health).toBe(0);
});

test('creating daemon', () => {
    const daemon = new Daemon('Вася');
    expect(daemon).toEqual({
        name: 'Вася',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
});

test('creating zombie', () => {
    const zombie = new Zombie('Коля');
    expect(zombie).toEqual({
        name: 'Коля',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
});

test('creating magicial', () => {
    const magicial = new Magician('Петя');
    expect(magicial).toEqual({
        name: 'Петя',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
});
