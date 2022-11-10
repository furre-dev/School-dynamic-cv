
async function getJson() {
    const response = await fetch("experience.json")
        .then((response) => response.json())
        .then((response) => (data = response))


}

getJson();  