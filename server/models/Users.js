import User from './User';

export default class Users {
    constructor(users = []) {
        this.users = [];
        users.map(x => {
            this.add(x);
        })
    }

    add(user) {
        if (user instanceof User && !this.users.find(x => x === user)) {
            this.users.push(user);
        }
    }

    length() {
        return this.users.length;
    }

    indexOf(index) {
        return this.users[index];
    }
}
