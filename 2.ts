enum userRole {
    ADMIN = "admin",
    EDITOR = "editor",
    VIEWER = "viewer"
}



function canEdit(role: userRole): boolean {
    return role == "editor" ? true : false;
}


function canDelete(role: userRole): boolean {
    return role == "admin" ? true : false;
}

function canView(role: userRole): boolean {
    return role == "viewer" ? true : false;
}

let role: userRole = userRole.ADMIN


console.log(canDelete(role))
