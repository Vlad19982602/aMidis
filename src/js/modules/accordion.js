const accordion = (triggersSelector, arrowSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
		arrow = document.querySelectorAll(arrowSelector),
        blocks = document.querySelectorAll(itemsSelector);

	//blocks.forEach(block => {
	//	block.classList.add('animated', 'fadeInDown');
	//});

	//btns.forEach(btn => {
	//    btn.addEventListener('click', function() {
	//        if (!this.classList.contains('edu22-box-open')) {
    //	        	btns.forEach(btn => {
    //	            	btn.classList.remove('edu22-box-open', 'edu22-container-inner edu22-opened');
	//            });
	//            this.classList.add('edu22-box-open', 'edu22-container-inner edu22-opened');
	//        }
	//    });
	//});

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('edu22-box-open');
            this.nextElementSibling.classList.toggle('edu22-opened');

            if (this.classList.contains('edu22-box-open')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

    arrow.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('edu22-btn-arrow-open');
        });
    });

    blocks.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('edu22-title-open');
        });
    });


    //this.classList.toggle('edu22-btn-arrow-open');
    //this.classList.toggle('edu22-title-open');
    //this.classList.toggle('edu22-btn-open');

    //   blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;