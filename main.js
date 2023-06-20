let popupWindow;

function openWindow() {
  popupWindow = window.open(
    "https://www.google.com",
    "_blank",
    "width=800,height=600"
  );
}

function closeWindow() {
  if (popupWindow && !popupWindow.closed) {
    popupWindow.close();
  }
}
