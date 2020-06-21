////////// Java Script Assignment 2 Starting//////////


///// Chapter 21 to 25 ////////


///////// Question 1 ///////////////

// var firstName = prompt("enter first name")
// var lastName = prompt("enter last name")
// var fullName = (firstName + lastName)

// alert("Your FullName is " +fullName)



// //////////// Question 2 ///////////

// var model = prompt("Enter your Favourite mobile model")

// document.write("The model is " +model +" " +"<br>"+ "Length of String is " +model.length)



////////// Question 3 /////////////

// var string = "Pakistani"
// var len = string.indexOf('n')

// document.write("String: " + string + "<BR> Index of 'n': " + len)



////////// Question 4 /////////////

// var string = "Hello world"
// var len = string.lastIndexOf('l')

// document.write("String: " + string + "<BR> Last Index of 'l': " + len)



////////// Question 5 ////////

// var string = "Pakistani"
// var ch = string.charAt(3);

// document.write("String: " + string + "<br> Character at Index 3 : " + ch)



/////// Question 6 ////////

// var firstName = prompt("Enter first Name")
// var lastName = prompt("Enter last Name")
// var fullName = firstName.concat(' ' + lastName)

// alert("Your Fullname is " + fullName)



///////// Question 7 //////////

// var city = "Hyderabad"

// var city2 = city.replace('Hyder', 'Islam')

// document.write("City: " + city + "<br> After replacement: "+ city2)

//////////// Question 8/////////////

// var message = "Ali and Sami are best friends. They play cricket and football together."

// var spliting= message.split("and").join("&")

// document.write ("<h1> After Split </h1> <br>" +spliting ) 

// /////////////Question 9 ////////////

// var string = "472"

// document.write("Value: "+ string +"<BR>"+ "Type: "+ typeof (string)+ "<BR>"+ "Value: "+ (string =+string) + "<BR>"+ "Type: "+ typeof (string) )


// //////////// Question 10 ///////////

// var input = "peanuts"
// var upper = input.toUpperCase()

// document.write("User input: "+ input+ "<BR>"+"Upper case: " +upper)




///////////// Quesiton 11 /////////////

// var userInp = prompt("Enter Your Name")
// var tittleCase = userInp[0].toUpperCase()

// var show=(tittleCase + userInp.slice(1))
// document.write("User Input :" +" " +userInp + "<br>")
// document.write("Tittle Case : "+" " +show + "<br>")



///////// Quesiton 12 /////////


// var num = prompt("Enter a decimal number")
// var show = num.split('.').join("")

// document.write("Number: " + num + "<br> Result: " + show )

////////// Question 13 ////////

// var Uname = prompt("Enter  Your Name")

// Uname = Uname.toLowerCase()
// var check = false

// for (i = 0; i < Uname.length; i++) {
//     if (Uname.slice(i, i + 1).charCodeAt() == 33 || Uname.slice(i, i + 1).charCodeAt() == 44  || Uname.slice(i, i + 1).charCodeAt() == 46 || Uname.slice(i, i + 1).charCodeAt() == 64 ) {
//         check = true;
//     } else {
//         check = false;
//     }
// }

// if (check == true) {
//     alert("please enter a correct user name")
// } else {
//    alert (Uname)
// }



//////////Question 14 ///////////

// var items = ["cake", "apple pie", "cookie", "chips", "patties"]
// var input = prompt("Welcome to ABC Bakery! What you want? sir / ma'am")
// var isFound = false 
// input = input.toLowerCase()

// for (i = 0; i < items.length; i++) {
//     if (input === items[i]) {
//         alert(input + " is available at index " + i + " in our bakery")
//         isFound = true
//         break
//     }
// }
// if (isFound === false) {
//     alert("We are sorry. " + input + " is not availabale in our bakery sir / ma'am")
// }

//////// Question 15 ////////

// var string = prompt("Enter your Passsword");
// var flag = 0
// var count = 0
// var check = +string.slice(0, 1)

// if (check.toString() != "NaN") {
//     flag++
// } else {
//     for (i = 0; i < string.length; i++) {
//         var concat = +string.slice(i, i + 1)
//         if (concat.toString() == "NaN") {
//             count++
//         }
//     }
// }

// if (flag == 1 || count == string.length) {
//     alert("Password does not meet our requirements")
// } else {
//     alert(" Correct Passsword ")
// }


//////////// Question 16 ///////////////

// var university = "University of Karachi";
// var uni = university.split("")

// for (i = 0; i < university.length; i++) {
//     document.write(uni[i]);
// }



/////////////////Question 17 //////////

// var userinput = prompt( "Enter a String");
// var LastInp = userinput.slice(userinput.length - 1)

// document.write("User input " + userinput +"<br>")
// document.write("Last character of input:" + LastInp)




/////////// Question 18 ///////////////

// var string = "The quick brown fox jumps over the lazy dog"
// var flag = 0
// var find = "the"
// var textcheck = string.toLowerCase()

// for (i = 0; i < textcheck.length; i++) {
//     display = textcheck.slice(i, (find.length) + i)

//     if (find == display) {
//         flag++
//     }
// }
// document.write(string+ "<br>")
// document.write("There are " + flag + " occurrence(s) of word 'the' in the string")








/////////////////// Chapter 26 to 30 //////////////////


///////////// Question 1 /////////////

// var num = +prompt("Enter a Possitive Numbers")

// document.write("Number: " + num)
// document.write("floor value " + Math.round(num))
// document.write("Round of value " + Math.floor(num))
// document.write("ceil value " + Math.ceil(num))




// ////////////Question 2 /////////////


// var num = +prompt("Enter a Negative floating numbers")

// document.write("Number: " + num)
// document.write("floor value " + Math.round(num))
// document.write("Round of value " + Math.floor(num))
// document.write("ceil value " + Math.ceil(num))

//////////Question 3 ////////////

// var num = +prompt("Enter a number for Absolute value")

// document.write("The Absolute value of: " + num + " is " + Math.abs(num))


////////Question 4 ////////////

// var dice = Math.floor(6 * Math.random() + 1)

// document.write("Random Dice Value : " + dice)



/////////// Question 5 /////////

// var coin = Math.floor(2 * Math.random() + 1)

// if (coin === 2) {
//     document.write(coin + " Random coin value: Head")
// } else if (coin === 1) {
//     document.write(coin + " Random coin value: Tail")
// }


///////////// Question 6 ///////////

// var num = Math.floor(100 * Math.random() + 1)

// document.write("Random number between 1 to 100: " + num)



/////////// Question 7 //////////

// var inp = prompt("Enter your weight")
// inp = inp.toLowerCase()
// var weight = inp.split("k")

// document.write("Your weight is " + weight[0] + " Kilograms")


//////// Question 8 ///////////

// var num = Math.floor(Math.random() * 10)
// var input = +prompt("Enter a number between 1 and 10")

// if (input === num) {
//     alert("Congratulations!")
// } else {
//     alert("Please try again")
// }




///////////////////////// Chapter 30 to 34 /////////////////////





////////////// Question 1 ///////////
// alert(new Date())


////////////// Question 2 ///////////

// var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// var date = new Date()
// var currentMonth = date.getMonth()

// alert("Current Month is : "+month[currentMonth])



////////////// Question 3 ///////////

// var day = prompt("Enter day")

// day = day.slice(0, 3)

// alert("Day  is : "+day)



////////////// Question 4 ///////////

// var day = prompt("Enter day")
// day = day.toLowerCase()

// if (day === "sunday" || day === "sataurday") {
//     alert("It's fun day")
// } else {
//     alert("Not a Fun day")
// }


////////////// Question 5 ///////////

// var date = +prompt("Enter date")

// if (date === 1 || date <= 15) {
//     alert("First fifteen days of month")
// } else if (date > 15 && date <= 31) {
//     alert("Last fifteen days of month")
// } else {
//     alert("Please enter correct date")
// }


////////////// Question 6 ///////////

// var Date1 = new Date();
// var Date2 = new Date(01 / 01 / 70);
// var min = Date1.getFullYear() - Date2.getFullYear();
// document.write("Current Date is : " +Date1+ "<br>")
// document.write("Elapsed minutes since 1970 :" + min * 365 * 24 * 60 +"<br>");
// document.write("Elapsed miliseconds since 1970 :" + min * 365 * 24 * 60 * 60);


////////////// Question 7 ///////////

// var Time = new Date()

// Time = Time.getHours()
// if (Time <= 12) {
//     alert("It's AM")
// } else {
//     alert("It's PM")
// }


////////////// Question 8 ///////////

// var laterDate = new Date("12/31/19")
// var sec = new Date - laterDate

// day = sec / (24 * 60 * 60 * 1000)

// document.write("Later Date :" +laterDate)


////////////// Question 9 ///////////

// var a = new Date()
// var b = new Date(06 / 18 / 15)
// var c = a - b

// document.write(c / (1000 * 60 * 60 * 24))


////////////// Question 10 ///////////

// var oldDate = new Date("jan 1,2015")
// var newDate = new Date("dec 5, 2015")
// var newday = newDate.getTime() - oldDate.getTime()
// var oldday = newday / (1000 * 3600 * 24)
// var seconds = oldday * 86400

// alert(
//     "on the reference date : " + newDate + "\n" + seconds + " seconds had passed since the beinning of 2015"
// )



//////////// Question 11/////////////////

// var currentTime = new Date();
// var oneHour = new Date();
// var oldHour = oneHour.setHours(oneHour.getHours() - 1);
// var oldTime = new Date(oldHour)

// document.write("Curent Date: " + currentTime +" <br>" +" 1 hour ago, it was " + oldTime)



////////// Question 12/////////////////

// var oneYear = new Date();
// var oldyear = oneYear.setYear(oneYear.getFullYear() - 100);
// var oldTime = new Date(oldyear)

// document.write("Curent Date: " + oneYear + "<br>" +" 100 Year back, it was " + oldTime)


//////////// Question 13/////////////////

// var currentYear = new Date()
// var getUserdate = prompt("mm/dd/yy")
// var date = new Date(getUserdate)
// var diff = currentYear - date
// var age = diff / (24 * 60 * 60 * 1000 * 365)
// var birthYear = currentYear.getFullYear() - age

// document.write("Your birthday year: " + birthYear)
// document.write("Your age is: " + age)



//////////// Question 14/////////////////

// A

// var name = prompt("Enter Your Name");


// // B

// var date = new Date()
// var month = date.getMonth()


// // C

// var units = prompt("Enter  no of Units ")


// // D

// var Unitcharges = prompt("Enter Charges of Units ")


// // E

// var netAmount = units * Unitcharges


// // F

// var dueDateCharge = 300


// // G

// var grossAmount = netAmount + dueDateCharge

//  document.write ("Customer Name " + name +"<br>")
//  document.write ("Month " + month+"<br>")
//   document.write("Number of Units: " + units+"<br>")
// document.write ("Charges per Unit: " + Unitcharges+"<br>")
// document.write ("Net Amount Payable Within Due Date): " + netAmount+"<br>")
// document.write("Late payment surcharge: " + dueDateCharge+"<br>")
// document.write("Gross Amount payable(after Due Date): " + grossAmount+"<br>")





////////////////////////////  Chapter 34 to 38 /////////////////////////






////////////////Question 1 ////////////////

// function date() {
//     document.write(new Date())
// }
// date()


////////////////Question 2 ////////////////

// function fullName(firstName, lastName) {
//     document.write("Hello !" + firstName + " " + lastName)
// }
// fullName("Farwa", "Khan")


////////////////Question 3 ////////////////

// function sum(num1, num2) {
//     document.write(num1 + num2)
// }
// sum(2, 6)


////////////////Question 4 ////////////////

// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             return num1 + num2
//         case "-":
//             return num1 - num2
//         case "*":
//             return num1 * num2
//         case "/":
//             return num1 / num2
//     }
// }


////////////////Question 5 ////////////////
// function squareRoot(num) {
//     return num * num
// }


////////////////Question 6 ////////////////

// function factorial(num) {
//     if (num == 0)
//         return 1;
//     else {
//         return (num * factorial(num - 1));
//     }
// }
// factorial(5)


////////////////Question 7 ////////////////




// function counting (){

//     var num1 = +prompt("Enter number to star counting")
//     var num2 = +prompt("Enter number to end counting")
// for (var i = num1; i <= num2; i++)
// {

// document.write(i +"<br>")
// }
// }
// counting()



////////////////Question 8 ////////////////

// function Hypotenuse(base, perpendicular) {
//     function Square(num) {
//         return num * num
//     }
//     var hypotenuse = Square(base) + Square(perpendicular)
//     return Square(hypotenuse)
// }



////////////////Question 9 ////////////////


// function RectangleArea(width, height) {
//     return width * height
// }
// RectangleArea(4, 5)


////////////////Question 10 ////////////////

// function isPalindrome(word) {
//     var reverseText = word.split('').reverse().join('')

//     if (reverseText === word) {
//         alert(word + " is palindrome")
//     } else {
//         alert(word + " is not palindrome")
//     }
// }
// isPalindrome("civic")

////////////////Question 11 ////////////////

// var string = "the quick brown fox jumps over the lazy dog"

// function upperCase(string1) {
//     string1 = string1.split(" ")
//     var array = []
//     for (var i = 0; i < string1.length; i++) {
//         array.push(string1[i].charAt(0).toUpperCase() + string1[i].slice(1))
//     }
//     return array.join(" ")
// }
// document.write("Example String : " + string +"<br>")
// document.write("Expected Outputc: " + upperCase(string))


////////////////Question 12 ////////////////

// function longestword(string) {
//     var arr = string.match(/\w[a-z]{0,}/gi);
//     var result = arr[0];

//     for (var i = 1; i < arr.length; i++) {
//         if (result.length < arr[i].length) {
//             result = arr[i];
//         }
//     }
//     return result;
// }
// document.write(find_longestword('Web Development Tutorial'));

// Quesition (13)
// function CharCounts(string) {
//     var uchars = {};
//     string.replace(/\S/g, function (l) {
//         uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);
//     });
//     return uchars;
// }
// document.write(CharCounts("The quick brown fox jumps over the lazy dog"));



// //Question (14)

// function circumference(radius) {
//     var circle = 2 * Math.PI * radius;
//     alert("The circumference is " + Math.floor(circle))
// }
// circumference(3)

// function Area(radius) {
//     var circle = Math.PI * (radius * radius)
//     alert("The Area is: " + Math.floor(circle))
// }
// Area(3)




///////////////////// Assingnent  Complete /////////////////















