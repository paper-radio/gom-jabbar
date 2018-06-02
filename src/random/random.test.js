const isADork = require("./random");

test("tells Alex he is a dork", () => {
    expect(isADork("alex")).toBe("Yes, Alex is a dork.");
});
