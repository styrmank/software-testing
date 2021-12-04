import reduce from "../reduce.js"


describe("Test reduce", () => {
	test("should reduce correctly", () => {
		expect(reduce([1,2], (sum, n) => sum + n, 0)).toEqual(3)
	})
})