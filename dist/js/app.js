function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode);
}


var butonRight = document.getElementsByClassName('s-right')[0];
var butonLeft = document.getElementsByClassName('s-left')[0];
function previous() {
	let slider = document.getElementsByClassName('slider-main')[0]
	let item1 = document.getElementsByClassName('slider')[0]
	let numElement = document.getElementsByClassName('slider').length - 1;
	let item2 = document.getElementsByClassName('slider')[numElement];
	insertAfter(item2, item1);
	console.log('hola')
}
 
function next() {
	let slider = document.getElementsByClassName('slider-main')[0]
	let item = document.getElementsByClassName('slider')[0]
	let item1 = document.getElementsByClassName('slider')[1]
	let numElement = document.getElementsByClassName('slider').length - 1;
	let item2 = document.getElementsByClassName('slider')[numElement];
	slider.insertBefore(item1, item);
	slider.insertBefore(item, item2.nextNode);

}

setInterval(() => { 
	next();
 }, 3000);
 
butonRight.addEventListener('click', () => {
	next();
});

butonLeft.addEventListener('click', () => {
	previous();
});


var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy",
});

myLazyLoad.update();

