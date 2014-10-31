/*
 * jQuery Virtual Counter
 * Version: 1.0 (31/10/2014)
 * Repository: https://github.com/Neolot/jQuery.VirtualCounter
 * License: MIT, http://www.opensource.org/licenses/mit-license.php
 * Copyright: 2014 Yury Pokhylko aka Neolot
 * Author URI: http://neolot.com
 */

(function ($) {
    $.fn.vc = function (options) {
        var settings = $.extend({
            starttime: 9,
            endtime: 22,
            offset: 0,
            min: 1,
            max: 100
        }, options);

        return this.each(function() {
            var date = new Date;
            var hour = date.getHours() + settings.offset;
            var minutes = date.getMinutes();
            var divider = (settings.endtime - settings.starttime)*60/settings.max;

            if ( hour < settings.starttime )
                hour = hour + 24;
            if ( hour >= settings.starttime && hour < settings.endtime ) {
                var counter = Math.round(( (hour - settings.starttime) * 60 + minutes ) / divider);
                if ( !counter || counter < settings.min )
                    counter = settings.min;
            } else {
                counter = settings.min;
            }
            $(this).text(counter);
        });
    };
})(jQuery)
