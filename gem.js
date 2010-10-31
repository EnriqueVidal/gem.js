/* Assume the following arrays for each of the comments examples
* var array1 = new Array(1, 2, 4, 5);
* var array2 = new Array(1, 2, null, null);
* var array3 = new Array(null, null, null);
*/

/* This method return true if any of the collection indexes is defined
*
* array1.any(); => returns true as all members are defined and not null
* array2.any(); => returns true as at least one member is defined and not true
* array3.any(); => returns false as all members are null
*
*/
Array.prototype.any = function()
{
  for (i = 0; i < this.length; i++)
    if (this[i] != null || this[i] != undefined)
      return true;
  return false;
}

/* This method return true only if all of the collections indexes are defined
*
* array1.all(); => returns true as all members are defined and not null
* array2.all(); => returns false as there are null members in the array
* array3.all(); => returns false as all members are null
*
*/
Array.prototype.all = function() {
  for (i = 0; i < this.length; i++)
    if (this[i] == null || this[i] == undefined)
      return false
  return true;
}

/* This method return all the members of an array that match a condition
*
* array1.select({ condition: function(current) { if ( current >= 3 ) return current; } }); => returns [4, 5]
* array2.select({ condition: function(current) { if ( current < 3 )  return current; } }); => returns [1, 2]
* array3.select({ condition: function(current) { if (current == "batman") return current; } }); => returns [ ] 
*
*/
Array.prototype.select = function(obj)
{
  var match = new Array();
  for (i = 0; i < this.length; i++)
  {
    value = obj.condition(this[i]);
    if ( value != undefined) match[match.length] = value;
  }
  return match;
}

/* This method returns the result of an operation run against the whole collection of items in the array
*
* array.inject({ inject: function(collection, current) { return current * collection; } }); => returns 120
* array.inject({ inject: function(collection, current) { return current + collection; } }); => returns 15
*/

Array.prototype.inject = function(obj) {
  var result = 0;
  var collection = 0;    

  for(var i =0; i < this.length; i++)
  {
     result     = (obj.inject(result, this[i]) == 0 && i == 0) ? obj.inject(1, this[i]) : obj.inject(result, this[i]);
  }
  return result;
}

/* This method returns the first n elements of an array if length is defined
*
* array1.first() 	=> 1
* array1.first(3) => [1, 2, 4]
*/

Array.prototype.first = function(length) {
	if (length) {
		var result = new Array();
		for (var i=0; i < length; i++) {
			if (i == this.length) break;
			result[i] = this[i];
		}
		return result;
	}
	return this[0];
}

/* This method returns the last n elements of an array if length is defined
*
* array1.last() 	=> 5
* array1.first(3) => [5, 4, 2]
*/
Array.prototype.last = function(length) {
	if (length) {
		var result = new Array();
		var count = 0;

		for (var i= this.length - 1; i >= 0; i--){
			if (count == length) break;
			result[count] = this[i];
			count++;
		}
		return result;
	}
	return this[this.length - 1];
}
/* This method returns the current object that called it and iterated over the collection running a closure
*
*array1.each(function(index, value) { console.log(vale * 2); } ) => [ 1, 2, 4, 5 ] #it also logs 2, 4, 6, 8, 10
*/

Array.prototype.each = function(closure) {
    for (var i = 0; i < this.length; i++)
    {
        closure(i, this[i]);
    }
    return this;
}

/* Assume the following string for each of the comments examples
*
* var string = "batman";
*/

/* This method returns an upppercase version of the same string
* string.upcase(); => return "BATMAN" 
*/
String.prototype.upcase = function() {
  return this.toUpperCase();
}

/* This method returns a lower case version of the same string
* string.upcase().downcase(); => return "batman" 
*/
String.prototype.downcase = function() {
  return this.toLowerCase();
}

/* This method returns a capitalized version of the same string 
* string.capitalize(); => return "Batman" 
*/
String.prototype.capitalize = function(){
    return this.replace( /(^|\s)([a-z])/g , function(m, p1, p2){
        return p1+p2.toUpperCase();
    });
}

/* This method returns a reversed version of the same string
* string.reverse(); => return "namtab"
*/
String.prototype.reverse = function(){
    splitext     = this.split("");
    revertext    = splitext.reverse();
    reversed     = revertext.join("");
    return reversed;
}


Object.prototype.all = new Array();
Object.prototype.find = function(id) {
    for (var i=0; i < this.all.length; i++)
    {
        if (this.all[i].id == id)
            return this.all[i];
    }
    return null;
}