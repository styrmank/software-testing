import add from "./add"

test("Test add.js", () => {
    const arg1 = 5
    const arg2 = 6
    const result = 11

    expect(add(arg1,arg2)).toEqual(result)
}) 