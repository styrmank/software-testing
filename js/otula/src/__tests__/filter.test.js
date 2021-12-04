import filter from "../filter.js"


test("Test filter.js", () => {
    const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'fred',   'active': false }
    ]
    const result = [{ 'user': 'barney', 'active': true }]

    expect(filter(users, ({active}) => active)).toEqual(result)

})