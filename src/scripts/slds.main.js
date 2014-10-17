(function () {
    'use strict';

    //==================================================
    // "SLDS" NAMESPACE
    //--------------------------------------------------
    window.SLDS = ( typeof SLDS !== 'undefined' && SLDS instanceof Object ) ? SLDS : {

        //--------------------------------------------------
        // CONFIGS
        //--------------------------------------------------
        configs: {
            activeClass: 'slds-active',
            views: {
                'xsmall' : 320,
                'small'  : 460,
                'medium' : 680,
                'large'  : 1200
            },
            isMobile: {
                Android: (function() {
                    return navigator.userAgent.match(/Android/i);
                })(),
                BlackBerry: (function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                })(),
                iOS: (function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                })(),
                Opera: (function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                })(),
                Windows: (function() {
                    return navigator.userAgent.match(/IEMobile/i);
                })()
            }
        },

        //--------------------------------------------------
        // UTILITY METHODS
        //--------------------------------------------------
        utils: {
            getIEVersion: function(){
                var agent = navigator.userAgent;
                var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
                var matches = agent.match(reg);
                if (matches !== null) {
                    return { major: matches[1], minor: matches[2] };
                }
                return { major: '-1', minor: '-1' };
            },
            getViewport: function() {
                var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

                var size;
                if( $('html').hasClass('lt-ie9') ) {
                    size = 'large';
                } else {
                    size = ( w <= SLDS.configs.views.xsmall )? 'xsmall' : size;
                    size = ( w >= SLDS.configs.views.xsmall )? 'small'  : size;
                    size = ( w >= SLDS.configs.views.small  )? 'medium' : size;
                    size = ( w >= SLDS.configs.views.medium )? 'large'  : size;
                    size = ( w >= SLDS.configs.views.large  )? 'xlarge' : size;
                }

                SLDS.configs.viewport = {
                    size: size,
                    width: w,
                    height: h
                };

                return SLDS.configs.viewport;
            }
        }

    };
    //--------------------------------------------------
    // end "SLDS" NAMESPACE
    //==================================================




    //==================================================
    // DOCUMENT READY...
    //--------------------------------------------------

    $(function() {



    });

    //--------------------------------------------------
    // end DOCUMENT READY...
    //==================================================

}());
