class User {
  private city: string = "nyc";
  protected _count = 1;
  constructor(public email: string, public name: string) {}
}

class SubUser extends User {
  isFamily: boolean = true;
  countp() {
    this._count += 1;
  }
}

const abhi = new User("abhi@.com", "hi");
