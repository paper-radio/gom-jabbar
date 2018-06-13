/*
 * app.js
 *
 * The entrypoint to the application.
 */

console.log("Once you POP you just can't stop");
console.log("Hello, World!");
console.log("To infinity and BEYOND!");

// ---- Start of counter example ----
console.log("\n\n---\n\n");
function actionCreator() {
    return {
        type: "INCREASE_COUNT"
    };
}

const anAction = actionCreator();

console.log(
    "Here is the action made with the action creator function",
    anAction
);
console.log("\n\n---\n\n");
// ---- End of counter example ----
console.log("Fin");
