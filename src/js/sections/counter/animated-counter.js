$(document).ready(function(){

var counterContainerClassName = 'anim-count-contrainer';
var counterContainers = document.getElementsByClassName(counterContainerClassName);
var winHeight = $(window).height();


var whichCounterContainerIsVisible = function(){
    for(var i = 0; i < counterContainers.length; i++){
        if((counterContainers[i].getBoundingClientRect().top < winHeight) && (counterContainers[i].getBoundingClientRect().top > 0)){
            return i;
        }
    };
    return 'null';
};

// function delArrayItemByIndex(array, itemIndex){
//     var arrayBuffer = [];

//     for(var i = 0; i < array.length; i++){
//         if(i != itemIndex){
//             arrayBuffer[i] = array[i];
//         }
//     }
//     for(var i = 0; i < arrayBuffer.length; i++){
//         array[i] = arrayBuffer[i];
//     }
//     return array;
// }

$(document).scroll(function(){
    var animatedElementIndex = whichCounterContainerIsVisible();
    $('#help-screen .visible-cont').text(animatedElementIndex);
    if(animatedElementIndex != 'null'){
        counterContainers[animatedElementIndex].setAttribute("id", "current-anim-count-contrainer");
        if(!$(counterContainerClassName).eq(animatedElementIndex).hasClass('used-anim-count-contrainer')){
            counterContainers[animatedElementIndex].classList.add('used-anim-count-contrainer');
            // alert('class added');
            $('#current-anim-count-contrainer .anim-count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
             });
        }

        // counterContainers[animatedElementIndex].removeAttribute("id");
        // counterContainers = delArrayItemByIndex(counterContainers, animatedElementIndex);
    }
});

// $('.anim-count').each(function () {
//    $(this).prop('Counter',0).animate({
//        Counter: $(this).text()
//    }, {
//        duration: 4000,
//        easing: 'swing',
//        step: function (now) {
//            $(this).text(Math.ceil(now));
//        }
//    });
// });

$('#help-screen').click(function(){
    $('.anim-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
     });
});

// alert('lol');

});