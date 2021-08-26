// html, css, javaScript 가 로딩이 완료되었을 때.
// html 태그 구조 (DOM) 구조가 완료되었을 때 실행
$(document).ready(function() {
    // 공지사항 영역에 데이터 갱신 관련 
    // 데이터를 보여줄 html 의 요소(엘리먼트) 를 참조해둔다.

    // 공지사항 데이터를 보여줄 요소들
    var notice_data_div = $('.notice-data .notice-box');

    // 입찰공고 데이터를 보여줄 요소들
    var bid_data_div = $('.bid-data .notice-box');

    // 데이터의 카테고리를 선택할 수 있는 html 의 요소(element) 를 참조해둔다.
    var notice_cate = $('.notice-menu a');

    // 보여줄 데이터 목록을 저장해 둔다.
    var notice_data_1 = [{
            title: '2021년 8월 온라인 학위수여식 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
            date: '2021.07.30.',
            page: '#'
        },
        {
            title: '조교/사무보조원 채용 공고',
            date: '2020.11.11.',
            page: '#'
        },
        {
            title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
            date: '2021.08.10.',
            page: '#'
        },
        {
            title: '상담센터 학생상담실 시간제 상담원 모집 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협력)을 하는 좋은 기회가 되실 겁니다.',
            date: '2021.08.09.',
            page: '#'
        }
    ];
    var notice_data_2 = [{
            title: 'aa',
            date: '2021.08.10',
            page: '#'
        },
        {
            title: 'bb',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'cc',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'dd',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'ee',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'ff',
            date: '2021.08.09',
            page: '#'
        }
    ];
    var notice_data_3 = [{
            title: 'aaa',
            date: '2021.08.10',
            page: '#'
        },
        {
            title: 'bbb',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'ccc',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'ddd',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'eee',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'fff',
            date: '2021.08.09',
            page: '#'
        }
    ];
    var notice_data_4 = [{
            title: 'aaaa',
            date: '2021.08.10',
            page: '#'
        },
        {
            title: 'bbbb',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'cccc',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'dddd',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'eeee',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'ffff',
            date: '2021.08.09',
            page: '#'
        }
    ];
    var notice_data_5 = [{
            title: 'aaaaa',
            date: '2021.08.10',
            page: '#'
        },
        {
            title: 'bbbbb',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'ccccc',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'ddddd',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'eeeee',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'fffff',
            date: '2021.08.09',
            page: '#'
        }
    ];
    var notice_data_6 = [{
            title: 'aaaaaa',
            date: '2021.08.10',
            page: '#'
        },
        {
            title: 'bbbbbb',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'cccccc',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'dddddd',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'eeeeee',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'ffffff',
            date: '2021.08.09',
            page: '#'
        }
    ];
    var notice_data_7 = [{
            title: '[입찰 재공고] 행운의 열쇠 구매[입찰 재공고] 행운의 열쇠 구매[입찰 재공고] 행운의 열쇠 구매[입찰 재공고] 행운의 열쇠 구매[입찰 재공고] 행운의 열쇠 구매[입찰 재공고] 행운의 열쇠 구매[입찰 재공고] 행운의 열쇠 구매[입찰 재공고] 행운의 열쇠 구매',
            date: '2021.08.10',
            page: '#'
        },
        {
            title: 'bbbbbbb',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'ccccccc',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'ddddddd',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'eeeeeee',
            date: '2021.08.09',
            page: '#'
        },
        {
            title: 'fffffff',
            date: '2021.08.09',
            page: '#'
        }
    ];

    // 입찰공고를 위한 데이터
    var bid_data = [{
            title: '[입찰 재공고] 행운의 열쇠 구매',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[입찰] 배터리 테스터기 구매',
            date: '2021.08.05.',
            page: '#'
        },
        {
            title: '[입찰] 형광분광기 구매',
            date: '2021.08.05',
            page: '#'
        },
        {
            title: '[입찰] 형광발광분석기 구매',
            date: '2021.08.05.',
            page: '#'
        },
        {
            title: '[입찰] 열변형시험기 구매',
            date: '2021.08.05.',
            page: '#'
        },
        {
            title: '[입찰] 인하대학교 경쟁력 강화를 위한 조사 용역',
            date: '2021.08.03.',
            page: '#'
        }
    ];


    // 데이터의 카테고리를 클릭하면 데이터를 갱신하여 화면에 보여준다.
    var notice_data_all = [
        notice_data_1,
        notice_data_2,
        notice_data_3,
        notice_data_4,
        notice_data_5,
        notice_data_6,
        notice_data_7
    ];

    $.each(notice_cate, function(index, item) {
        $(this).click(function(event) {
            // item 은 a 태그입니다.
            // 그래서 웹 브라우저가 갱신됩니다.
            // 그래서 클릭시 데이터 갱신이 안됩니다.
            // a 태그의 href 기본 기능을 막는다.
            event.preventDefault();

            sort_data(notice_data_all[index], notice_data_div);

            // css 꾸미기
            notice_cate.removeClass('notice-menu-focus');
            $(this).addClass('notice-menu-focus');

        });
    });

    // 초기에 보여줄 데이터

    // 공지 사항 처음 내용
    sort_data(notice_data_1, notice_data_div);

    // 입찰 정보 처음 내용
    sort_data(bid_data, bid_data_div);

    function sort_data(_obj, _where) {

        $.each(_where, function(index, item) {

            // 실제 배치할 데이터
            var temp_data = _obj[index];

            // 제목자리
            var temp_tit = $(this).find('.notice-box-tit');
            temp_tit.text(temp_data.title);

            // 날짜자리
            var temp_date = $(this).find('.notice-box-date');
            temp_date.text(temp_data.date);

            // href=""  anchor 자리
            var temp_link = $(this).find('.notice-box-link');
            temp_link.attr('href', temp_data.page);

        });

        // dotdotdot.js 적용
        // $('.notice-box-tit').dotdotdot();
    }


    // 공지사항, 입찰정보 보이고, 숨기기
    // .notice-tit 을 저장해서 참조한다.
    var notice_tit = $('.notice-tit');

    // .notice-cont 를 저장해서 참조한다.
    var notice_cont = $('.notice-cont');

    // notice-tit 를 클릭하면 notice-cont 를 보여주라.
    $.each(notice_tit, function(index, item) {
        $(this).click(function(event) {
            // href 기본 기능을 막자
            event.preventDefault();
            // 일단 모든 목록을 숨기자.
            notice_cont.hide();
            notice_cont.eq(index).show();

            // 포커스 이동하기
            notice_tit.removeClass('notice-tit-focus');
            //notice_tit.eq(index).addClass('notice-tit-focus');
            $(this).addClass('notice-tit-focus');

        });
    });
});




// 그림, 영상, 소리 등.. 
// html 태그에서 사용하는 멀티미디어 요소를
// 모두 로딩 완료 했다면 그때 처리한다.
window.onload = function() {
    new Swiper('.sw-top-banner', {
        loop: true,
        slidesPerView: 2,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.sw-top-banner-prev',
            nextEl: '.sw-top-banner-next',
        },
        pagination: {
            el: '.sw-top-pg',
            clickable: true,
        }
    });


    // 메인 슬라이드 
    var sw_main = new Swiper('.sw-main', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 1000,
        // touchRatio: 0,
        allowTouchMove: false,
        pagination: {
            el: '.sw-main-pg',
            clickable: true,
        },

    });

    $('.sw-main-bt').click(function() {

        $(this).toggleClass('sw-main-bt-play');

        // sw-main-bt-play 클래스가 있냐?
        var temp = $(this).hasClass('sw-main-bt-play');
        if (temp == true) {

            sw_main.autoplay.stop();

        } else {

            sw_main.autoplay.start();
        }

    });

    // 배너 슬라이드
    var sw_banner = new Swiper('.sw-banner', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        speed: 600,
        navigation: {
            prevEl: '.sw-banner-prev',
            nextEl: '.sw-banner-next',
        },
    });

    // info 슬라이드
    var sw_info = new Swiper('.sw-info', {
        loop: true,
        navigation: {
            prevEl: '.sw-info-prev',
            nextEl: '.sw-info-next',
        },
        allowTouchMove: false,
    });

    //산학협력단 뉴스슬라이드
    $(document).ready(function(){
        $('.coop-news-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
            draggable : false,
            prevArrow : '.coop-news-prev',
            nextArrow : '.coop-news-next',
        });
      });

      //sns slide
    new Swiper ('.sw-sns',{
        slidesPerView:4,
        spaceBetween: 22,
        allowTouchMove: false,
    })
}