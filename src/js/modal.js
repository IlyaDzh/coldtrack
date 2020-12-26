window.Modal = ( modal => {

	if(!modal) {

		return;

	}

	const items = modal.querySelectorAll('.modal__item'),
		  btns = document.querySelectorAll('[data-modal=select-wallet]'),
		  wrapper = document.querySelector('.wrapper');

	let activeModal = false,
		windowScroll = window.pageYOffset;

	const hideModal = () => {

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);

		setTimeout( () => document.documentElement.classList.remove('scroll-behavior-off'));

		activeModal = false;

	};

	const modalShow = (selector, message, secondMessage) => {

		if(!activeModal){

			windowScroll = window.pageYOffset;

		}

		activeModal = modal.querySelector('.modal__item--' + selector);

    
    if(message){
      activeModal.querySelector(".modal-info__text").innerText = message
    }

    const secondMessageEl = activeModal.querySelector(".modal-info__text-second")
    if(secondMessage){
      secondMessageEl.innerHTML = secondMessage
    } else {
      if(secondMessageEl != null){
        secondMessageEl.innerHTML = ''
      }
    }

		Array.from(items, el => el.classList.toggle('visuallyhidden', el !== activeModal));

		document.documentElement.classList.add('scroll-behavior-off');

		setTimeout( () => {

			wrapper.style.top = -windowScroll + 'px';
			document.body.classList.add('modal-show');
			window.scrollTo(0,0);

			activeModal.focus();

		});

	};

	modal.addEventListener('click', event => {

		if(event.target.classList.contains('modal') || event.target.closest('.modal__close')){

			hideModal();

		}

	});

	modal.addEventListener('modalShow', event => modalShow(event.detail.selector));

	Array.from(btns, el =>
		el.addEventListener('click', () =>
			modalShow(el.getAttribute('data-modal'))));
  
  return {modalShow, hideModal}

})(document.querySelector('.modal'));
