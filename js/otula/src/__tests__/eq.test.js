import eq from "../eq.js"


test("Test eq.js", () => {
    const first = {"value" : 1}
    const second = {"value" : 1}

    const a1 = 'a'
    const a2 = 'a'

    expect(eq(first,second)).toEqual(false)
    expect(eq(a1, a2)).toEqual(true)
})