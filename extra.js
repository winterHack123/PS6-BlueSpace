// const getData = async () => {
//     const res = await fetch(apiEndpoint);
//     const data = await res.json();
//     return data
// }

// const displayUsers = async () => {
//     let query = input.value;
//     console.log('Query: :', query);

//     const payload = await getData();

//     let dataDisp1ay = payload.filter((eventData) => {
//         if (query === "") { return eventData }
//         else if (eventData.name.toLowerCase().includes(query.toLowerCase()))
//             return eventData
//     }).map((object) {
//         const { name, username } = object;
       
//         return
// <div
// ${name}
// <p>Username:



//     }).join("")

//     display.innerHTML = dataDisptay;
// }
// displayUsers()