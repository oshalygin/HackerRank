
(function() {

    describe("Warm Up", function() {

        it("Solve Me First", function() {

            var firstInput = "123";
            var secondInput = "11";
            var expected = 134;


            var firstInteger = parseInt(firstInput);
            var secondInteger = parseInt(secondInput);

            var sumCalculator = (x, y) => x + y;

            var actual = sumCalculator(firstInteger, secondInteger);

            expect(actual).toEqual(expected);

        });

        it("Simple Array Sum", function() {

            // Problem Statement

            // You are given an array of integers of size N. Can you find the sum of the elements in the array?

            // Input
            //  The first line of input consists of an integer N. The next line contains N space-separated integers representing the array elements.
            //  Sample:

            // 6

            // 1 2 3 4 10 11

            // Output
            //  Output a single value equal to the sum of the elements in the array.
            //  For the sample above you would just print 31 since 1+2+3+4+10+11=31.

            "use strict";
            let inputCacpacityOfValues = "5";
            let inputStringOfValues = "1 2 3 4 10 11";
            let expected = 31;
            let actual = 0;

            let numberOfValues = parseInt(inputCacpacityOfValues);
            let arrayOfValues = inputStringOfValues.split(" ");

            for (let value of arrayOfValues) {
                actual += parseInt(value);
            }

            expect(actual).toEqual(expected);

        });

    });


})();

