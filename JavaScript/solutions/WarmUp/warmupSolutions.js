(function () {
    describe("Warm Up", function () {
        it("Solve Me First", function () {
            var firstInput = "123";
            var secondInput = "11";
            var expected = 134;
            var firstInteger = parseInt(firstInput);
            var secondInteger = parseInt(secondInput);
            var sumCalculator = function (x, y) { return x + y; };
            var actual = sumCalculator(firstInteger, secondInteger);
            expect(actual).toEqual(expected);
        });
        it("Simple Array Sum", function () {
            "use strict";
            var inputCacpacityOfValues = "5";
            var inputStringOfValues = "1 2 3 4 10 11";
            var expected = 31;
            var actual = 0;
            var numberOfValues = parseInt(inputCacpacityOfValues);
            var arrayOfValues = inputStringOfValues.split(" ");
            for (var _i = 0; _i < arrayOfValues.length; _i++) {
                var value = arrayOfValues[_i];
                actual += parseInt(value);
            }
            expect(actual).toEqual(expected);
        });
        it("A Very Big Sum", function () {
            var inputCapacityOfValues = "5";
            var inputStringOfValues = "1000000001 1000000002 1000000003 1000000004 1000000005";
            var expected = 5000000015;
            var actual = 0;
            var sum = function (array) {
                var result = 0;
                for (var _i = 0; _i < array.length; _i++) {
                    var val = array[_i];
                    result += val;
                }
                return result;
            };
            var arrayOfStringValues = inputStringOfValues.split(" ");
            var arrayOfNumbers = arrayOfStringValues.map(function (value) {
                return parseInt(value);
            });
            actual = sum(arrayOfNumbers);
            expect(actual).toEqual(expected);
        });
        it("Time Conversion", function () {
            var isAfternoon = function (argument) {
                var seconds = parseInt(argument.slice(0, 2));
                var evening = false;
                return {
                    seconds: seconds,
                    evening: evening
                };
            };
            var timeInput = "07:05:45PM";
            var splitInputIntoBlocks = timeInput.split(":");
            var secondsAndTimeOfDay = splitInputIntoBlocks[splitInputIntoBlocks.length - 1];
            var lastPortionOfTime = isAfternoon(secondsAndTimeOfDay);
            console.log(lastPortionOfTime.evening);
        });
    });
})();
