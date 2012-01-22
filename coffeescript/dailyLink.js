(function() {

  window.onload = function() {
    var computeDate, computeDateFromDate, getDateString, rewriteDailyLink, rewriteDailyLinks;
    computeDate = function(year, month, day, addDays) {
      var addSec, baseSec, dt, targetSec;
      dt = new Date(year, month - 1, day);
      baseSec = dt.getTime();
      addSec = addDays * 86400000;
      targetSec = baseSec + addSec;
      dt.setTime(targetSec);
      return dt;
    };
    computeDateFromDate = function(date, addDays) {
      var dd, dt, mm, yy;
      yy = date.getFullYear();
      mm = date.getMonth() + 1;
      dd = date.getDate();
      dt = computeDate(yy, mm, dd, addDays);
      return dt;
    };
    getDateString = function(date) {
      var dd, dt, mm, yy;
      yy = date.getFullYear();
      mm = date.getMonth() + 1;
      dd = date.getDate();
      if (yy < 2000) yy += 1900;
      if (mm < 10) mm = "0" + mm;
      if (dd < 10) dd = "0" + dd;
      dt = yy + mm + dd;
      return dt;
    };
    rewriteDailyLink = function(linkID, rewriteLink) {
      var aTag, baseTag, link1, linkURL;
      linkURL = "http://b.hatena.ne.jp/Naruhodius/" + rewriteLink;
      baseTag = document.getElementById(linkID);
      link1 = baseTag.firstChild.nodeValue;
      aTag = document.createElement("a");
      aTag.href = linkURL;
      aTag.appendChild(document.createTextNode(link1));
      return baseTag.replaceChild(aTag, baseTag.firstChild);
    };
    rewriteDailyLinks = function() {
      var today;
      today = new Date();
      rewriteDailyLink("three_days_before_yesterday", getDateString(computeDateFromDate(today, -4)));
      rewriteDailyLink("two_days_before_yesterday", getDateString(computeDateFromDate(today, -3)));
      rewriteDailyLink("day_before_yesterday", getDateString(computeDateFromDate(today, -2)));
      rewriteDailyLink("yesterday", getDateString(computeDateFromDate(today, -1)));
      return rewriteDailyLink("today", getDateString(today));
    };
    return rewriteDailyLinks();
  };

}).call(this);
