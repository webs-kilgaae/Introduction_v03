(function () {
	const ui = {
		accItem: null,

		init() {
			this.mainScroll();
			this.tabList();
			this.popupEvent();
		},

		// 메인 스크롤 이벤트
		mainScroll() {
			const visual = document.querySelector('.visual');
			const mainTop = document.querySelector('.top');

			let i = 85; //상단 높이값
			window.addEventListener('scroll', () => {
				let currentScrollY = window.scrollY;

				if (i < currentScrollY) {
					visual.classList.add('active');
					mainTop.classList.add('floating');
				} else {
					visual.classList.remove('active');
					mainTop.classList.remove('floating');
				}

				const platformCon = [...document.querySelectorAll('section')];

				platformCon.forEach((el) => {
					const currentTop = el.offsetTop + 20;
					currentTop <= currentScrollY ? el.classList.add('active') : el.classList.remove('active');
				});

				const stars = [...document.querySelectorAll('.icon_stars')];
				stars.forEach((el) => {
					const currentTop = el.offsetTop - 600;
					currentTop <= currentScrollY ? el.classList.add('shine') : el.classList.remove('shine');
				});
			});
		},

		// https://hed-u.tistory.com/61
		//https://happy-hee8.tistory.com/4

		// https://zthcoding.tistory.com/entry/Javascript-스크롤에-따라-박스-크기-글자-크기-위치-조정하기

		tabList() {
			const tabItem = [...document.querySelectorAll('.tab')];
			const tabCon = [...document.querySelectorAll('.tab_con')];

			console.log('tabItem', tabItem);
			tabItem.forEach((el, idx) => {
				el.addEventListener('click', function () {
					// el.preventDefault();
					const wrap = tabItem[idx].closest('.tab_wrap');

					tabCon.forEach((e, i) => {
						if (tabCon[i].closest('.tab_wrap') === wrap) {
							e.classList.remove('active');
						}
					});

					tabItem.forEach((e, i) => {
						if (tabItem[i].closest('.tab_wrap') === wrap) e.classList.remove('active');
					});

					tabItem[idx].classList.add('active');
					tabCon[idx].classList.add('active');
				});
			});
		}, //tabList()

		popupEvent() {
			const targetOpen = [...document.querySelectorAll('.popup_open')];
			const targetPopup = [...document.querySelectorAll('.popup_wrap')];
			const targetClose = [...document.querySelectorAll('.popup_close')];

			targetOpen.forEach((_) => {
				_.addEventListener('click', function () {
					let targetLabel = this.getAttribute('aria-label');

					targetPopup.forEach((e) => {
						const popupLabel = e.getAttribute('aria-labelledby');
						if (targetLabel == popupLabel) {
							e.classList.add('on');
							//e.style.display = 'block';
							document.body.style.overflowY = 'hidden';

							if (e.classList.contains('menu')) {
								gsap.set(e, {
									left: -100 + '%',
									display: 'block',
								});
								gsap.to(e, {
									duration: 0.4,
									left: 0,
									display: 'block',
								});
							}

							if (e.classList.contains('tost')) {
								gsap.set(e, {
									height: 0,
									display: 'block',
								});
								gsap.to(e, {
									duration: 0.4,
									height: 'auto',
									display: 'block',
								});
							}
						}
					});
				});
			});

			targetClose.forEach((_) => {
				_.addEventListener('click', function () {
					//this.parentNode.parentNode.style.display = 'none';
					const $target = this.parentNode.parentNode;
					$target.classList.remove('on');
					document.body.style.overflowY = 'visible';

					if ($target.classList.contains('tost')) {
						gsap.to($target, {
							duration: 0.4,
							height: 0,
							display: 'none',
						});
					}

					if ($target.classList.contains('menu')) {
						gsap.to($target, {
							duration: 0.4,
							left: -100 + '%',
							display: 'none',
						});
					}
				});
			});
		}, //popupEvent()
	};

	ui.init();
})();
