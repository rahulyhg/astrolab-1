# astrolab

> A small module for working with zodiac signs

## Install

With yarn:
```
$ yarn add astrolab
```

With npm:
```
$ npm install --save astrolab
```

## Usage

```js
const astrolab = require('astrolab');

// Get the current zodiac sign
const currentSign = astrolab();

// Get a zodiac sign by name
const mySign = astrolab('scorpio');

mySign.symbol;    // "Scorpion"
mySign.element;   // "Fire"
mySign.quality;   // "Fixed"
mySign.ruler;     // "Mars"
mySign.startDate; // {month: "October", day: 23}
mySign.endDate;   // {month: "November", day: 21}
 ```
