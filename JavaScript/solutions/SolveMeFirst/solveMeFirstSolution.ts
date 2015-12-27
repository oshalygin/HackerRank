
(function() {

    describe("Solve Me First Solution", function () {

        it("first test case", function () {

            var firstInput = "123";
            var secondInput = "11";
            var expected = 134;


            var firstInteger = parseInt(firstInput);
            var secondInteger = parseInt(secondInput);

            var sumCalculator = (x, y) => x + y;

            var actual = sumCalculator(firstInteger, secondInteger);

            expect(actual).toEqual(expected);

        });

    });


})();

