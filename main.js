// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
 var output = '';
 if (arguments.length == 2) {
 	for(var i=0; i<arr.length; i++) {
 		if (i === arr.length-1) {
 			output += arr[i];
 		}
 		else {
 			output += arr[i] + delimeter;
 		}  
 	}
 	return output.trim();
 }

 else if (arguments.length > 2) {
 	return undefined;
 	
 }
 else{
 	return join(arr, '');
 }
 
};