define(["jquery","realtimePages","helpers","popup","text!templates/builders.mustache","mustache"],function(e,t,n,r,i,s){var o,u=e("#stepList > li"),a=e(".current-step-js");return o={init:function(){t.initRealtime(o.processBuildDetail)},processBuildDetail:function(t){try{e.each(t,function(t,r){var o=r.times[0],f=r.times[1];if(r.currentStep!=null&&r.currentStep!=undefined){var l=r.currentStep.eta;e(".percent-outer-js").remove();var c=e(s.render(i,{progressBar:!0,etaStart:o,etaCurrent:l})).addClass("build-detail-progress").insertAfter(a);n.delegateToProgressBar(e(".percent-outer-js"))}var h=r.text;n.startCounter(e("#elapsedTimeJs"),o),f&&(window.location.hash||(window.location=window.location+"#finished",window.location.reload()),sock.close());var p=0;e.each(r.steps,function(t,r){var i=r.isStarted,s=r.isFinished===!0,o=i&&!s,f=r.times[0],l=r.times[1],c=n.getResult(r.results[0]),h=r.hidden===!0;if(h!=1){p=++p;if(o){var d=r.logs.length>0,v=r.urls.length>0;if(d){var m="";u.children(".logs-txt").eq(p-1).text("Logs"),e.each(r.logs,function(e,t){var n=t[0],r=t[1];m+='<li class="s-logs-js"><a href='+r+">"+n+"</a></li>"}),u.children(".log-list-js").eq(p-1).html(m)}if(v){var g="";e.each(r.urls,function(e,t){g+='<li class="urls-mod log-list-'+n.getResult(t.results)+'"><a href="'+t.url+'">'+e+"</a></li>"}),u.children(".log-list-js").eq(p-1).append(g)}u.children(".update-time-js").eq(p-1).html("Running"),u.children(".s-text-js").eq(p-1).html(r.text.join(" ")),u.children(".s-result-js").eq(p-1).removeClass().addClass("running result s-result-js"),u.eq(p-1).removeClass().addClass("status-running"),a.text(r.name)}else s&&(u.children(".update-time-js").eq(p-1).html(n.getTime(f,l)),u.children(".s-result-js").eq(p-1).removeClass().addClass(c+" result s-result-js"),u.eq(p-1).removeClass().addClass("finished status-"+c))}})})}catch(r){}}},o});