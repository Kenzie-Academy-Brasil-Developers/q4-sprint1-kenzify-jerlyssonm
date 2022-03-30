function formatText(text) {
    var words = text.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        let w = words[i];
        words[i] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}

export default formatText;