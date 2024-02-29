import countries_lists from '../../data/countries_data.js';
console.log(countries_lists);
const objects = [];
for (const country of countries_lists) {
    objects.push({
        name: country.name,
        populations: country.population,
        languages: country.languages
    });
}
objects.sort((a, b) => {
    return b.populations - a.populations;
});



console.log(objects);
const langCounter = {};
objects.forEach((obj) => {
    obj.languages.forEach((lang) => {
        if (langCounter[lang]) {
            langCounter[lang]++;
        } else {
            langCounter[lang] = 1;
        }
    })
});
// console.log(langCounter);
const langArray = [];
for (let lang in langCounter) {
    langArray.push({
        language: lang,
        count: langCounter[lang]
    })
}
langArray.sort((a, b) => {
    if (a.count > b.count) {
        return -1;
    }
    if (a.count < b.count) {
        return 1;
    }
    return 0;
});
console.log(langArray);
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => updateDOMStructure(e.target.value))

});
const brifPara = document.querySelector('.brief');
const updateDOMStructure = (buttonValue) => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';
    if (buttonValue === 'population') {
        brifPara.innerHTML = '10 Most populated countries in the world'
        const visulDiv = document.createElement('div');
        visulDiv.className = 'component';
        const totalpopulations = Object.keys(objects).reduce((acc, sum) => {
            return acc + objects[sum].populations;
        }, 0);
        visulDiv.innerHTML = `<p class="description">World</p>
            <progress min="0" max="${totalpopulations}" value="${totalpopulations}"></progress>
            <p class="count">${totalpopulations}</p>`;
        wrapper.appendChild(visulDiv);
        let counter = 0;
        for (let key of Object.keys(objects)) {
            const visulDiv = document.createElement('div');
            visulDiv.className = 'component';
            visulDiv.innerHTML = `<p class="description">${objects[key].name}</p>
                <progress min="0" max="${totalpopulations}" value="${objects[key].populations}"></progress>
                <p class="count">${objects[key].populations}</p>`;
            wrapper.appendChild(visulDiv);
            counter++;
            if (counter === 9) {
                break;
            }
        }

    } else if (buttonValue === 'languages') {
        brifPara.innerHTML = '10 most spoken languages in the World';
        const visulDiv = document.createElement('div');
        visulDiv.className = 'component';
        const totalLanguage = langArray.reduce((acc, sum) => {
            return acc + sum.count;
        }, 0);

        for (let key of langArray) {
            const visulDiv = document.createElement('div');
            visulDiv.className = 'component';
            visulDiv.innerHTML = `<p class="description">${key.language}</p>
                <progress min="0" max="${totalLanguage}" value="${key.count}"></progress>
                <p class="count">${key.count}</p>`;
            wrapper.appendChild(visulDiv);

            if (langArray.indexOf(key) === 9) {
                break;
            }
        }

    }
}