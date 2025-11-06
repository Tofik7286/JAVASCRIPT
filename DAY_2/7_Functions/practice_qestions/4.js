// 4. Create a function that builds a username from a full name.
let full_name = "Shaikh Mohammad Tofik"
function username_from_fullname(full_name){
    return full_name.split(" ").join("").toLowerCase()
}

let result = username_from_fullname(full_name)
console.log(result);
