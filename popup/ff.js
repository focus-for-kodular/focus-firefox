let notoolbar = document.getElementById('notoolbar');
let stop = document.getElementById('stop');
let focus = document.getElementById('focus');


notoolbar.onclick = function(element) {
  browser.tabs.executeScript({
    code: `document.getElementsByClassName('ya-Toolbar')[0].style.display = 'inline-table'; var x = document.getElementsByClassName('top-panel-container'); var i; for (i = 0; i < x.length; i++) { x[i].style.display = 'none';}`

  });
};

stop.onclick = function(element) {
  browser.tabs.executeScript({
    code: `document.getElementsByClassName('ya-Toolbar')[0].style.display = 'inline-table'; var x = document.getElementsByClassName('top-panel-container'); var i; for (i = 0; i < x.length; i++) { x[i].style.display = 'inline-table';}`  });
};

focus.onclick = function(element) {
  browser.tabs.executeScript({
    code: `document.getElementsByClassName('ya-Toolbar')[0].style.display = 'none'; var x = document.getElementsByClassName('top-panel-container'); var i; for (i = 0; i < x.length; i++) { x[i].style.display = 'none';}`

  });
};
