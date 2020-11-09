$(function(){
    $('.wi').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        image: {    verticalFit: true    },
        gallery: {   enabled: true    }, // 좌우로 사진 돌려보기 생성
        zoom: {    enabled: true,   duration: 400    }
     });
})