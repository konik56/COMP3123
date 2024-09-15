function capitalizeWords(str) {
    let words = str.split(' ');
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}

let input = "my name is illia konik";
let output = capitalizeWords(input);

console.log(output);