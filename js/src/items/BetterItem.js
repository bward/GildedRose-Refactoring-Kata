const Item = require('../Item');

class BetterItem {
  constructor(item) {
    this.name = item.name;
    this.conjured = item.name.startsWith('Conjured');
    this.sellIn = item.sellIn;
    this.quality = item.quality;

  }

  getMultiplier() {
    return (this.conjured ? 2 : 1) * (this.sellIn < 0 ? 2 : 1);
  }

  update() {
    this.updateSellIn();
    this.updateQuality();
  }

  updateQuality() {
    this.quality = BetterItem.bound(this.quality + this.getQualityChange() * this.getMultiplier(), 0, 50);
  }

  updateSellIn() {
    this.sellIn -= 1;
  }

  getQualityChange() {
    return -1;
  }

  static toItem(betterItem) {
    return new Item(betterItem.name, betterItem.sellIn, betterItem.quality);
  }

  static bound(value, lower, upper) {
    return Math.max(lower, Math.min(value, upper));
  }
}

module.exports = BetterItem;