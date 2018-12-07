// set count

if (localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

// update
function update (){
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

// plusOne

function plusOne(){
	localStorage.setItem("count", Number(localStorage.getItem("count"))+1)
	update()
}


//reset

function reset(){
	if (confirm("Did You REALLY Have Shenanigans?")) {
		localStorage.setItem("count", 0)
	update()
	}	
}
