using System;
using System.Linq;
using System.Text.RegularExpressions;
using NUnit.Framework;

namespace Test
{
    [TestFixture]
    public class Stuff
    {

        [Test]
        public void OCRInputWithGeneric()
        {

            var OCRInput = "Hello World, My Name is 'john'. ID of: 12213123";
            var onlyLetters = string.Empty;

            var distinctCharacters = String.Join("", OCRInput.Distinct().OrderBy(x => x));

            var letterFilter = new Regex("[^a-zA-Z]");
            var numbersAndSpecialCharactersFilter = new Regex("[^$&+,:;=?@#|'<>.^*()%!-^0-9]");

            var onlySpecialCharactersAndNumbers = numbersAndSpecialCharactersFilter.Replace(distinctCharacters, "");

            onlyLetters = letterFilter.Replace(distinctCharacters, "");

            var lettersInUpperCase = onlyLetters.ToUpper();

            var orderedUpperCaseLetters = String.Concat(lettersInUpperCase.OrderBy(x => x));
                

            var orderedLowerCaseLetters = orderedUpperCaseLetters.ToLower();

            var orderedSpecialCharactersAndNumbers = String.Concat(onlySpecialCharactersAndNumbers.OrderBy(x => x));

            Console.WriteLine(orderedLowerCaseLetters);
            Console.WriteLine(orderedSpecialCharactersAndNumbers + orderedUpperCaseLetters + orderedLowerCaseLetters);
        }

    }
}
