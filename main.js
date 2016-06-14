


// Repetition (function returns the sum of numbers between start,end)
function sum(start , end){
	if(start <= end){
		if (start === end){
			return end;
		}
		return start + sum(start+1 , end);
  }
  return sum(end , start);
}

// while loop
function greet(n){
	var result = "";
	var x=1;
	
	while (x<n){
		if(x===1){ 
			result = "welcome"+x;
		}
		var y=2;
		while(y<=x){
			
			if (y===(x-1)){
				result = result + "and"+(x-1);
			}
			result = result + "welcome"+x + " " + "meet 1" + "," + y;
			y=y+1;
		}
		result = result + "\n";
		x=x+1;
	}
	result = "'" + result + "'";
	return result;
}

function meetAndGreet(n){
	var result = "";
	var counter = 1;
	while(counter <= n)
	{
	    result = result + "Welcome " + counter ;
	    if (counter>1)
	    {
	        result=result+", meet";
	      	var cnt=1;
	      	while(counter>cnt)
	      	{
	      		if(cnt !== 1)
	      		{
	      			result = result + " and ";
	      		}
	      		result=result + cnt;
	      		cnt=cnt+1;
	      	}
	    }
	    result = result+"\n";
	    counter= counter+1;
	}
    return result;
}

function meetAndGreet(n) {
  var counter = 1;
  var innerCounter;
  var total = '';
  var linebreak = '\n';
  var comma = ', ';

  while (counter <= n) {
    if (n === 1) {
      total = 'welcome ' + counter
    } else if (counter === 1) {
      total = 'welcome ' + counter + linebreak;
    } else {
      total = total + 'welcome ' + counter + comma + 'meet ';
      innerCounter = 1;
      while (innerCounter < counter) {
        if (innerCounter === counter - 2) {
          total = total + innerCounter + ' and ';
        } else if (innerCounter === counter - 1) {
          total = total + innerCounter;
        } else {
          total = total + innerCounter + comma;
        }
        innerCounter = innerCounter + 1;
      }
      total = total + linebreak;
    }
    counter = counter + 1;
  }
  return total;
}


// while loop
// Factorial of n
function factorial(n) {
  var counter = 1;
  var total = 1;
  while (counter <= n) {
    total = total * counter;
    counter = counter + 1;
  }
  return total;
}


// Guess My Number Game
var upperbound = 7; 
var corr = undefined;
var i = 0;

function guessMyNumber(n) {
    i = i +1;
    if (corr === undefined) {
        corr = randInt(upperbound);          
    }
    
    if (n > upperbound) {
      return "Out of bounds! Please try a number between 0 and" + upperbound;

    } else if (n === corr) {
      corr = randInt(upperbound);
      var count = i;
      i = 0;
      return "You guessed " + n + " in " + count + " guesses!";
    } else {
      return "Nope! That wasn't it! " + corr;
    }    
}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}

// Write a function called min that finds the smallest number in an array of numbers.
function min(arr){
	var minimum = arr[0];
	for(i=1 ; i<arr.length ; i++){
		if(arr[i] < minimum){
			minimum = arr[i];
		}
	}
	return minimum;
}

// WHY is it WRONG ???
// Write a function countCharacters that, when given a string as an argument, 
// returns an object containing counts of the occurrences of each character in the string.
function countCharacters(str){
	var arr = str.split("");
	var obj = {};
	var count=1;
	for(i=0 ; i<arr.length ; i++){
		
		for(y=i+1 ; y<arr.length ; y++){
			
			if(arr[i]===arr[y]){
				count = count + 1;
			}
		}
		obj[arr[i]] = count;
	}
	return obj;
}


// WHY is it WRONG ???
//Dublicate arry items using recursion instead of for loop



function dubArr(arr){
	newArr=[];
	for(var i=0 ; i<arr.length ; i++){
		newArr.push(2*arr[i]);
	}
	return newArr;
}


// each:
function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}

function square(nums){
	var acc = {};
	each(nums , function(x , key){
		         acc[key] = x*x;
									});
	return acc ;
}


// map :
function map(coll, f) {
  var newColl = [];
  if (!Array.isArray(coll)) {
    newColl = {};
  }
  each(coll, function(element, key) {
  			  newColl[key] = f(element, key);
 											 });

  return newColl;
}

// filter:
function filter(array, predicate) {
  var newAr = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      newAr.push(element);
    }
  });
  return newAr;
}

zeft
