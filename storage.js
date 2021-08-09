class Storage {
    static getSearchedUsersFromLocalStorage() {
        let users;
        if (localStorage.getItem("searched") === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }

    static addSearchedUserToLocalStorage(username) {
        let users = this.getSearchedUsersFromLocalStorage();

        if (users.indexOf(username) === -1) {
            users.push(username)
        }
        localStorage.setItem("searched", JSON.stringify(users))
    }

    static clearAllUsersFromLocalStorage() {
        localStorage.removeItem("searched")
    }

}



