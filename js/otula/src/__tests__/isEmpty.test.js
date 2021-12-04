import isEmpty from "../isEmpty.js"


describe("Test if is empty", () => {
	test("should tell if empty", () => {
		expect(isEmpty(1)).toEqual(true)
	})
})