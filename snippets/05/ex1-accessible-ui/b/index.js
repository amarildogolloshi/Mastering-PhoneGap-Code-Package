function simpleAlert() {
    let outerDiv = document.createElement("div"),
        innerDiv = document.createElement("div"),
        titleEl  = document.createElement("h1"),
        messageEl =  document.createElement("p"),
        buttonEl = document.createElement("button"),
        mainWindow = document.getElementById("mainWindow");
    outerDiv.setAttribute("is", "y-alert-container");
    innerDiv.setAttribute("is", "y-alert-dialog");
    titleEl.textContent = "Important!";
    messageEl.textContent = "This is an important message. Close this by tapping OK.";
    buttonEl.textContent = "OK";

    // accessibility
    innerDiv.setAttribute("role", "alertdialog");
    messageEl.setAttribute("role", "alert");

    // create the dom structure
    outerDiv.appendChild(innerDiv);
    innerDiv.appendChild(titleEl);
    innerDiv.appendChild(messageEl);
    innerDiv.appendChild(buttonEl);

    document.body.appendChild(outerDiv);
    setTimeout(function () {
      outerDiv.classList.add("visible");
      mainWindow.setAttribute("aria-hidden", true);
      buttonEl.focus();
    }, 0);

    buttonEl.addEventListener("click", function() {
        outerDiv.classList.remove("visible");
        setTimeout(function() {
          mainWindow.removeAttribute("aria-hidden");
          document.body.removeChild(outerDiv);
        }, 400);
    }, false);
}

document.querySelector("[is='y-menu-glyph']").addEventListener("click", simpleAlert, false);
