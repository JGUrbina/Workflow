// Eslider

var butonRight = document.getElementsByClassName('s-right')[0];
var butonLeft = document.getElementsByClassName('s-left')[0];
var slider = document.getElementsByClassName('slider-main')[0]
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

function dateDom() {
	slider = document.getElementsByClassName('slider-main')[0]
	item = document.getElementsByClassName('slider')[0]
	item1 = document.getElementsByClassName('slider')[1]
	numElement = document.getElementsByClassName('slider').length - 1;
	item2 = document.getElementsByClassName('slider')[numElement];
}
function previous() {
	dateDom();
	insertAfter(item2, item1);
}
 
function next() {
	dateDom();
	slider.insertBefore(item1, item);
	slider.insertBefore(item, item2.nextNode);

}
console.log(slider)

if(slider) {
	setInterval(() => { 
		next();
	}, 6000);
}
	


if(butonRight && butonLeft) {
	butonRight.addEventListener('click', () => {
		next();
	});
	butonLeft.addEventListener('click', () => {
		previous();
	});
}
 




// Toggle

// Menú modal
let buttonMenu = document.getElementsByClassName('modal-botton')[0];
let menu = document.getElementsByClassName('modal')[0];
let closed = menu.children[0];
if(buttonMenu) {

	buttonMenu.addEventListener('click', function (event) {
		menu.classList.toggle('ocult');
		event.preventDefault;
	});

	closed.addEventListener('click', function (event) {

		menu.classList.toggle('ocult');
		event.preventDefault;
	});
}


// Search

let buttonSearch = document.getElementsByClassName('icon-search')[0];
let search = document.getElementsByClassName('search')[0];
let closedSearch = document.getElementsByClassName('continer-inputs')[0].children[0];
if(buttonSearch) {
	buttonSearch.addEventListener('click', function (event) {

		search.classList.toggle('ocult');
		event.preventDefault;
	});

	closedSearch.addEventListener('click', function (event) {

		search.classList.toggle('ocult');
		event.preventDefault;
	});
}



// Video modal

let btnVideo = document.querySelectorAll('.video');

if(btnVideo) {
	btnVideo.forEach((button) => {
		button.addEventListener('click', () => {

			button.nextElementSibling.classList.toggle('ocult');
			let closedVideo = button.nextElementSibling.children[0];
			console.log(closedVideo)
			closedVideo.addEventListener('click', () => {
				button.nextElementSibling.classList.toggle('ocult');
			}) 
		})
	  	
	});
}


// button scroll


// When the user scrolls down 20px from the top of the document, show the button
let movetop = document.getElementById("movetop");
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        movetop.style.display = "flex";
    } else {
        movetop.style.display = "none";
    }
}
window.onscroll = function () {
    scrollFunction()
};



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
if(movetop) {
	movetop.addEventListener('click', () => {
		topFunction()
	})
}


// LazyLoad


var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy",
});

// myLazyLoad.update();

