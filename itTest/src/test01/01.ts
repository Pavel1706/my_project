export function Sum(a: number, b: number) {
    return a + b;
}

export function Mul(a: number, b: number) {
    return a * b;
}

export function SplitInto(sentence: string) {
    const heyhey = sentence.toLowerCase().split(" ")
    return  heyhey.filter(w => w !== "" && w !== "-")
        .map(w =>
            w.replace("!", "")
                .replace(".", "")
                .replace(",", ''));
}