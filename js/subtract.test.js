const subtract = require("./subtract")


describe("Test subtract", () => {
	test("should subtract correctly", () => {
		expect(subtract(3,4)).toEqual(-1)
	})
})
