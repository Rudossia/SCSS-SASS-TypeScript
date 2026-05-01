// Adapter
interface HeroCommunicator {
    sendMessage(message: string): void;
}
class OldBatSignal {
    activateSignal(message: string): void {
        console.log(`[BAT-SIGNAL] ${message}`);
    }
}
class BatSignalAdapter implements HeroCommunicator {
    private oldSignal: OldBatSignal;
    constructor(oldSignal: OldBatSignal) {
        this.oldSignal = oldSignal;
    }
    sendMessage(message: string): void {
        this.oldSignal.activateSignal(message);
    }
}

// Strategy
interface AttackStrategy {
    attack(target: string): string;
}
class FlyAttackStrategy implements AttackStrategy {
    attack(target: string): string {
        return `Супергерой атакует ${target} с воздуха!`;
    }
}
class StrengthAttackStrategy implements AttackStrategy {
    attack(target: string): string {
        return `Супергерой наносит мощный удар по ${target}!`;
    }
}
class MagicAttackStrategy implements AttackStrategy {
    attack(target: string): string {
        return `Супергерой использует магию против ${target}!`;
    }
}

class Superhero {
    private strategy: AttackStrategy;
    private name: string;
    constructor(name: string, strategy: AttackStrategy) {
        this.name = name;
        this.strategy = strategy;
    }
    setStrategy(strategy: AttackStrategy): void {
        this.strategy = strategy;
    }
    fight(target: string): void {
        console.log(`${this.name}: ${this.strategy.attack(target)}`);
    }
}

// Observer
interface HeroObserver {
    update(event: string): void;
}
class JusticeLeagueHQ {
    private observers: HeroObserver[];
    constructor() {
        this.observers = [];
    }
    subscribe(observer: HeroObserver): void {
        this.observers.push(observer);
    }
    unsubscribe(observer: HeroObserver): void {
        this.observers = this.observers.filter(
            (item: HeroObserver): boolean => item !== observer
        );
    }
    notify(event: string): void {
        console.log(`Штаб Лиги Справедливости сообщает: ${event}`);
        for (const observer of this.observers) {
            observer.update(event);
        }
    }
}

class Batman implements HeroObserver {
    update(event: string): void {
        console.log(`Бэтмен получил сообщение: ${event}`);
    }
}
class Superman implements HeroObserver {
    update(event: string): void {
        console.log(`Супермен получил сообщение: ${event}`);
    }
}
class WonderWoman implements HeroObserver {
    update(event: string): void {
        console.log(`Чудо-женщина получила сообщение: ${event}`);
    }
}

// Adapter
const oldSignal: OldBatSignal = new OldBatSignal();
const communicator: HeroCommunicator = new BatSignalAdapter(oldSignal);
communicator.sendMessage("фронтендерам нужна помощь!");
// Strategy
const hero: Superhero = new Superhero("Супермен", new FlyAttackStrategy());
hero.fight("Кирюху");
hero.setStrategy(new StrengthAttackStrategy());
hero.fight("jsсеру");
hero.setStrategy(new MagicAttackStrategy());
hero.fight(" С++серу");
// Observer
const hq: JusticeLeagueHQ = new JusticeLeagueHQ();
const batman: Batman = new Batman();
const superman: Superman = new Superman();
const wonderWoman: WonderWoman = new WonderWoman();
hq.subscribe(batman);
hq.subscribe(superman);
hq.subscribe(wonderWoman);
hq.notify("На город напали бэкендеры!");
hq.unsubscribe(superman);
hq.notify("Срочный вызов в штаб-фронтендеров!");

export {};