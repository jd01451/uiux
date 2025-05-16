$(document).ready(function(){

    /*
        header에 fixed 클래스를 주는것
        1. 브라우저가 조금이라도 스크롤이 되면 header에 fixed 클래스를 추가
            스크롤 값이 0 이상
        2. 다시 브라우저 맨 위로 스크롤이 되면 header에 fixed 클래스를 삭제
            스크롤 값이 1 이하

        클래스를 주는 명령

        브라우저가 스크롤되는 것을 체크할 수 있는 방법 명령을 알아야함
    */ 

    //$('header').addClass('abdc')
    //$('header').removeClass('abdc')

    //html이 로딩된 이후 단 1번만 실행
    let scrolling
    scroll_chk() //함수를 호출 (함수의 실행)

    function scroll_chk(){ //함수선언 (scroll_chk라는 함수가 있다)
        // 스크롤 할때마다 1번씩 실행 변수 (스크롤 안하면 실행이 안됨)
        scrolling = $(window).scrollTop();
        //console.log(scrolling)

        if (scrolling > 0) {
            $('header').addClass('fixed') //0 이상
            //console.log('0이상')
        }else{
            $('header').removeClass('fixed') // 1 이하
            //console.log('1이하')
        }
    }

    $(window).scroll(function(){
        scroll_chk() //함수호출
    })
}) //$(document).ready(function(){