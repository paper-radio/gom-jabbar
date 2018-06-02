/*
 * app.js
 *
 * The entrypoint to the application.
 */

/**
 * Ask the function if a person is a dork
 *
 * @param {any} name
 * @returns {string} snark
 */
function isADork(name) {
    if (name === "alex") {
        return "Yes, Alex is a dork.";
    }

    return "I don't know... Do they like Dr. Who?";
}
console.log("Hello, World!");
console.log("To infinity and BEYOND!");
