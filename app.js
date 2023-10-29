usersArray = []
function register() {
    let name = document.getElementById("userName").value
    let gmail = document.getElementById("userGmail").value
    let userCount = usersArray.filter((x) => {
        return x.objectGmail == gmail
    })
    if (userCount.length == 0) {
        let usersDetails = { objectName: name, objectGmail: gmail }
        usersArray.push(usersDetails)
        console.log(usersArray)
    }
    else {
        let error=document.getElementById('error')
        error.innerHTML="this gmail is already excisted"
    }
    document.getElementById("userName").value = ''
    document.getElementById("userGmail").value = ''


    let userContainer = document.getElementById("userContainer")
    let div = document.createElement('div')
    let headingTwo = document.createElement('h2')
    let headingFour = document.createElement('h4')
    userContainer.classList.add('userdiv')

    headingTwo.innerHTML = name
    headingFour.innerHTML = gmail

    userContainer.appendChild(div)
    userContainer.appendChild(headingTwo)
    userContainer.appendChild(headingFour)

}