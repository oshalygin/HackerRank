
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
            let actual: number = 0;


            let numberOfValues = parseInt(inputCacpacityOfValues);
            let arrayOfValues = inputStringOfValues.split(" ");

            for (let value of arrayOfValues) {
                actual += parseInt(value);
            }

            expect(actual).toEqual(expected);

        });

        it("A Very Big Sum", function() {

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

            let inputCapacityOfValues = "5";
            let inputStringOfValues = "1000000001 1000000002 1000000003 1000000004 1000000005";
            let expected = 5000000015;
            let actual = 0;

            let sum = (array) => {
                let result = 0;
                for (let val of array) {
                    result += val;
                }
                return result;
            };

            let arrayOfStringValues = inputStringOfValues.split(" ");

            let arrayOfNumbers = arrayOfStringValues.map(function(value) {
                return parseInt(value);
            });

            actual = sum(arrayOfNumbers);
            expect(actual).toEqual(expected);


        });

        it("Time Conversion", function() {

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


            let isAfternoon = (argument: string) => {

                let seconds: number = parseInt(argument.slice(0, 2));
                let evening: boolean = false;

                // evening = argument.includes("PM") || argument.includes("pm");
                return {
                    seconds: seconds,
                    evening: evening
                };
            };

            let timeInput = "07:05:45PM";
            let splitInputIntoBlocks: string[] = timeInput.split(":");

            let secondsAndTimeOfDay = splitInputIntoBlocks[splitInputIntoBlocks.length - 1];
            let lastPortionOfTime = isAfternoon(secondsAndTimeOfDay);

            console.log(lastPortionOfTime.evening);

        });

    });


})();

