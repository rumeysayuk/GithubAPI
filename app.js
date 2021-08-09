const githubForm = document.querySelector("#github-form")
const clearAllSearches = document.querySelector("#clear-last-users")
const githubName = document.querySelector("#githubname")
const lastUsers = document.querySelector("#last-users")
const github = new Github();
eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearAllSearches.addEventListener("click", clearAllSearched)
    document.addEventListener("DOMContentLoaded", getAllSearched)
}

function getData(e) {
    const username = githubName.value.trim();
    if (username === "") {
        alert("lütfen geçerli bir kullanıcı adı gir!")
    }
    github.getGithubData(username)

    e.preventDefault();
}

function clearAllSearched() {
}

function getAllSearched() {
}
