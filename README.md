## Vellyr

This is planned to be a tiny observables/signal/stream library aimed to be embeddable anywhere with minimal footprint (the library should be a single file). The API surface aims to be very small, something like:

```ts
const x = vellyr(1)
const y = vellyr.only(3)
const z = x.filter(value => value % 2 == 0)
 .map(value => value * 2)
 .combine(y)
 .map(([x, y]) => `${x} -- ${y}`)

z.on((value, close) => {
    if (value === "16 -- 3") {
        close()
    } else {
        // side-effect
    }
})
```