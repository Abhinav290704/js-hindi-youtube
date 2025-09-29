console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >=0); //true 
/* For last one: The reason is that an equality check == 
and comparisons > < >= <= work differently.
Comparison convert null to a number, treating it as 0 */

/* Strict check:
=== It checks values and the datatypes too. */