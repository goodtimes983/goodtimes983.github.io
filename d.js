alert("Welcome to Dealskies!  The site that's easy to use, and easy to inspect its computer code.  In this way we hope that you better trust the computer code, thereby possibly limiting online cheating.  Simply right click on the browser window, and click on INSPECT, then navigate through the SOURCES to see the computer code.  In this site you will be prompted to enter the highest price a buyer would buy for, and the lowest price a seller would sell for.  Then, the price is determined by finding the price (to 2 decimal places) that is equal in percentage as it is from the seller's bottom price, as it is to the buyer's top price.  In this manner we hope that both parties walk away equally happy.  Feel free to check out the formula used in the source code now.");

var s = prompt("Please enter the lowest price you are willing to sell for."); 

var b = prompt("Please enter the highest price you are willing to buy for.");

////////    The formula used is written below.        ////////////

var price = Math.sqrt(s*b);

///////////////////////////////////////////////////////////////////

alert("The determined price is: " + price.toFixed(2));



