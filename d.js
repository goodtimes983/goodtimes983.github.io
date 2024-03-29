alert("Welcome to Dealskies, a place to bargain over unique items!  Here at Dealskies we believe that a penny saved is a penny earned.  Soon you will be prompted to enter the highest price a buyer would buy for, and the lowest price a seller would sell for.  Then, the price is determined by finding the middle price between the two numbers (to 2 decimal places).  In this manner we hope that both parties walk away equally happy.  If both parties are too far apart to make a deal (meaning that the seller's bottom line is above the buyer's top line), you will be alerted the difference in prices (to 2 decimal places), and that no deal could be made.  Note that this site should work better if both parties agree to walk away if no deal can be made.  In this manner, the prices should be more genuine.");

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


