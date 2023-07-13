function copyTextFb(){
    let fbLink = document.querySelector("#fbLink")
    fbLink.select()
    navigator.clipboard.writeText(fbLink.value)
        .then(() => {
            alert("Facebook link copied!")
        })
        .catch((error) => {
            alert("Unable to copy link")
        })
}

function copyTextGitHub(){
    let gitHubLink = document.querySelector("#gitHubLink")
    gitHubLink.select()
    navigator.clipboard.writeText(gitHubLink.value)
        .then(() => {
            alert("Github link copied!")
        })
        .catch((error) => {
            alert("Unable to copy link")
        })
}

function copyEmailLink(){
    let emailLink = document.querySelector("#emailLink")
    emailLink.select()
    navigator.clipboard.writeText(emailLink.value)
        .then(() =>{
            alert("Email address copied!")
        })
        .catch((error) => {
            alert("Unable to copy link")
        })
}

// function sampleRows(){
//     let rows = ""
//     for(let i = 0; i <= 5; i++){
//         rows += `<tr>
//                     <td>${i}.cell1</td>
//                     <td>${i}.cell2</td>
//                     <td>${i}.cell3</td>
//                 </tr>`
//     }
//     return rows
// }

// let sampleTable = document.querySelector(".table")
// sampleTable.innerHTML += sampleRows()