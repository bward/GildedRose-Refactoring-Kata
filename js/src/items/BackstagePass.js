const BetterItem = require('./BetterItem');

class BackstagePass extends BetterItem {
  getQualityChange() {
    if (this.sellIn < 0) {
      return -this.quality*this.getMultiplier();
    }
    if (this.sellIn < 6) {
      return 3;
    }
    if (this.sellIn < 11) {
      return 2;
    }
    return 1;
  }
}

module.exports = BackstagePass;