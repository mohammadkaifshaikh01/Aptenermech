import { BehaviorSubject } from 'rxjs';

class CounterData {
    constructor() {
        this.counter$ = new BehaviorSubject(0); 
    }

    getCounterObservable() {
        return this.counter$.asObservable();
    }

    getValue() {
        return this.counter$.getValue();
    }

    increment() {
        const currentValue = this.counter$.getValue();
        if (currentValue < 98) { 
            this.counter$.next(currentValue + 1);
        }
    }

    decrement() {
        const currentValue = this.counter$.getValue();
        if (currentValue > 0) { 
            this.counter$.next(currentValue - 1);
        }
    }

    reset() {
        this.counter$.next(0);
    }
}

const counterData = new CounterData();
export default counterData;