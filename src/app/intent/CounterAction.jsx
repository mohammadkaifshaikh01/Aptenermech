import counterData from '../model/CounterData';

export const inc = () => counterData.increment();
export const dec = () => counterData.decrement();
export const reset = () => counterData.reset();
