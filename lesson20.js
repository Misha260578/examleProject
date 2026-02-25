"use strict"

const dataBase = {
    userNameDb: [],
    userPriceDb: []

}

function rander(){
    nameContainer.innerHTML = ""
    dataBase.userNameDb.forEach((e, i) => {
    if (e) {
        const pName = document.createElement("p")
        pName.textContent = e
        nameContainer.append(pName)
    
    }
   
    })
    
    titleContainer.innerHTML = ""
    dataBase.userPriceDb.forEach((e, i) => {
     if (e) {
        const pTitle = document.createElement("p")
        pTitle.textContent = e
        titleContainer.append(pTitle)
    
    }
    })
}



const btn = document.querySelector("button"),
    title = document.querySelector("#title"),
    aname = document.querySelector("#name"),
    titleContainer = document.querySelector(".title"),
    nameContainer = document.querySelector(".name");


btn.addEventListener("click",  ()=>{
    if (title.value && aname.value) {
        dataBase.userPriceDb.push(title.value)
        dataBase.userNameDb.push(aname.value)
    }
    // const pTitle = document.createElement("p"),
    //  pName = document.createElement("p"),
    // titleContainer = document.querySelector(".title"),
    // nameContainer = document.querySelector(".name")
    // pTitle.textContent = title.value
    // pName.textContent = aname.value
    // titleContainer.append(pTitle)
    // nameContainer.append(pName)
    // title.value = ''
    // aname.value = ''
    rander()
})


