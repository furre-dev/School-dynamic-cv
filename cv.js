const xpList = document.querySelector(".xp-list");
const studiesList = document.querySelector(".right-side-ul");

async function getJson() {
    const response = await fetch("experience.json")
        .then((response) => response.json())
        .then((response) => (data = response))

    const workData = data.work;
    console.log(workData)

    const studiesData = data.studies;
    console.log(studiesData)


    workData.forEach(element => {
        studiesList.innerHTML += `<li>${element.name}<br>
        ${element.studyName}<br>
        ${element.startYear}-${element.endYear}</li>`
    });

    /* for (let i = 0; i < studiesData.length; i++) {
        console.log(studiesData[i]);
        studiesList.innerHTML += `<li>${studiesData[i].name}<br>
        ${studiesData[i].studyName}<br>
        ${studiesData[i].startYear}-${studiesData[i].endYear}</li>`
    }

    for (let i = 0; i < workData.length; i++) {
        console.log(workData[i]);
        xpList.innerHTML += `<li>${workData[i].name} - ${workData[i].position}<br>
        ${workData[i].startYear}-${workData[i].endYear}</li>`
    } */

}
getJson();  