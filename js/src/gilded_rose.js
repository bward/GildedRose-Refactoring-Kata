class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

function getTicketQualityChange(ticket) {
  if (ticket.sellIn < 1) {
    return -ticket.quality;
  }
  else if (ticket.sellIn < 5) {
    return 3;
  }
  else if (ticket.sellIn < 10) {
    return 2;
  }
  else {
    return 1;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i=0; i<this.items.length; i++) {
      let item = this.items[i];

      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn -= 1;
      }

      let multiplier = item.name.startsWith('Conjured') ? 2 : 1;

      if(item.name.endsWith('Aged Brie')) {
        item.quality += (item.sellIn > 0 ? 1 : 2) * multiplier;
      }
      else if (item.name.endsWith('Backstage passes to a TAFKAL80ETC concert')) {
        item.quality += getTicketQualityChange(item) * multiplier;
      }
      else if (!item.name.endsWith('Sulfuras, Hand of Ragnaros')) {
        item.quality -= (item.sellIn > 0 ? 1 : 2) * multiplier;
      }

      item.quality = Math.max(0, Math.min(50, item.quality));
      this.items[i] = item;
    }

    return this.items;
  }
}
