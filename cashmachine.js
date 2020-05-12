let user = {
    


}

const genAccNum = () =>{
    return Math.random();


}

const createUser = (name, pin) => {
    let accNum = genAccNum();

    user[accNum] = {
        name,
        pin,
    }
}

createUser("jason", 1234)
createUser("Nikk",8894)
createUser("claire", 4563)

console.table(user);