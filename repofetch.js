const url = "https://api.github.com/users/furreabay/repos"
const leftUl = document.querySelector(".left-repo-ul");
const rightUl = document.querySelector(".right-repo-ul");


async function fetchApi() {
    const response = await fetch(url)
        .then((response) => response.json())
        .then((response) => data = response)

    console.log(data)

    data.forEach(obj => {
        const leftLi = document.querySelectorAll(".left-li")
        const rightLi = document.querySelectorAll(".right-li")

        if (obj.private !== false) {
            return;
        }
        if (obj.name === obj.owner.login) {
            return;
        }

        if (leftLi.length > rightLi.length) {
            rightUl.innerHTML += `<li class="right-li">${obj.name}<br>
            <p class"github-description">${obj.description}</p><br>
            <a href="${obj.html_url}" class="github-link">Click to get to the github repo!<a/></li>`
            console.log(obj.name)
            console.log(obj.html_url)
        } else {
            leftUl.innerHTML += `<li class="left-li">${obj.name}<br>
            <p class"github-description">${obj.description}</p><br>
            <a href="${obj.html_url}" class="github-link">Click to get to the github repo!<a/></li>`
            console.log(obj.name)
            console.log(obj.html_url)
        }
    });

}

fetchApi();