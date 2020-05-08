const { remote } = require('electron');

const { Notification } = remote;

function showNotify() {
  const noti = new Notification({
    title: 'Notification!',
  });
  noti.show();
}

const elShowNotify = document.getElementById('show_notify');
elShowNotify.addEventListener('click', showNotify);
