# Book
This book appears to be heavy and leatherbound, the title is "Morus Pendula".

- Read
- Back Cover

## Read
The book goes into the care of a specific species of tree, it's rather boring. The back cover seems to be hiding something.

- Back Cover

## Back Cover
You may be able to peel the backing off.

- Peel

### Peel
You discover a bronze key hidden under the backing.

- Bronze Key

### Bronze Key
An ornate key, found hidden in the back cover of the book.

#### Take
You take the key and put it in your inventory.

```js
function apply(object, appliedTo) {
  var opened = appliedTo.decrypt(object);
  if (opened) {
    return 'Key successfully opened the door.';
  } else {
    return 'This key doesn't fit.';
  }
}
```
