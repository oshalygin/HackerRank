(function() {
    // require('es6-shim');

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
            let cases = [
                { input: "07:05:45PM", expected: "19:05:45" },
                { input: "01:05:45PM", expected: "13:05:45" },
                { input: "12:00:00AM", expected: "00:00:00" },
                { input: "12:32:13AM", expected: "00:32:13" },
                { input: "12:30:00PM", expected: "12:30:00" },
                { input: "03:00:00AM", expected: "03:00:00" }
            ];

            for (let testCase of cases) {
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

                class Time {
                    hours: number;
                    minutes: number;
                    seconds: number;

                    toString(): string {

                        let substring = (this.hours < 10) ? "0" + this.hours.toString() : this.hours.toString();
                        substring += ":";
                        substring += (this.minutes < 10) ? "0" + this.minutes.toString() : this.minutes.toString();
                        substring += ":";
                        substring += (this.seconds < 10) ? "0" + this.seconds.toString() : this.seconds.toString();

                        return substring;

                    }
                }

                let secondsAndAfternoon = (argument: string) => {

                    let seconds: number = parseInt(argument.slice(0, 2));
                    let evening: boolean = false;

                    evening = argument.includes("PM") || argument.includes("pm");

                    let derp = "hello".includes("e");

                    return {
                        seconds: seconds,
                        evening: evening
                    };
                };

                let splitInputIntoBlocks: string[] = testCase.input.split(":");

                let secondsAndTimeOfDay = splitInputIntoBlocks[splitInputIntoBlocks.length - 1];
                let lastPortionOfTime = secondsAndAfternoon(secondsAndTimeOfDay);

                let outputTime = new Time();
                let initialHours = parseInt(splitInputIntoBlocks[0]);

                outputTime.hours =
                    (lastPortionOfTime.evening && initialHours !== 12)
                        ? initialHours + 12
                        : (!lastPortionOfTime.evening && initialHours == 12)
                            ? initialHours - 12
                            : initialHours;

                outputTime.minutes = parseInt(splitInputIntoBlocks[1]);
                outputTime.seconds = lastPortionOfTime.seconds;
                let actual = outputTime.toString();

                expect(actual).toEqual(testCase.expected);

            }
        });

        it("Plus Minus", function() {


            // Problem Statement

            // Given an array of integers, calculate which fraction of the elements are positive, negative, and zeroes, respectively. Print the decimal value of each fraction.

            // Input Format

            // The first line, N, is the size of the array.
            //  The second line contains N space-separated integers describing the array of numbers (A1,A2,A3,⋯,AN).

            // Output Format

            // Print each value on its own line with the fraction of positive numbers first, negative numbers second, and zeroes third.

            // Sample Input

            // 6
            // -4 3 -9 0 4 1

            // Sample Output

            // 0.500000
            // 0.333333
            // 0.166667

            // Explanation

            // There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
            //  The fraction of the positive numbers, negative numbers and zeroes are 36=0.500000, 26=0.333333 and 16=0.166667, respectively.

            // Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10−4 are acceptable.

            let input = "-4 3 -9 0 4 1";
            let expectedPositive = 0.500000;
            let expectedNegative = 0.333333;
            let expectedZero = 0.166667;
            let expectedPrecisionToDecimalPlaces = 5;

            let inputArray = input.split(" ");
            let arrayOfNumbers = inputArray.map((value) => parseInt(value));

            let numberOfPositiveIntegerValues = 0;
            let numberOfNegativeIntegerValues = 0;
            let numberOfZeroValues = 0;


            //function generators are not currently supported by typescript transpilation or babel.

            // let filter = function* (integers, predicate) {
            //     for (let integer of integers) {
            //         if (predicate(integer)) {
            //             return 1;
            //         }
            //     }
            // };


            // var stuff = filter(arrayOfNumbers, x=> x > 0);

            for (let number of arrayOfNumbers) {
                if (number > 0) {
                    numberOfPositiveIntegerValues += 1;
                }
                else if (number < 0) {
                    numberOfNegativeIntegerValues += 1;
                }
                else {
                    numberOfZeroValues += 1;
                }
            }

            let fractionOfPositiveNumbers = (numberOfPositiveIntegerValues / arrayOfNumbers.length).toFixed(6)
            let fractionOfNegativeNumbers = (numberOfNegativeIntegerValues / arrayOfNumbers.length).toFixed(6)
            let fractionOfZeroNumbers = (numberOfZeroValues / arrayOfNumbers.length).toFixed(6)


            expect(fractionOfPositiveNumbers).toBeCloseTo(expectedPositive, expectedPrecisionToDecimalPlaces);
            expect(fractionOfNegativeNumbers).toBeCloseTo(expectedNegative, expectedPrecisionToDecimalPlaces)
            expect(fractionOfZeroNumbers).toBeCloseTo(expectedZero, expectedPrecisionToDecimalPlaces);


        });

        it("Diagonal Difference", () => {

            // Problem Statement

            // Given a square matrix of size N×N, calculate the absolute difference between the sums of its diagonals.

            // Input Format

            // The first line contains a single integer, N. The next N lines denote the matrix's rows, with each line containing N space-separated integers describing the columns.

            // Output Format

            // Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

            // Sample Input
            // 3
            // 11 2 4
            // 4 5 6
            // 10 8 -12

            // Sample Output
            // 15

            // Explanation

            // The primary diagonal is:
            //  11
            //        5
            //              -12

            // Sum across the primary diagonal: 11 + 5 - 12 = 4

            // The secondary diagonal is:
            //              4
            //        5
            //  10
            //  Sum across the secondary diagonal: 4 + 5 + 10 = 19
            //  Difference: |4 - 19| = 15

            let diagonalSizeInput = "3";
            let expected = 15;
            let diagonalSizeInputNumber = parseInt(diagonalSizeInput);

            let inputArray = [];

            //Bunch of readline stuff here for the real HackerRank thing
            // for (let i = 0; i < diagonalSizeInputNumber; i++) {
            //     let lineInput = "11 2 4" //readLine();
            //     let lineArray = lineInput.split(" ");
            //     let arrayOfNumbers = lineArray.map(x => parseInt(x));
            //     inputArray.push(arrayOfNumbers);
            // }

            inputArray.push([11, 2, 4]);
            inputArray.push([4, 5, 6]);
            inputArray.push([10, 8, -12]);

            let firstDiagonal = 0;
            let secondDiagonal = 0;
            let j = 0;
            for (let i = 0; i < diagonalSizeInputNumber; i++) {
                firstDiagonal += inputArray[j][i];
                secondDiagonal += inputArray[i][diagonalSizeInputNumber - 1 - j];
                j++;
            }

            let actual = Math.abs(firstDiagonal - secondDiagonal);

            expect(actual).toEqual(expected);


        });

        it("Funny String", () => {

            // Suppose you have a string S that has the length N. It is indexed from 0 to N−1. String R is the reverse of string S. The string S is funny if the condition |Si−Si−1|=|Ri−Ri−1| is true for every i from 1 to N−1.

            // Note: Given a string str, stri denotes the ascii value of the ith character (0-indexed) of str. Here, |x| denotes the absolute value of an integer x.

            // Input Format

            // The first line of input will contain an integer T, the number of test cases. Each of the next T lines contains one string S.

            // Constraints
            // •1⩽T⩽10
            // •2⩽length of S⩽10000

            // Output Format

            // For each string, print Funny or Not Funny on separate lines.

            // Sample Input
            // 2
            // acxz
            // bcxz

            // Sample Output

            // Funny
            // Not Funny

            // Explanation
            // Consider the 1st test case: acxz

            // Here:
            // |c-a| = |x-z| = 2
            // |x-c| = |c-x| = 21
            // |z-x| = |a-c| = 2


            // Hence, the string is Funny.
            // Consider the 2nd test case: bcxz

            // Here:
            // |c-b| != |x-z|

            // Hence, the string is Not Funny.

            function reverseString(input: string) {
                let reverseString: string = "";
                for (let i = input.length; i > -1; i--) {
                    reverseString = reverseString + input.charAt(i);
                }
                return reverseString;
            }

            let testInput: string = "acxz";
            let expected: string = "Funny";

            let funny: string = "Funny";
            let notFunny: string = "Not Funny"
            let metCondition: boolean = false;

            let inputStringLength: number = testInput.length;
            let reverseOfInput: string = reverseString(testInput);




            metCondition = function isFunny() {
                let equivalent: boolean = true;
                for (let i = 1; i <= inputStringLength - 1; i++) {

                    let forwardXI: number = testInput.charCodeAt(i - 1);
                    let forwardXMinusI: number = testInput.charCodeAt(i);
                    let reverseXI: number = reverseOfInput.charCodeAt(i - 1);
                    let reverseXMinusI: number = reverseOfInput.charCodeAt(i);

                    let difference = Math.abs(forwardXI - forwardXMinusI)
                        - Math.abs(reverseXI - reverseXMinusI);

                    console.log(difference);

                    if (difference !== 0) {
                        equivalent = false;
                    }

                }
                return equivalent;

            } ();

            if (metCondition) {
                console.log(funny);
            }
            else {
                console.log(notFunny);
            }


        });

    });


})();

