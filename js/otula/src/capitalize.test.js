import capitalize from "./capitalize"


test("Test capitalize.js", () => {
    const words = ["coder", "CODER", "Coder", "coDEr"]
    const result = "Coder"

    words.forEach(word => {
        expect(capitalize(word)).toEqual(result)
    })

})