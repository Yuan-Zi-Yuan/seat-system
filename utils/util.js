function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var nextDay = date.getDate() + 1

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':') + ' ' + hour + ' ' + [year, month, nextDay].map(formatNumber).join('/') + ' ' + minute
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function loop(date, roomIdx, floorIdx, timeHour, s) {
  if (s == "date") {
    for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
      for (var seatIdx = 0; seatIdx < 6; seatIdx++) {
        for (var timePeiodIdx = 0; timePeiodIdx < (timeHour - 8); timePeiodIdx++) {
          date[floorIdx][roomIdx][tableIdx][seatIdx][timePeiodIdx] = 'S';//stop
        }
      }
    }
  }
  else if (s == "count") {
    var i = 0, j = 0;
    if (floorIdx) {
      floorIdx = 4;
    }
    else {
      var floorIdx = 0;
    }
    for (floorIdx; floorIdx < 5; floorIdx++) {
      for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
        for (var seatIdx = 0; seatIdx < 6; seatIdx++) {
          for (var timePeiodIdx = 0; timePeiodIdx < timeHour; timePeiodIdx++) {
            if (date[floorIdx][roomIdx][tableIdx][seatIdx][timePeiodIdx] == "Y" || "N" || "S") {
              j++;//所有座位数量
              if (date[floorIdx][roomIdx][tableIdx][seatIdx][timePeiodIdx] == "Y") {
                i++;//可以选择的座位数量
              }
            }
          }
        }
      }
    }
    return i / j;
  }
}

function emoji(date, roomIdx, floorIdx, timeHour) {
  var count = loop(date, roomIdx, floorIdx, timeHour, "count");
  console.log(count)
  switch (true) {
    case count < 0.25:
      return 3;
      break;
    case count < 0.5:

      return 2;
      break;
    case count < 0.75:

      return 1;
      break;
    case count <= 1:
      return 0;
      break;
  }
}

module.exports = {
  formatTime: formatTime,
  loop: loop,
  emoji: emoji
}

