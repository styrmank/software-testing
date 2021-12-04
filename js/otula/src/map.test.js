import map from "./map"

function square (n) {
return n * n
}

describe("Test map", () => {
	test("should return array", () => {
		expect(map([4,8], square)).toEqual([16, 64])
	})
})