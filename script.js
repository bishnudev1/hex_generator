const button = document.getElementById("button");
const box = document.getElementById("box");
const title = document.getElementById("title");
const copyHex = document.getElementById("copyHex");

const generateRandomHex = () => {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}

button.addEventListener('click', () => {
    box.style.backgroundColor = generateRandomHex();
    title.innerHTML = generateRandomHex();
});


copyHex.addEventListener('click', () => {
    const textToCopy = generateRandomHex();

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Copied Successfully!");
        })
        .catch((error) => {
            alert("Failed with Error: ", error);
        });

});
