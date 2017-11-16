describe("Gilded Rose", function() {

  it("Sulfuras never decreases in Quality", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(10);
  });

  it("Sulfuras never needs to be sold", function() {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(5);
  });

  it("Brie increases in quality with age", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThan(10);
  });

  it("Quality is never more than 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 25, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Quality is never negative", function () {
    const gildedRose = new Shop([ new Item("Elixir of the Mongoose", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("Quality degrades faster after expiry", function () {
    const gildedRose = new Shop([ new Item("Elixir of the Mongoose", 0, 4) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2);
  });

  it("Tickets are worthless after the concert", function () {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 4) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });


  it("Tickets increase in value faster when the concert is near", function () {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0),
                                  new Item("Backstage passes to a TAFKAL80ETC concert", 7, 0),
                                  new Item("Backstage passes to a TAFKAL80ETC concert", 3, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
    expect(items[1].quality).toEqual(2);
    expect(items[2].quality).toEqual(3);
  });

  it("Conjured items degrade faster", function () {
    const gildedRose = new Shop([ new Item("Conjured Aged Brie", 0, 4) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });
});
