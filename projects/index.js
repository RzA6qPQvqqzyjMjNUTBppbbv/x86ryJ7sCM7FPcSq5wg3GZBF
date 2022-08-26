function change_theme(){
    if(localStorage.getItem("hunter_theme") == "default"){
        document.body.style.backgroundColor = "#1D70A2"
        document.getElementById("btn-theme").className = ('bi bi-moon-fill')
        localStorage.setItem("hunter_theme", "white")
        return
    }
    if(localStorage.getItem("hunter_theme") == "white"){
        document.body.style.backgroundColor = "#173753"
        document.getElementById("btn-theme").className = ('bi bi-brightness-high-fill')
        localStorage.setItem("hunter_theme", "default")
        return
    }
} 
function on_load(){
    if(!localStorage.getItem("hunter_theme")) return localStorage.setItem("hunter_theme", "default")
    if(localStorage.getItem("hunter_theme") == "white"){
        document.getElementById("btn-theme").className = ('bi bi-moon-fill')
        document.body.style.backgroundColor = "#1D70A2"
    }
    if(localStorage.getItem("hunter_theme") == "default"){
        document.getElementById("btn-theme").className = ('bi bi-brightness-high-fill')
        document.body.style.backgroundColor = "#173753"
    }
}