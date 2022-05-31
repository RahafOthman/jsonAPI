var recipes = [] ; 
getRecipes("pizza");
var links = document.querySelectorAll(".nav-link");
for ( var i = 0 ; i <links.length ; i++){
    links[i].addEventListener("click",function(e){
        getRecipes(e.target.text);
    });
}
function getRecipes(meal){
    var httpReqest = new XMLHttpRequest();
    httpReqest.open("get",`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    httpReqest.send();
    httpReqest.addEventListener("readystatechange",function(){
        if(httpReqest.readyState == 4 ){
            recipes = JSON.parse(httpReqest.response).recipes ; 
        }
        console.log(recipes);
        displayRecipes() ; 
    });
}
function displayRecipes(){
    var col =`` ; 
    for(var i = 0 ; i <recipes.length ; i++ ){
        col+= `<div class="col-md-3">
            <div class = "recipes">
                <img src = "${recipes[i].image_url}" class = "h-75 w-75" />
                <h4>${recipes[i].title}</h4>
            </div>
        </div>
        ` ; 
    }
    document.getElementById("postRow").innerHTML = col ; 
}