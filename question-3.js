// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    try { 
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        let result = data.filter((person) => (((person.name).trim()).length) > 17)
        .map((person) => person.name)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

getUsers()

