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
            var inputCacpacityOfValues = "5";
            var inputStringOfValues = "1 2 3 4 10 11";
            var expected = 31;
            var actual = 0;
            var numberOfValues = parseInt(inputCacpacityOfValues);
            var arrayOfValues = inputStringOfValues.split(" ");
            for (var _i = 0; _i < arrayOfValues.length; _i++) {
                var value = arrayOfValues[_i];
                actual += parseInt(value);
                console.log(value);
            }
            expect(actual).toEqual(expected);
        });
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FybXVwU29sdXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FybXVwU29sdXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLENBQUM7SUFFRyxRQUFRLENBQUMsU0FBUyxFQUFFO1FBRWhCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUVqQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUduQixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTFDLElBQUksYUFBYSxHQUFHLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxDQUFDO1lBRXBDLElBQUksTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFeEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyQyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtZQUVuQixvQkFBb0I7WUFFcEIsbUdBQW1HO1lBRW5HLFFBQVE7WUFDUix3SUFBd0k7WUFDeEksV0FBVztZQUVYLElBQUk7WUFFSixnQkFBZ0I7WUFFaEIsU0FBUztZQUNULHdFQUF3RTtZQUN4RSx3RUFBd0U7WUFHeEUsSUFBSSxzQkFBc0IsR0FBRyxHQUFHLENBQUM7WUFDakMsSUFBSSxtQkFBbUIsR0FBRyxlQUFlLENBQUM7WUFDMUMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztZQUVmLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3RELElBQUksYUFBYSxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuRCxHQUFHLENBQUMsQ0FBYyxVQUFhLEVBQTFCLHlCQUFTLEVBQVQsSUFBMEIsQ0FBQztnQkFBM0IsSUFBSSxLQUFLLEdBQUksYUFBYSxJQUFqQjtnQkFDVixNQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9