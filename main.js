
let serverUrl = 'http://localhost:3030/body.php';
const hosting = 'http://technik300.ml/?i=1'

const url = 'http://technik300.ml/?i=1'

// Version 0
fetch(url).then((response) => response.text())
      .then((data) => {
        console.log('Success:', data);
      })  

// Version 1
// fetch(serverUrl,{method: "GET"}) 
// .then( response => {
// 	if (response.status !== 200) {
//         return Promise.reject(); 
//   }
//      response.text()
// })
// .then(i => console.log(i))
// .catch(() => console.log('ошибка')); 


// version 2
// const xhr = new XMLHttpRequest()
// xhr.open('GET', hosting);

// xhr.onload = () => {
//     console.log(xhr.response);
// }
// xhr.send()

// Version 3
// async function getMyDate(){  
//       let response =  fetch(url, {method: 'GET',  mode: 'cors',
//       headers: {
//           'Content-Type': 'application/json',
//       }})
//       .then((response) => response.text())
//       .then((data) => {
//         console.log('Success:', data);
//       })    
//     }
    
// getMyDate()

// Version 4
// fetch(hosting, {method: 'GET',  mode: 'cors',
// headers: {
//     'Content-Type': 'application/json',
// }})
//   .then((response) => response.text())
//   .then((data) => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// ==============================
// async function getUser() {
//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     const result = await response.text();
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUser();

// ==================
// async function getUser() {
//       try {
//         const response = await fetch(url, {
//           method: 'GET',
//           headers: {
//             accept: 'application/json',
//           },
//         });
    
//         if (!response.ok) {
//           throw new Error(`Error! status: ${response.status}`);
//         }
    
//         const result = await response.text();
//         return result;
//       } catch (err) {
//         console.log('what?',err);
//       }
//     }
    
//     getUser();
