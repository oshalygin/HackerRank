/// <reference path="../es6polyfills.ts"/>
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
            // Problem Statement
            // You are given an array of integers of size N. You need to print the sum of the elements in the array, keeping in mind that some of those integers may be quite large.
            // Input
            // The first line of the input consists of an integer N. The next line contains N space-separated integers contained in the array.
            // Constraints
            // 1≤N≤10
            // 0≤A[i]≤1010
            // Sample Input
            //  5
            //  1000000001 1000000002 1000000003 1000000004 1000000005
            // Output
            //  Print a single value equal to the sum of the elements in the array. In the above sample, you would print 5000000015.
            // Note: The range of the 32-bit integer is (−231) to (231−1) or [−2147483648,2147483647].
            //  When we add several integer values, the resulting sum might exceed the above range. You might need to use long long int in C/C++ or long data type in Java to store such sums.
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
            var cases = [
                { input: "07:05:45PM", expected: "19:05:45" },
                { input: "01:05:45PM", expected: "13:05:45" },
                { input: "12:00:00AM", expected: "00:00:00" },
                { input: "12:32:13AM", expected: "00:32:13" },
                { input: "12:30:00PM", expected: "12:30:00" },
                { input: "03:00:00AM", expected: "03:00:00" }
            ];
            for (var _i = 0; _i < cases.length; _i++) {
                var testCase = cases[_i];
                // Problem Statement
                // Given a time in AM/PM format, convert it to military (24-hour) time.
                // Note: Midnight is 12:00:00AM on a 12-hour clock and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock and 12:00:00 on a 24-hour clock.
                // Input Format
                // A time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM), where 01≤hh≤12.
                // Output Format
                // Convert and print the given time in 24-hour format, where 00≤hh≤23.
                // Sample Input
                // 07:05:45PM
                // Sample Output
                // 19:05:45
                // Explanation
                // 7 PM is after noon, so you need to add 12 hours to it during conversion. 12 + 7 = 19. Minutes and seconds do not change in 12-24 hour time conversions, so the answer is 19:05:45.
                var Time = (function () {
                    function Time() {
                    }
                    Time.prototype.toString = function () {
                        var substring = (this.hours < 10) ? "0" + this.hours.toString() : this.hours.toString();
                        substring += ":";
                        substring += (this.minutes < 10) ? "0" + this.minutes.toString() : this.minutes.toString();
                        substring += ":";
                        substring += (this.seconds < 10) ? "0" + this.seconds.toString() : this.seconds.toString();
                        return substring;
                    };
                    return Time;
                })();
                var secondsAndAfternoon = function (argument) {
                    var seconds = parseInt(argument.slice(0, 2));
                    var evening = false;
                    evening = argument.includes("PM") || argument.includes("pm");
                    var derp = "hello".includes("e");
                    return {
                        seconds: seconds,
                        evening: evening
                    };
                };
                var splitInputIntoBlocks = testCase.input.split(":");
                var secondsAndTimeOfDay = splitInputIntoBlocks[splitInputIntoBlocks.length - 1];
                var lastPortionOfTime = secondsAndAfternoon(secondsAndTimeOfDay);
                var outputTime = new Time();
                var initialHours = parseInt(splitInputIntoBlocks[0]);
                outputTime.hours =
                    (lastPortionOfTime.evening && initialHours !== 12)
                        ? initialHours + 12
                        : (!lastPortionOfTime.evening && initialHours == 12)
                            ? initialHours - 12
                            : initialHours;
                outputTime.minutes = parseInt(splitInputIntoBlocks[1]);
                outputTime.seconds = lastPortionOfTime.seconds;
                var actual = outputTime.toString();
                expect(actual).toEqual(testCase.expected);
            }
        });
    });
})();
