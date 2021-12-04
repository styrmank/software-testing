import upperFirst from "./upperFirst"



	test("should check if first character is capital", () => {
		expect(upperFirst("testisana")).toEqual("Testisana")
	})
