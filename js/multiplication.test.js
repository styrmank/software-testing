const multiplication = require("./multiplication")


describe("Test multiplication", () => {

	test("should work", () => {
		expect(multiplication(2,3)).toEqual(6)
	})
})
