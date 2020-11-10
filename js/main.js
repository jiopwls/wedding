$(function () {
    $('.wi1').magnificPopup({
        items: [
            {
                src: "./images/wedding1.jpg",
                // type:'iframe',
                type: 'image',
                tClose: 'tooltip.TOOLTIP_CLOSE',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                image: { verticalFit: true },
                gallery: {
                    tPrev: 'Previous',
                    tNext: 'Next',
                    enabled: true
                }, // 좌우로 사진 돌려보기 생성
                zoom: { enabled: true, duration: 400 }
            }
        ]
    });
    $('.wi2').magnificPopup({
        items: [
            {
                src: "./images/wedding2.jpg",
                // type:'iframe',
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                image: { verticalFit: true },
                gallery: { enabled: true }, // 좌우로 사진 돌려보기 생성
                zoom: { enabled: true, duration: 400 }
            }
        ]
    });
    $('.wi3').magnificPopup({
        items: [
            {
                src: "./images/wedding3.jpg",
                // type:'iframe',
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                image: { verticalFit: true },
                gallery: { enabled: true }, // 좌우로 사진 돌려보기 생성
                zoom: { enabled: true, duration: 400 }
            }
        ]
    });
    $('.wi4').magnificPopup({
        items: [
            {
                src: "./images/wedding4.jpg",
                // type:'iframe',
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                image: { verticalFit: true },
                gallery: { enabled: true }, // 좌우로 사진 돌려보기 생성
                zoom: { enabled: true, duration: 400 }
            }
        ]
    });
    $('.wi5').magnificPopup({
        items: [
            {
                src: "./images/wedding5.jpg",
                // type:'iframe',
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                image: { verticalFit: true },
                gallery: { enabled: true }, // 좌우로 사진 돌려보기 생성
                zoom: { enabled: true, duration: 400 }
            }
        ]
    });
    $('.wi6').magnificPopup({
        items: [
            {
                src: "./images/wedding6.jpg",
                // type:'iframe',
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                image: { verticalFit: true },
                gallery: { enabled: true }, // 좌우로 사진 돌려보기 생성
                zoom: { enabled: true, duration: 400 }
            }
        ]
    });
    $('.wi7').magnificPopup({
        items: [
            {
                src: "./images/wedding7.jpg",
                // type:'iframe',
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                image: { verticalFit: true },
                gallery: { enabled: true }, // 좌우로 사진 돌려보기 생성
                zoom: { enabled: true, duration: 400 }
            }
        ]
    });
    $('.wi8').magnificPopup({
        items: [
            {
                src: "./images/wedding8.jpg",
                // type:'iframe',
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                image: { verticalFit: true },
                gallery: { enabled: true }, // 좌우로 사진 돌려보기 생성
                zoom: { enabled: true, duration: 400 }
            }
        ]
    });
    $('.wi9').magnificPopup({
        items: [
            {
                src: "./images/wedding9.jpg",
                // type:'iframe',
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                image: { verticalFit: true },
                gallery: { enabled: true }, // 좌우로 사진 돌려보기 생성
                zoom: { enabled: true, duration: 400 }
            }
        ]
    });
    (function () {

        /**
         * 사이트 네임스페이스 초기화
         */
        var initNamespace = function() {
            if (typeof window.lddi === 'undefined') {
                window.lddi = {
                    util: {},
                    siteCode: {}
                };
            }
        };
    
    
        var AppLink = {
            aosUrl: 'intent://scan/#Intent;scheme=kakaomap;package=net.daum.android.map;end',
            iosUrl: 'http://itunes.apple.com/app/id304608425',
            customSchemeMain: 'kakaomap://gate?page=a0137',
            googlePlayUrl: 'https://play.google.com/store/apps/details?id=net.daum.android.map',
            isIPHONE: (navigator.userAgent.match('iPhone') != null || navigator.userAgent.match('iPod') != null),
            isIPAD: (navigator.userAgent.match('iPad') != null),
            isANDROID: (navigator.userAgent.match('Android') != null),
            isMobile: function () {
                if (AppLink.isANDROID || AppLink.isIPHONE || AppLink.isIPAD) {
                    return true;
                } else {
                    alert('모바일 환경에서만 동작합니다.');
                    return false;
                }
            },
            installApp: function () {
                if (AppLink.isIPHONE || AppLink.isIPAD) {                
                    // 2019-03-22 timer
                    AppLink.iosLink();
                } else if (AppLink.isANDROID) {
                    AppLink.androidIntent(AppLink.aosUrl);
                }
            },
            executeApp: function (url) {
                if (AppLink.isIPHONE || AppLink.isIPAD) {
                    window.location.href = url;
                } else if (AppLink.isANDROID) {
                    AppLink.androidCustomScheme(url);
                }
            },
            ios: function () {
                AppLink.iosLink();
    
                window.location.href = AppLink.customSchemeMain; //앱이동
            },
            /**
             * ios 마켓 링크 이동
             */
            iosLink: function () {
                var clickedAt = +new Date;
                setTimeout(function () {
                    if (+new Date - clickedAt < 2000) {
                        window.location.href = AppLink.iosUrl;
                    }
                }, 1500);
            },
            androidIntent: function (url) {
                var b = new Date();
                setTimeout(function () {
                    if (new Date() - b < 1500) {
                        window.location.href = url;
                    }
                }, 500);
            },
            /**
             * android 커스텀스킴 이동
             */
            androidCustomScheme: function (customScheme) {
                setTimeout(function () {
                    var iframe = document.createElement('iframe');
                    iframe.style.visibility = 'hidden';
                    iframe.src = customScheme;
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe); // back 호출시 캐싱될 수 있으므로 제거
                }, 1000);
            },
            android: function () {
                if (AppLink.isANDROID || AppLink.isIPHONE || AppLink.isIPAD) {
                    AppLink.androidIntent(AppLink.aosUrl);
                    AppLink.androidCustomScheme(AppLink.customSchemeMain);
                } else {
                    window.location.href = AppLink.googlePlayUrl;
                }
            },
            appMove: function (customScheme, isAppMove) {
                if (!customScheme) {
                    //main 이동
                    customScheme = AppLink.customSchemeMain;
                }
    
                // 바로 앱 이동일 경우
                if (isAppMove) {
                    if (AppLink.isANDROID) {
                        AppLink.androidIntent(AppLink.aosUrl);
                    }
    
                    AppLink.executeApp(customScheme);
                } else {
                    if (!AppLink.isMobile()) return;
                    AppLink.installApp(); //app move
                    AppLink.executeApp(customScheme);
                }
            }
        };
    
        (function () {
            initNamespace();
            lddi.AppLink = AppLink;
        })();
    
        return lddi;
    })();
})