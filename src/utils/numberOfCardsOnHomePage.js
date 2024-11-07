export function numberOfCardsOnHomepage() {
    let numOfCardsOnHomePage;
    

    if (typeof window !== "undefined") {
        const screenWidth = window.innerWidth;
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