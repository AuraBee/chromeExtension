// chrome://extensions/
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


//localStorage.getItem("myLeads") // Gets the leads from the localStorage - PS: JSON.parse()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") ) // Stores leads - JSON.parse configures into array

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage

    render(myLeads)
}


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}


//listens for a dbl click//
deleteBtn.addEventListener("dblclick", function() {
    console.log("dbleclicked")
    localStorage.clear() //clears local storrage
    myLeads = []  //myleads assigned to empty array

    render(myLeads) //clears the dom
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    //console.log(typeof myLeads)
    render(myLeads)
    //console.log( localStorage.getItem("myLeads") )
})

