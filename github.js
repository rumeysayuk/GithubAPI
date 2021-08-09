class Github {
    constructor() {
        this.url = "https://api.github.com/users/";
    }

    async getGithubData(username) {
        const userInfo = await fetch(this.url + username);
        const userRepos = await fetch(this.url + username + "/repos")

        const userData = await userInfo.json();
        const repoData = await userRepos.json();

        return {
            user: userData,
            repo: repoData
        }
    }
}
