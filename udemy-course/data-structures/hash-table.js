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
    let index = this._hash(key)
    this.keymap[index] = this.keymap[index] || []
    this.keymap[index].push([key, value])

    return index
  }

  get(key) {
    let index = this._hash(key)
    let storedArray = this.keymap[index]
    if (!storedArray) return undefined
    let found = storedArray.find(element => element[0] === key)
    if (!found) {
      return undefined
    } 
    return found[1]
  }

  keys() {
    let keysArray = []
    for (let i = 0; i < this.keymap.length; i++) {
      if (this.keymap[i]) {
        let size = this.keymap[i].length
        for (let j = 0; j < size; j++) {
          keysArray.push(this.keymap[i][j][0])
        }
      }
    }
    
    return keysArray
  }

  values() {
    let valuesArray = []
    for (let i = 0; i < this.keymap.length; i++) {
      if (this.keymap[i]) {
        let size = this.keymap[i].length
        for (let j = 0; j < size; j++) {
          valuesArray.push(this.keymap[i][j][1])
        }
      }
    }
    
    return valuesArray
  }

}

let table = new HashTable()
table.set('dirty', '#44ffff')   // 5
table.set('maroon', '#44ffff')  // 12
table.get('pink')               // undefined
table.set('pink', '#fffddf')    // 5
table.get('pink')               // '#fffddf'
table.get('dirty')              // '#44ffff'
console.log(table.keys()) // ['dirty', 'pink', 'maroon']
console.log(table.values()) // ['#44ffff', '#fffddf', '#44ffff']
debugger