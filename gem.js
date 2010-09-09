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
* array1.select({ condition: function(current) { if ( current >= 3 ) 			return current; } }); => returns [4, 5]
* array2.select({ condition: function(current) { if ( current < 3 )				return current; } }); => returns [1, 2]
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

/*
*
*
*/

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