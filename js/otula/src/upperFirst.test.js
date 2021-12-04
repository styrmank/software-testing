Const subtract = require(”./upperFirst”)


describe(”Test upperFirst”, () => {
	test(”should check if first character is capital”, () => {
		expect(upperFirst("Testisana")).toEqual(true)
	})
})