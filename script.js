//your JS code here. If required.
const list = document.getElementsByTagName("li");
for(let i = 0; i < list.length; i++){
	if(list[i].hasAttribute("id")){
		alert("The level of the element is:" + (i+1));
	}
}