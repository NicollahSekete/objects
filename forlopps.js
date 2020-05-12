let obj = {
	a: 1
}
for (const key in object) {
	if (object.hasOwnProperty(key)) {
		const element = object[key];
	}
}
for(let [key, value] of Object.entries(obj)) {
}




let todo = ["stay inside ", "wash hands", "social distance"];
for (let i = 0; i < todo.length; i++) {
	let task = todo[i];
}
for (const task of todo) {
	console.log(task);
}


let arr = ["a", "b", "c"]
for (let i = 0; i < arr.length; i++) {
	let letter = arr[i];
}
for (const letter of arr) {
	console.log(letter);
}