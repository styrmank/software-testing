import isEmpty from "./isEmpty"


describe("Test if is empty", () => {
	test("should tell if empty", () => {
		expect(isEmpty(1)).toEqual(true)
	})
})