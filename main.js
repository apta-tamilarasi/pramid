

let n=prompt("Enter the value");

for(let i=1; i<=n; i++){
	for (let j=n; j>i; j--){
		document.write("&nbsp&nbsp");
	}
	
	for (let k=1; k<=i; k++){
		document.write("*&nbsp&nbsp");
	}
	
	document.write("<br>");
}
