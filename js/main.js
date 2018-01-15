let popup = document.getElementById('popup'),
	btn = document.getElementById('question__link'),
	siteWrapper = document.getElementById('site'),
	btnClose = document.getElementById('popup__close-link'),
	overlay = document.getElementById('overlay'),
	burger = document.getElementById('burger'),
	sidebar = document.getElementById('sidebar'),
	body = document.body;

let mainFunc = {
	clickOpen() {
		btn.addEventListener('click', (evt) => {
			evt.preventDefault();
			popup.classList.toggle('active');
			overlay.classList.toggle('active');
			body.classList.toggle('hidden');

		});
	},

	clickClose() {
		btnClose.addEventListener('click', (evt) => {
			evt.preventDefault();
			popup.classList.remove('active');
			overlay.classList.remove('active');
			body.classList.remove('hidden');
		});
	},

	clickOverlay() {
		overlay.addEventListener('click', (evt) => {
			popup.classList.remove('active');
			overlay.classList.remove('active');
			body.classList.remove('hidden');
		});
	},

	clickBurger() {
		burger.addEventListener('click', (evt) => {
			body.classList.toggle('open-menu');
			sidebar.classList.toggle('active');

			if (sidebar.classList.contains('active')) {
				burger.classList.add('active')
			} else {
				burger.classList.remove('active')
			}

		})
	},
};

let init = {
	func() {
		mainFunc.clickOpen(),
		mainFunc.clickClose(),
		mainFunc.clickOverlay(),
		mainFunc.clickBurger()
	}
};

init.func();



function showError(parentElem, errorMsg) {
	var newDiv = document.createElement('div');
	parentElem.className += ' error';
	newDiv.className = 'error-message';
	newDiv.innerHTML = errorMsg;
	parentElem.appendChild(newDiv);
}

function resetError(parentElem) {
	var delElem = parentElem.lastChild;
	parentElem.classList.remove('error');
	parentElem.removeChild(delElem);
}

function validate(form) {
	var elems = form.elements,
		inputName = elems.name,
		inputEmail = elems.email,
		inputPhone = elems.phone,
		regexName = /^([а-яА-ЯёЁa-zA-Z])+$/,
		regexEmail = /^(\w)+\@([a-zA-Z])+(\.)+([a-zA-Z]{2,7})+$/,
		regexPhone = /^([0-9]{7,})+$/;

	if (inputName.parentNode.classList.contains('error')) {
		resetError(inputName.parentNode);
	}

	if (!regexName.test(inputName.value)) {
		showError(inputName.parentNode, 'Недопустимое имя');
	}

	if (inputEmail.parentNode.classList.contains('error')) {
		resetError(inputEmail.parentNode);
	}

	if (!regexEmail.test(inputEmail.value)) {
		showError(inputEmail.parentNode, 'Некорректный e-mail');
	}

	if (inputPhone.parentNode.classList.contains('error')) {
		resetError(inputPhone.parentNode);
	}

	if (!regexPhone.test(inputPhone.value)) {
		showError(inputPhone.parentNode, 'Некорректный номер');
	}
	
}

//SLIDER
$(function() {
  $('.fotorama').fotorama({
  	arrows: 'always',
  	height: 608,
  	width: '100%',
  	fit: 'cover',
  	nav: 'dots'
  });
});

(function() {
  	var dots = document.getElementsByClassName('fotorama__dot');
  	// var number = document.createElement('span');
  	for (var i = 0; i < dots.length; i++) {
  		dots[i].innerHTML = i + 1;
  	}
})();


//PHONE VALIDATE
// $(function() {
//    $("#form__phone").mask("+7 (999) 999-9999");
// });

// SVG
// var cont = document.querySelectorAll('advantage')[0];
// var testsvg = document.getElementById('testsvg');
// var svgDocument = testsvg.contentDocument;
// var svgElement = svgDocument.getElementById("gogogo");


// testsvg.addEventListener('mouseover', function() {
// 	svgElement.style="fill: black";
// });

// testsvg.addEventListener('mouseseeter', function() {
// 	svgElement.style="fill: white";
// });