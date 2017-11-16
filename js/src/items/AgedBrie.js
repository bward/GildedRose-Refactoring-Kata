const BetterItem = require('./BetterItem');

class AgedBrie extends BetterItem {
  getQualityChange() {
    return 1;
  }
}

module.exports = AgedBrie;