export const shuffle = <T>(arr: T[], length: number): T[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[random]] = [shuffled[random], shuffled[i]];
    }

    return shuffled.slice(0, length);
};
