function areYouSure() {
    confirm("are you sure? 💩")
}

document.querySelector(".compare-pr-placeholder .js-details-target")?.addEventListener("click", areYouSure)
document.querySelector(".js-pull-request-button")?.addEventListener("click", areYouSure)
