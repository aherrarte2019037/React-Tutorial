export function titleCase(str: string): string {
    let title = str.toLowerCase().split(' ');
    for (let i = 0; i < title.length; i++) {
        title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
    }
    return title.join(' ');
}

export function quoteText(str: string): string {
    return `"${str.charAt(0).toUpperCase() + str.slice(1)}"`;
}