# Functions


### Declaring a function
``` 
function sayHello() {
	$('body').append('Hello');
}
```
To create a function, you give it a name and then write the statements needed to achieve its task inside the curly braces. 


### Calling a function
```
sayHello();
```
You you define the function, you can execute all of the statements between its curly braces with just one line of code. 


### Declaring functions that need information
Sometimes a function needs specific information to perform its task. In cases like this you need to give the definition parameters. These act like variables. 
```
function getArea(width, height) {
	return width * height;
}
```


## Calling functions that need information


### Arguments as **values**
In this example, number 3 will be used as the width, and 5 as the height. 
```
getArea(3,5);
```

### Arguments as **variables** 
You do not have to specify actual values when calling a function, you can use variales in their place. 
```
wallWidth = 3;
wallHeight = 5;
getArea(wallWidth, wallHeight);
```


### Getting a single value out of a function
Some functions return information to the code that called them.
```
function calculateArea(width, height) {
	var area = width * height;
	return area;
}
var wallOne = calculateArea(3,5);
var wallTwo = calculateArea(3,5);
```


### Getting multiple values out of a function
functions can return more than one value using an array.
```
function getSize(width, height, depth) {
	var area = width * height;
	var volume = width * height * depth;
	var sizes = [area, volume];
	return sizes;
}
var areaOne = getSize(3,2,3)[0];
var volumeOne = getSize(3,2,3)[1];
```	

[Continue on to Objects](/objects.html)
 