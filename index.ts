const emptyValue = Symbol();

class Vellyr<T> {
  #value: T | Symbol;
  #callbacks = [];

  constructor(hasInitialValue: boolean, initialValue?: T) {
    if (hasInitialValue) {
      // @ts-expect-error `undefined` can be a part of T
      this.#value = initialValue;
    } else {
      this.#value = emptyValue;
    }
  }

  set(newValue: T) {
    this.#callbacks.forEach((cb) => cb(newValue));
  }

  on(cb: Function) {
    this.#callbacks.push(cb);
  }

  map(fn: Function) {
    const result = new Vellyr(true, fn(this.#value));
    this.on((newValue) => result.set(fn(newValue)));

    return result;
  }

  filter(fn: Function) {
    const hasFirstValue = //
  }
}

export function vellyr<T>(initialValue: T) {}
