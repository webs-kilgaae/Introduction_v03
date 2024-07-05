(function () {
	const app = {
		accItem: null,

		init() {
			this.tabList();
      this.accList();
      this.popupEvent();
      this.inputSearch();
		},

		tabList(){

            const tabItem = [...document.querySelectorAll('.tab')];
            const tabCon = [...document.querySelectorAll('.tab_con')];

            tabItem.forEach((el, idx) => {

                el.addEventListener('click', function(){
                const wrap = tabItem[idx].closest('.tab_wrap');

                tabCon.forEach((e, i) => {
                    if(tabCon[i].closest('.tab_wrap') === wrap){
                    e.classList.remove('on')
                    }
                })

                tabItem.forEach((e, i) => {
                    if(tabItem[i].closest('.tab_wrap') === wrap)
                    e.classList.remove('on')
                })

                tabItem[idx].classList.add('on')
                tabCon[idx].classList.add('on')
                })

            });
    },//tabList()

    accList(){
        const accItem = [...document.querySelectorAll(".acc")];
  
        accItem.forEach((el) => {
  
          el.addEventListener('click', function(){   
            accItem.forEach((e, i) => {
              const $target = e.nextElementSibling;
              if(accItem[i] !== el)
                e.classList.remove('on');
              gsap.to($target,{
                duration: 0.4,
                height: 0,
                display: "none",
              });
            });
  
            el.classList.toggle('on');
            const $target = el.nextElementSibling;
  
            if(el.classList.contains('on') === true){
              gsap.set($target, {
                height: 0,
                display: "block",
              });   
              gsap.to($target, {
                duration: 0.4,
                height:'auto',
                display: "block",
              });
            }else{
              el.classList.remove('on');
              gsap.to($target,{
                duration: 0.4,
                height: 0,
                display: "none",
              });
            };
          });
  
        });
    },//accList()

    popupEvent(){
        const targetOpen = [...document.querySelectorAll('.popup_open')];
        const targetPopup = [...document.querySelectorAll('.popup_wrap')];
        const targetClose = [...document.querySelectorAll('.popup_close')];
        
        targetOpen.forEach((_) => {
            _.addEventListener('click', function(){
                let targetLabel = this.getAttribute('aria-label');

                targetPopup.forEach((e) => {
                    const popupLabel = e.getAttribute('aria-labelledby'); 
                    if(targetLabel == popupLabel){
                      e.classList.add('on');
                        //e.style.display = 'block';
                        document.body.style.overflowY = "hidden"

                        if(e.classList.contains('menu')){
                        gsap.set(e, {
                          left: -100 + '%',
                          display: "block",
                        });   
                        gsap.to(e, {
                          duration: 0.4,
                          left: 0,
                          display: "block",
                        });
                      }


                        if(e.classList.contains('tost')){
                          gsap.set(e, {
                            height: 0,
                            display: "block",
                          });   
                          gsap.to(e, {
                            duration: 0.4,
                            height:'auto',
                            display: "block",
                          });
                        }


                    }
                })
              });
        })
        
        targetClose.forEach((_) => {
            _.addEventListener('click', function(){
                //this.parentNode.parentNode.style.display = 'none';
                const $target = this.parentNode.parentNode;
                $target.classList.remove('on');
                document.body.style.overflowY = "visible"


                if($target.classList.contains('tost')){
                  gsap.to($target, {
                    duration: 0.4,
                    height: 0,
                    display: "none",
                  });
                }

                if($target.classList.contains('menu')){
                gsap.to($target, {
                  duration: 0.4,
                  left: -100 + '%',
                  display: "none",
                });
              }



              });
        })

      
    },//popupEvent()

    inputSearch(){
        const btnClear = [...document.querySelectorAll('.btnClear')];

        btnClear.forEach(function(btn){
            btn.addEventListener('click', function(){
                btn.parentNode.querySelector('input').value = "";
            })
        })
    }
	};

	app.init();
})();