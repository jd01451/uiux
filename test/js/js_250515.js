/*
    js에서 html요소를 부를때는 
    html요소가 로딩된 이후에 불러야 함.
    문서의 구조상
    js를 head안에서 먼저 부르고
    그다음 body에 html요소를 씀
*/
$(document).ready(function(){
    //$('.group').addClass('on')
    // console.log('document.ready 안...')

    $('.group').on('mouseenter', function(){
        //group에 마우스를 올릴때마다 실행
        $('.group').addClass('on')
        // $('.group').on('mouseleave', function(){
        //     //group에 마우스를 아웃시 실행
        //     $('.group').removeClass('on')
        // })
        $('.group span').text('오버 후')
    })
    $('.group').on('mouseleave', function(){
        //group에 마우스를 아웃시 실행
        $('.group').removeClass('on')
        $('.group span').text('오버 전')
        // console.log('작동')
    })

    // 문서가 로딩되고 단 1번만 실행
    let scrolling = $(window).scrollTop()
    // console.log(scrolling)

    $(window).scroll(function(){
        scrolling = $(window).scrollTop()
        // console.log(scrolling)
        if (scrolling > 0) {
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    })

    $('.list ul li').on('mouseenter', function(){
        $(this).addClass('on')
        // this li중에서 오버한 li만 지칭
    })
    $('.list ul li').on('mouseleave', function(){
        $(this).removeClass('on')
        // this li중에서 오버한 li만 지칭
    })
}) /* $(document).ready  문서가 준비되면 실행(html) */

/* html로드되면서 실행 */
// console.log('누가 먼저 실행될까요?')