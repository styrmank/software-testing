import reduce from "./reduce"


describe(”Test reduce”, () => {
	test(”should reduce correctly”, () => {
		expect(isEmpty([1,2], (sum, n) => sum + n, 0)).toEqual(3)
	})
})