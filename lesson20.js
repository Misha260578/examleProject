"use strict"
const btn = document.querySelector("button"),
    title = document.querySelector("#title"),
    aname = document.querySelector("#name");


btn.addEventListener("click",  ()=>{
    const pTitle = document.createElement("p"),
     pName = document.createElement("p"),
    titleContainer = document.querySelector(".title"),
     nameContainer = document.querySelector(".name")
    pTitle.textContent = title.value
    pName.textContent = aname.value
    titleContainer.append(pTitle)
    nameContainer.append(pName)
    title.value = ''
    aname.value = ''
})


