# Decode-Polyline

A tool for decoding google map compressed polyline using official map utility.

See more: https://developers.google.com/maps/documentation/utilities/polylinealgorithm

## Install

```bash
npm install --save decode-polyline
```

## Example

```js
import { decodePolyline } from 'decode-polyline';

var polyline =
  'neuaEejkbUEGc@j@PXl@p@P\\a@f@GHyDtEgC`DoCfDzHbQp@rAbH`JdBtBrCjDn@p@dDbDfIvHfD~CrK~Jo@z@uCrDmJnL}^ld@mVjZmQrTgArAFJ';
console.log(decodePolyline(polyline));
```

Output:

```
[ { latitude: -31.89864, longitude: 115.89811 },
  { latitude: -31.89861, longitude: 115.89815 },
  { latitude: -31.89843, longitude: 115.89793 },
  { latitude: -31.89852, longitude: 115.8978 } ]
```
