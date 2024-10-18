function idt<T>(val: T): T {
  return val;
}

const getSearch = <T>(products: T[]): T => {
  return products[0];
};

function af<T, U>(o: T, t: U): object {
  return {};
}

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
