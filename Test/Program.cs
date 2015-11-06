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
        public void Main()
        {

            var OCRInput = "Hello World 12213123";
            var onlyLetters = string.Empty;

            var distinctCharacters = String.Join("", OCRInput.Distinct().OrderBy(x => x));

            var letterFilter = new Regex("[^a-zA-Z]");
            var numbersAndSpecialCharactersFilter = new Regex("[$&+,:;=?@#|'<>.^*()%!-]");

            var onlySpecialCharactersAndNumbers = numbersAndSpecialCharactersFilter.Replace(distinctCharacters, "");

            onlyLetters = letterFilter.Replace(distinctCharacters, "");

            var lettersInUpperCase = onlyLetters.ToUpper();

            var orderedUpperCaseLetters = lettersInUpperCase
                .OrderBy(x => x).ToString();

            var orderedLowerCaseLetters = orderedUpperCaseLetters.ToLower();

            var orderedSpecialCharactersAndNumbers = onlySpecialCharactersAndNumbers.OrderBy(x => x);

            Console.WriteLine(orderedUpperCaseLetters);
            Console.WriteLine(orderedSpecialCharactersAndNumbers + orderedUpperCaseLetters + orderedLowerCaseLetters);
        }

    }
}
