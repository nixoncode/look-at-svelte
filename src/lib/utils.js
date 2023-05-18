/**
 * Generates a random number between 1 and 100
 * @returns {Promise<number>} A promise that resolves to the random number
 */
export async function getRandomNumber() {
    // return a new promise
    return new Promise((resolve, reject) => {
        // generate a random number between 1 and 100
        let randomNumber = Math.floor(Math.random() * 100) + 1;

        // resolve the promise with the number
        resolve(randomNumber);
    });
}