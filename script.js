
window.onload=function(){
	document.getElementById("myBtn").addEventListener("click", function(){
		// Function which is called on click of html button "Go!"
		var f = outer(); // x links to outer function
		f(); // This statement causes our result to be displayed.

		function outer() {
			var a=3;
			var b=42;
			var temp=2;
			var result=inner(a,b); // Passing parameters to inner function
			document.getElementById('res').innerHTML="Result = "+result+" (i.e., 3+42+2)"+"<br>We see here that the function object "+
			"created by our function literal contains a link to the outer context. Hence our outer function is a closure."
			function inner(x,y) {
				return x+y+temp; // Because of closure, inner function recognizes the temp variable (which is declared in outer)
			};
			return inner;
		};
	});
}
