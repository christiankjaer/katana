define(["moment","helpers"],function(e){function s(){var e=$("#server_time");return e.length?(e.remove(),serverTime):undefined}var t,n=undefined,r=60,i=r*60;return e.fn.fromServerNow=function(){return n!==undefined?this.subtract(n).fromNow():this.fromNow()},t={init:function(){var r=s();n=e(r).diff(new Date),console.log("Time Offset: {0}".format(n));var i=t.getRelativeTimeDict();i.future="ETA: %s",i.past="Overtime: %s",e.lang("progress-bar-en",{relativeTime:i}),i=t.getRelativeTimeDict(),i.future="%s",i.past="Elapsed: %s",e.lang("progress-bar-no-eta-en",{relativeTime:i}),i=t.getRelativeTimeDict(),i.past="%s",i.future="%s",e.lang("waiting-en",{relativeTime:i}),e.lang("en")},getRelativeTimeDict:function(){return{s:"%d seconds",m:t.parseMinutesSeconds,mm:t.parseMinutesSeconds,h:t.parseHoursMinutes,hh:t.parseHoursMinutes,d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}},parseMinutesSeconds:function(e,t,n,i,s){var o=parseInt(s.seconds),u=o%r;if(o<r)return"{0} seconds".format(u);if(o<r*2)return"1 minute, {0} seconds".format(u);var a=Math.floor(o/r);return"{0} minutes, {1} seconds".format(a,u)},parseHoursMinutes:function(e,t,n,s,o){var u=parseInt(o.seconds),a=Math.floor(u%i/r);if(u<i){var f=Math.floor(u/r),l=u%r;return"{0} minutes, {1} seconds".format(f,l)}if(u<i*2)return"1 hour, {0} minutes".format(a);var c=Math.floor(u/i);return"{0} hours, {1} minutes".format(c,a)},getServerTime:function(n){return n===undefined?e().add(t.getServerOffset()):e(n).add(t.getServerOffset())},getServerOffset:function(){return n}},t});