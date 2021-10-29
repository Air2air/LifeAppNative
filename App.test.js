const App = require("./App")
// @ponicode
describe("App.addTwoNumbers", () => {
    test("0", () => {
        let result = App.addTwoNumbers(2, 10)
        expect(result).toBe(12)
    })
})
