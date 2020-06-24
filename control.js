var size = 20;
var repeat_timer;

function AddRemoteButtonText(num, posx, posy, wx, wy, color, label, remote, command, initial_delay, repeat_delay) 
{
    document.write('<div id="' + num + '" class="button ' + color + '" style="position:absolute; top:' + posy + 'px; left:' + posx + 'px; height:' + wy + 'px; width:' + wx + 'px; line-height: ' + wy + 'px;" align="center">' + label + '</div>');
 
}


function AddRemoteButtonPicture(num, posx, posy, wx, wy, color, picture, alt, remote, command, initial_delay, repeat_delay) 
{
    var label;

    label = '<img src="' + picture + '" style="position:absolute; top:' + (wy / 3) + 'px; left:' + (wx / 3) + 'px; width:' + (wx / 3) + 'px; height:' + (wy / 3) + 'px;" alt="' + alt + '">'
    AddRemoteButtonText(num, posx, posy, wx, wy, color, label, remote, command, initial_delay, repeat_delay);
}



/*function EndSendCommand (id)
{
    clearTimeout (repeat_timer);
}

function SendIRCommand (id,remote,command,initial_delay,repeat_delay)
{
    repeat_timer = setTimeout(function () { SendIRCommand(id, remote, command, repeat_delay, repeat_delay, repeat_delay) }, initial_delay);
    xhr('get', '/send.cgi', 'remote=' + remote + '&command=' + command);
}

function SendIRCommandLed (id,remote,command,initial_delay,repeat_delay,led)
{
    repeat_timer = setTimeout(function () { SendIRCommandLed(id, remote, command, repeat_delay, repeat_delay, repeat_delay, led) }, initial_delay);
    xhr('get', '/send.cgi', 'remote=' + remote + '&command=' + command + '&led=' + led);
}
*/
/*function AddLinkButton(posx, posy, wx, wy, color, label, target) 
{
    document.write('<a href="' + target + '" class="button ' + color + '" style="position:absolute; top:' + posy + 'px; left:' + posx + 'px; height:' + wy + 'px; width:' + wx + 'px; line-height:' + wy +'px;">' + label + '</a>');
}
*/


/*@cc_on @if (@_win32 && @_jscript_version >= 5) if (!window.XMLHttpRequest)
window.XMLHttpRequest = function() { return new ActiveXObject('Microsoft.XMLHTTP') }
@end @*/

/*function xhr(method, url, data, cb, apply_para) {
  method = method.toLowerCase();
  var req;
  req = new XMLHttpRequest();
  req.open(method, url + (data && method == 'get' ? '?' + data : ''), true);
  req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  if (method == 'post') {
      req.setRequestHeader("Method", "POST " + url + " HTTP/1.1");
      req.setRequestHeader("Content-Length", data.length);
  }
  req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
              if (cb) {
              cb.apply(null, [req].concat(apply_para));
          }
      }
  }
  req.send(data);
}
*/
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

