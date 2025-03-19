import BakeryItem from "../models/BakeryItem";

class BakeryService {
  static bakeryItems = [
    new BakeryItem(1, "Croissant", 2.5, "Pastry", "Buttery and flaky pastry."),
    new BakeryItem(2, "Chocolate Cake", 3.5, "Cake", "Rich and moist chocolate cake."),
    new BakeryItem(3, "Baguette", 1.5, "Bread", "Crispy French bread."),
  ];

  static getBakeryItems() {
    return BakeryService.bakeryItems;
  }

  static addBakeryItem(item) {
    BakeryService.bakeryItems.push(item);
  }

  static deleteBakeryItem(id) {
    BakeryService.bakeryItems = BakeryService.bakeryItems.filter(item => item.id !== id);
  }
}

export default BakeryService;
