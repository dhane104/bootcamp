const userinfo =localstorage.getitem("usersinfo");

console.log(window.location.herf);

function goto(fileName) {
    link = link.split("/")
    link.pop();
    let newlink = link.join("/")
    newlink = newlink +"/registration.html";
    window.location.herf = newlink;
}

if (!usersinfo) {
    goto("registration.html");
}