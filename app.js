const githubForm = document.querySelector("#github-form")
const clearAllSearches = document.querySelector("#clear-last-users")
const githubName = document.querySelector("#githubname")
const lastUsers = document.querySelector("#last-users")
const github = new Github();
const ui = new Ui();

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
    } else {
        github.getGithubData(username).then(res => {
            if (res.user.message === "Not Found") {
                ui.showError("Kullanıcı bulunamadı..")
            } else {
                ui.addSearchedUserToUI(username)
                Storage.addSearchedUserToLocalStorage(username);
                ui.showUserInfo(res.user)
                ui.showUserRepo(res.repo)
            }
        })
            .catch(err => {
                ui.showError(err)
            })
    }

    ui.clearInput()
    e.preventDefault();
}

function clearAllSearched() {
    if (confirm("Emin misiniz?")){
        Storage.clearAllUsersFromLocalStorage();
        ui.deleteSearchedToUI()
    }

}

function getAllSearched() {
let users=Storage.getSearchedUsersFromLocalStorage();
    //
    let result="";
users.forEach(user=>{
result+=`<li class="list-group-item">${user}</li>`
});
lastUsers.innerHTML=result;
}
