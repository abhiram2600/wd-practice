"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "nyc";
        this._count = 1;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    countp() {
        this._count += 1;
    }
}
const abhi = new User("abhi@.com", "hi");
