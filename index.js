/**
  * taken largely from this stackoverflow discussion:
  * http://stackoverflow.com/questions/133925/javascript-post-request-like-a-form-submit
  */

function postToUrl(path, params, method) {
    
    method = method || "post";
    path = path || window.location.href;

    var form = document.createElement("form");

    //Move the submit function to another variable
    //so that it doesn't get overwritten.
    var submitFunc = form.submit;

    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);

        form.appendChild(hiddenField);
    }
    document.body.appendChild(form);
    submitFunc.call(form); //Call the renamed function.
}

module.exports = postToUrl;