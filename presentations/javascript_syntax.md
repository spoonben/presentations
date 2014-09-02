#JavaScript Syntax
The principles by which sentences are constructed in a language.


## Variables
Things stored in the browser's memory



## Declaring Variables
	var quantity

[var] is the variable keyword

[quantity] is the variable name


## Assigning Variables
	var quantity = 3; 

End all your statements in ;

; is the programming equivalent of a period. 


## Assigning Variables Cont.
	var a = 5,
		b = 'five',
		c = 3 + 2;
You can do more than one variable with one "var"


## Six Rules for naming Vars
1. Must begin with a letter, $, or _ (underscore)
2. Cannot use - or .
3. Cannot be a [reserved word](http://javascriptbook.com/extras/keywords-and-reserved-words/)
4. Variables are **Case Sensitive** (meaning Foo and foo are different)
5. camelCase - if your var has two words, put them together and capitalize each word but the first
6. Use a name that describes what the var is



## Numbers
* 3.14
* 1234
* 2.333333
* 3 + 4, 3 * 4, (3 / 4) + 4


## Operators
* **Math**: <span class="operators">+, -, *, /, (), =, e</span>
* **Strings (concatenation)**: <span class="operators">+ </span>
* **Assignment**: <span class="operators">= </span>
* **Increments** : -- (subtracts 1), ++ (adds 1)
* **Conditional/Comparison**:<span class="operators"> == (equals), != (not equals), < (less than), > (greater than), === (equals - with conversion)</span>


## Strings
Storage and manipulation of text
* "Ben Spoon"
* 'Ben Spoon'
* 'Ben' + 'Spoon' = 'Ben Spoon'


## Booleans 
* True (1)
* False (0)
* var c = (4-3) == 1;


## What type is this?
### 3


## What type is this?
### "3"


## What does variable 'a' equal?
### var a = 3 == 4;


## What does variable 'a' equal?
### var a = 3 < 4;


## What does variable 'a' equal?
### var a = 3 == 4;


## What does variable 'a' equal?
### var a = 3 === '4';



## Arrays
Store multiple values in a single variable
(like a list)

* Look like this: var a = ['Ben', 'Jack', 'Jill, 'Potato'];
* Start at 0!
* a[0] is 'Ben', a[1] is 'Jack', etc. 
* Can be all sorts of variables 


## Number of items in an array
To get the number of items in an array simply tac .length on then end

For instance: 
	
		var myArray  = [123,453,232,345],
		myLength = myArray.length;
	

myLength would be 4; 



## Comments
Use them, use them everywhere. 
     
     	// Singe line Comment
     	
		/* 
		 * Multiline Comment
		 * Really useful when describing
		 * things that are super long
		 */
* Describe functions, take notes on code in general, everything. 



## Other useful built-ins
* Math - do... math.
* Date - Get dates and stuff
* Fun Fact: Date().getTime() actually returns how many seconds it has been since 1970/01/01 - look it up