const BetterItem = require('./items/BetterItem');
const AgedBrie = require('./items/AgedBrie');
const Sulfuras = require('./items/Sulfuras');
const BackstagePass = require('./items/BackstagePass');


function betterItemFactory(item) {
  let name = item.name;
  let conjured;

  if (item.name.startsWith('Conjured ')) {
    conjured = true;
    name = item.name.slice(9);
  }

  switch (name) {
    case 'Aged Brie':
      return new AgedBrie(item, conjured);
    case 'Sulfuras, Hand of Ragnaros':
      return new Sulfuras(item, conjured);
    case 'Backstage passes to a TAFKAL80ETC concert':
      return new BackstagePass(item, conjured);
    default:
      return new BetterItem(item, conjured);
  }
}

module.exports = betterItemFactory;