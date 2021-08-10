alert("Welcome to Dealskies!  The site that's easy to use, and easy to inspect its computer code.  In this way we hope that you better trust the computer code, thereby possibly limiting online cheating.  Simply right click on the browser window, and click on INSPECT, then navigate through the SOURCES to see the computer code.  Here at Dealskies we believe that a penny saved is a penny earned.  Soon you will be prompted to enter the highest price a buyer would buy for, and the lowest price a seller would sell for.  Then, the price is determined by finding the middle price between the two numbers (to 2 decimal places).  In this manner we hope that both parties walk away equally happy.  If both parties are too far apart to make a deal (meaning that the seller's bottom line is above the buyer's top line), you will be alerted the difference in prices (to 2 decimal places), and that no deal could be made.  Feel free to check out the formula used in the source code now.");

var s = prompt("Please enter the lowest price you are willing to sell for.  Then press OK, and pass your phone or tablet to the buyer."); 

s = parseFloat(s);

var b = prompt("Please enter the highest price you are willing to buy for.");

b = parseFloat(b);


////////    The formula used is written below.        ////////////

var price = (b+s)/2;

///////////////////////////////////////////////////////////////////


var difference = (b-s).toFixed(2);

if(s>0 && b>0 && (difference)>=0){ /////////////  This checks to make sure that a deal is possible.
alert("The determined price is: " + price.toFixed(2));
}
else{
 alert("Sorry, but both parties were off by " + Math.abs(difference) + ", and no deal could be made.  Either a party did not put in a valid number, or you are both too far apart.");
}

