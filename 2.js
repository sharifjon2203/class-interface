var userRole;
(function (userRole) {
    userRole["ADMIN"] = "admin";
    userRole["EDITOR"] = "editor";
    userRole["VIEWER"] = "viewer";
})(userRole || (userRole = {}));
function canEdit(role) {
    return role == "editor" ? true : false;
}
function canDelete(role) {
    return role == "admin" ? true : false;
}
function canView(role) {
    return role == "viewer" ? true : false;
}
var role = userRole.ADMIN;
console.log(canDelete(role));
