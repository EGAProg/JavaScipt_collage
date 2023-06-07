
const countries = [
    "Argentina",
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "South Africa",
    "Spain",
    "United Kingdom",
    "United States",
    "Russian Federation",
    "Romania",
    "Georgia"
];

const input = document.getElementById("country-input");
const list = document.getElementById("country-list");

input.addEventListener("input", () => {
    const filter = input.value.toLowerCase();
    const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(filter));

    list.innerHTML = "";

    filteredCountries.forEach(country => {
        const item = document.createElement("li");
        item.textContent = country;

        item.addEventListener("click", () => {
            input.value = country;
            list.innerHTML = "";
        });

        list.appendChild(item);
    });
});

document.addEventListener("click", event => {
    if (!list.contains(event.target)) {
        list.innerHTML = "";
    }
});