const app = require("./trafficlight");

describe("test suite traffic light", () => {
    it("case red light", () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });

    it("case green light", () => {
        expect(app.trafficLight("green")).toBe("WALK!");
    });

    it("case out of order (no argument)", () => {
        expect(app.trafficLight()).toBe("OUT OF ORDER");
    });

    it("case orange light", () => {
        expect(app.trafficLight("orange")).toBe("ATTENTION!");
    });
});
