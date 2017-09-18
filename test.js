

var screenelements = {
    '.screen-1' : [
        '.screen1-head',
        '.screen-1-phone',
        '.screen-1-shadow',
    ],
    '.screen-2':[
        '.screen-2-heading',
        '.screen-2-subheading',
        '.screen-2-phone',
    ],
    '.screen-3':[
        '.screen-3-heading',
        '.screen-3-subheading',
        '.screen-3-phone',
        '.screen-3-feature',
    ],
    '.screen-4':[
        '.screen-4-heading',
        '.screen-4-subheading',
        '.list-item1',
        '.list-item2',
        '.list-item3',
        '.list-item4',
    ],
    '.screen-5':[
        '.screen-5-heading',
        '.screen-5-subheading',
        '.screen5-bg',
    ]
}

function setScreenAnimate(screenCls){
    var screen = document.querySelector(screenCls);//获取当前屏的元素
    var animateelements = screenelements[screenCls];//需要设置动画的元素

    var issetanimateclass = false;//是否初始化
    var isanimatedone = false;//当前屏幕下所有的子元素都是done
    screen.onclick = function(){
        //初始化样式，增加a-in
        if(issetanimateclass === false){
            for(var i=0;i<animateelements.length;i++){
                var element = document.querySelector(animateelements[i]);
                var baseCls = element.getAttribute('class');

                element.setAttribute('class', baseCls +' '+ animateelements[i].substr(1) + '-in');
            }
            issetanimateclass = true;
            return;
        }
        //切换所有animateelements的in --> done
        if(isanimatedone === false){
            for(var i=0;i<animateelements.length;i++){
                var element = document.querySelector(animateelements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('-in', '-done'));
            }
            isanimatedone = true;
            return;
        }
        //切换所有animateelements的done --> in
        if(isanimatedone == true){
            for(var i=0;i<animateelements.length;i++){
                var element = document.querySelector(animateelements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('-done', '-in'));
            }
            isanimatedone = false;
            return;
        }
    }
}


for(k in screenelements){
    setScreenAnimate(k);
}