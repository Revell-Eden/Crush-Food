let recipe = document.querySelector('.recipePreview');
let recipeBtn = document.querySelector('.recipe');
function showRecipe() {
    if (recipe.style.display === "block") {
        recipeBtn.style.background = "#fff";
        recipeBtn.style.color = "#000";
        recipe.style.display = "none";
        console.log("open");
    } else {
        recipeBtn.style.background = "rgb(255, 131, 131)";
        recipeBtn.style.color = "#fff";
        recipe.style.display = "block";
        console.log("close");
    }
}
// Extend Comment Menu //
let commentSection = document.querySelector('.commentSection');
setInterval(extendComment(), 3000);
function extendComment() {    
    commentSection.scrollLeft -= 2000;
    console.log('scrolled');
};


let preStore = JSON.parse(localStorage.getItem("allEntries"));
function postComment() {
    if (preStore == null) preStore = [];
    let pushedData = document.getElementById('newComment').value;
    /*let userId = document.getElementById('userId').value;*/
    let entry = {/*"userID": userId,*/ "comment": pushedData};
    /*
    preStore.push({comment: pushedData});
    preStore.forEach((item,i) => {
        item.id = i + 1;
        return item
    });*/

    localStorage.setItem('entry', JSON.stringify(entry));
    // Save allEntries back to local storage //
    preStore.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(preStore));
    console.log(preStore);

    // Comment time-stamp //
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const commentDate = today.toLocaleDateString();

    // Add new comment instance with prePost data entered //
    document.querySelector('.commentSection').insertAdjacentHTML(
        'afterBegin',
        `<li class="commented">
        ${pushedData}
        <span>${commentDate}</span>
        </li>`
    )
    console.log("added");
}