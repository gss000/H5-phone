
function getElem(selector){
    return document.querySelector(selector);
}

function getAllElem(selector){
    return document.querySelectorAll(selector);
}

function getCls(element){
    return element.getAttribute('class');
}

function setCls(element, cls){
    return element.setAttribute('class', cls);
}

function addCls(element, cls){
    var baseCls = getCls(element);
    if(baseCls.indexOf(cls) === -1){
        setCls(element, baseCls + ' ' + cls);
    }
}

function delCls(element, cls){
    var baseCls = getCls(element);
    if(baseCls.indexOf(cls) != -1){
        setCls(element, baseCls.split(cls).join(' ').replace(/\s+/g,' '));
    }
}

//初始化样式
var screenAnimateElements = {
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

//设置所有屏的初始样式 in --> done
function setScreenAnimateIn(screenCls){
    var screen = document.querySelector(screenCls);//获取当前屏的元素
    var animateelements = screenAnimateElements[screenCls];//需要设置动画的元素

    for(var i=0;i<animateelements.length;i++){
        var element = document.querySelector(animateelements[i]);
        var baseCls = element.getAttribute('class');

        element.setAttribute('class', baseCls +' '+ animateelements[i].substr(1) + '-in');
    }
}

function playScreenAnimateDone(screenCls){
    var screen = document.querySelector(screenCls);
    var aimateelements = screenAnimateElements[screenCls];

    for(var i=0;i<screenAnimateElements.length;i++){
        var element  = document.querySelector(aimateelements[i]);
        var baseCls = element.getAttribute('class');

        element.setAttribute('class', baseCls.replace('-in', '-done'));
    }
}

window.onload = function(){
    for(k in screenAnimateElements){
        setScreenAnimateIn(k);
    }
}

window.onscroll = function(){
    var top = document.body.scrollTop;

    if(top > 80){
        addCls(getElem('.header'), 'header-back');
    }else{
        delCls(getElem('.header'), 'header-back');
    }

    if(top>1){
        playScreenAnimateDone('.screen-1');
    }
    if(top>800*1){
        playScreenAnimateDone('.screen-2');
    }
    if(top>800*2){
        playScreenAnimateDone('.screen-3');
    }
    if(top>800*3){
        playScreenAnimateDone('.screen-4');
    }
    if(top>800*4){
        playScreenAnimateDone('.screen-5');
    }



}
