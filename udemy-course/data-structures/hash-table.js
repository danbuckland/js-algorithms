class HashTable {
  constructor(size = 53) {
    this.keymap = new Array(size)
  }

  _hash(key) {
    let total = 0
    const WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(100, key.length); i++) {
      let value = key[i].charCodeAt(0) - 96
      total = total * WEIRD_PRIME + value
    }
    return total % this.keymap.length
  }

  set(key, value) {
    let pos = this._hash(key)
    if (!this.keymap[pos]) this.keymap[pos] = []
    this.keymap[pos].push([key, value])

    return pos
  }

  get(key) {
    let pos = this._hash(key)
    let storedArray = this.keymap[pos]
    if (!storedArray) return undefined
    if (storedArray.length === 1) return storedArray[0]

    return storedArray.find(element => element[0] === key)
  }

}

let table = new HashTable()
debugger