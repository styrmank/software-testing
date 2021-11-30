const sum = require("./sum")



describe("Test sum", () => {
	test("should sum correctly", () => {
		const a = 1
		const b = 1
		const output = 2
		
		expect(sum(a,b)).toEqual(output)
	})
})