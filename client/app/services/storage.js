// Will hold an array of numbers and operators like: ['1', '+', '2', '*', 3]
export default class Storage {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
    console.log(this.items)
  }

  getItems() {
    return this.items
  }

  getLastItem() {
    return this.items[this.items.length - 1]
  }

  clearItems() {
    this.items = []
    console.log(this.items)
  }
}