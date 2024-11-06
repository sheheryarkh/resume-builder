var form = document.getElementById("input-field");
var main = document.getElementById("parent");
var output_container = document.getElementById("output");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var Name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var skills = document.getElementById("skills").value;
    var exp = document.getElementById("experiance").value;
    var edu = document.getElementById("education").value;
    //   let btn = document.getElementById("btn") as HTMLButtonElement;
    var Parent = document.getElementById("box");
    var output = document.getElementById("output");
    var resume = "<div id=\"Resume\">\n        <div id=\"side\">\n            <h1 id=\"rname\">".concat(Name, "</h1>\n            <h4 id=\"remail\">").concat(email, "</h4>\n            <h4 id=\"rnumber\">").concat(phone, "</h4>\n            <h4 id=\"raddress\">").concat(address, "</h4>\n        </div>\n        <div id=\"oside\">\n            <h1>proficent in</h1>\n            <h4 id=\"rskills\">").concat(skills, "</h4>\n            <h1>Experiance</h1>\n            <h4 id=\"rexp\">").concat(exp, "</h4>\n         <h1>Education</h1>\n         <h4 id=\"redu\">").concat(edu, "</h4>\n\n         <btns id=\"btns\">\n            <button id=\"btn1\">Edit content</button>\n            <button  id=\"dwn\">downlaod Resume</button>\n         </btns>\n        </div>\n    </div>\n");
    if (output) {
        main.style.display = "none";
        output_container.innerHTML = resume;
        var btn1 = document.getElementById("btn1");
        btn1.addEventListener('click', function () {
            console.log("edit");
            main.style.display = 'block';
            output_container.innerHTML = " ";
        });
        var btn2 = document.getElementById("dwn");
        btn2.addEventListener('click', function () {
            var btns = document.getElementById("btns");
            btns.style.display = 'none';
            window.print();
        });
    }
});
