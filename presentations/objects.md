# Objects


Objects group together a set of variables and functions to create a model of a something would recognize from the real world.


### In an object
* Variables become properties
* Functions become known as methods

```
var hotel = {
	name : 'Quay',
	rooms: 40,
	booked: 25,
	gym: true,
	roomTypes: ['twin', 'double', 'suite'],
	checkAvailability: function() {
		return this.rooms - this.booked;
	}
};
```


### Creating an object: **Literal Notation**
Literal notation is the easier and most popular way to create objects


### Accessing an object and dot notation
You can access the properties or methods of an object using dot notation. (You can also access properties using square brackets).
```
var hotelName = hotel.name;
var roomsFree = hotel.checkAvailability();
var hotelName = hotel['name'];
```


### Creating an object: **Constructor Notation**
The new keyword and the object constructor create a blank object.
```
var hotel = new Object();
hotel.name = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailablility = function() {
	return this.rooms - this.booked;
};
```


### Creating many objects
```
function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailablility = function() {
		return this.rooms - this.booked;
	}
}

```
```
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
```


## Arrays are objects!
Arrays are actually a special type of object that hold a related set of key/value pairs, but the key for each value is its index number.


![image](images/object_array.png)
```
cost = {
	room1: 420,
	room2: 520,
	room3: 300
}

cost['room1']
// OR
cost.room1
```


![image](images/abject_array.png)
```
cost = [420, 540, 300];
cost[0];
```


###Summary 
Functions, Methods, Objects

* Functions allow you to group a set of ***realated statements*** together that represent a ***single task***
* Functions take ***parameters*** and may ***return a value***
* In objects, variables are known as ***properties** of the object; functions are known as ***methods*** of the object. 
* Arrays and objects can be used to create complete data sets (and both can contain each other) 


## Assignment 
Create... *something*, be as creative as you want! 

This assignment should include (at least):

* 3 objects
	* 1 object with a method
* 1 array
* 2 functions 
