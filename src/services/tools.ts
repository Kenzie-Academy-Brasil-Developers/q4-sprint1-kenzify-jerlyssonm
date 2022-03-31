 function formatText(text: string): string {
    const words = text.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        words[i] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}

export default formatText;