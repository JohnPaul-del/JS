window.onload = function(){
    var items = document.querySelectorAll("img");
    for(var item of items){
        item.onclick = function(){
            document.getElementById("big-img").src = this.src.replace("small", "big");
        }
    }
}
