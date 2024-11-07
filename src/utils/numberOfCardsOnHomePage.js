export function numberOfCardsOnHomepage() {
    let numOfCardsOnHomePage;
    const screenWidth = window.innerWidth;

    if (typeof window !== "undefined") {
    if (screenWidth < 1024) {
        numOfCardsOnHomePage = 6;
    } else if (screenWidth >= 1024 && screenWidth < 1536) {
        numOfCardsOnHomePage = 4;
    } else if (screenWidth >= 1536) {
        numOfCardsOnHomePage = 5;
    }
    }

    return numOfCardsOnHomePage;
}