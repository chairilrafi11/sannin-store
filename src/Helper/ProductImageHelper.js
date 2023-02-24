let instance;

class ProductImageHelper {
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!!");
    }

    instance = this;
  }

    imageProduct = (kode) => {
        switch (kode) {
         case "mobile-legends":
             return require("../assets/ml.jpeg");
         case "pubgm":
             return require("../assets/pubgm.jpeg");
         case "valorant":
             return require("../assets/valorant.avif");
         case "lolwr":
             return require("../assets/wild-rift.png");
         case "pubgm":
             return require("../assets/pubgm.jpeg");
         case "valorant":
             return require("../assets/valorant.avif");
         default:
             break;
        } 
     }
}

let productImageHelper = Object.freeze(new ProductImageHelper());

export default productImageHelper;