class OldBatSignal {
    activateSignal(message) {
        console.log(`[BAT-SIGNAL] ${message}`);
    }
}
class BatSignalAdapter {
    oldSignal;
    constructor(oldSignal) {
        this.oldSignal = oldSignal;
    }
    sendMessage(message) {
        this.oldSignal.activateSignal(message);
    }
}
class FlyAttackStrategy {
    attack(target) {
        return `Супергерой атакует ${target} с воздуха!`;
    }
}
class StrengthAttackStrategy {
    attack(target) {
        return `Супергерой наносит мощный удар по ${target}!`;
    }
}
class MagicAttackStrategy {
    attack(target) {
        return `Супергерой использует магию против ${target}!`;
    }
}
class Superhero {
    strategy;
    name;
    constructor(name, strategy) {
        this.name = name;
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    fight(target) {
        console.log(`${this.name}: ${this.strategy.attack(target)}`);
    }
}
class JusticeLeagueHQ {
    observers;
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter((item) => item !== observer);
    }
    notify(event) {
        console.log(`Штаб Лиги Справедливости сообщает: ${event}`);
        for (const observer of this.observers) {
            observer.update(event);
        }
    }
}
class Batman {
    update(event) {
        console.log(`Бэтмен получил сообщение: ${event}`);
    }
}
class Superman {
    update(event) {
        console.log(`Супермен получил сообщение: ${event}`);
    }
}
class WonderWoman {
    update(event) {
        console.log(`Чудо-женщина получила сообщение: ${event}`);
    }
}
// Adapter
const oldSignal = new OldBatSignal();
const communicator = new BatSignalAdapter(oldSignal);
communicator.sendMessage("фронтендерам нужна помощь!");
// Strategy
const hero = new Superhero("Супермен", new FlyAttackStrategy());
hero.fight("Кирюхи");
hero.setStrategy(new StrengthAttackStrategy());
hero.fight("jsсера");
hero.setStrategy(new MagicAttackStrategy());
hero.fight(" мага");
// Observer
const hq = new JusticeLeagueHQ();
const batman = new Batman();
const superman = new Superman();
const wonderWoman = new WonderWoman();
hq.subscribe(batman);
hq.subscribe(superman);
hq.subscribe(wonderWoman);
hq.notify("На город напали бэкендеры!");
hq.unsubscribe(superman);
hq.notify("Срочный вызов в штаб-фронтендеров!");
export {};
