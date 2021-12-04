import every from "./every"


test("Test every.js", () => {
    const arr1 = [1, true, null, 'true']
    const pre1 = Boolean
    const result1 = false

    const arr2 = []
    const pre2 = Boolean
    const result2 = true

    const arr3 = [1,2,3]
    const pre3 = Number.isInteger
    const result3 = true

    expect(every(arr1,pre1)).toEqual(result1)
    expect(every(arr2,pre2)).toEqual(result2)
    expect(every(arr3,pre3)).toEqual(result3)

})