//console.log("https://api.github.com/users/shahid");

// const getUser=async(userName)=>{
//     const response=await fatch(githubURL + userName);
//     console.log(response)
// }
// getUser("shahid")

 const githubURL = "https://api.github.com/users/";
// const userName="shahid"
const getUser=async(userName)=>{
 const res= await fetch(githubURL+userName)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
  console.log(res.json)
}
getUser("shahid")