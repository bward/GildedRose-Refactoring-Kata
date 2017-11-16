const betterItemFactory = require('./betterItemFactory');
const Item = require('./Item');
const BetterItem = require('./items/BetterItem');

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    return this.items
      .map(betterItemFactory)
      .map(item => {item.update(); return item;})
      .map(BetterItem.toItem);
  }
}

module.exports = {Item, Shop};