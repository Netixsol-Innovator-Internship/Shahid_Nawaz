const input=document.querySelector("#search")
const card=document.querySelector("#card")
const button=document.querySelector("#btn")
const githubURL = "https://api.github.com/users/";

// const userName="shahid"
const getUser=async(userName)=>{
 fetch(githubURL+userName)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return response.json();
  }) 
  .then(data => {
    console.log(data);
    card.innerHTML=`
    <div class="flex justify-center ">
                    <img class="w-32 h-32 rounded-full"
                        src="${data.avatar_url}"
                        alt="">
                    </div>
                    <div class="lg:w-3/4 mx-auto  md:p-3 flex flex-col space-y-6">
                      <div class="flex flex-row max-sm:flex-col justify-between ">
                         <div class="flex flex-col ">
                           <h1 id="name" class="text-lg font-bold">${data.name}</h1>
                           <p class="text-blue-300">${data.company==""?data.company:"not available"}</p>
                         </div>
                         <div class="">
                            <h1 class="font-bold">${data.created_at.split('T')[0]}</h1>
                         </div>
                      </div>
                      <h1 class="">${data.bio==""?data.bio:""}</h1>
                    <div class="flex flex-row items-center justify-between bg-slate-100 rounded-lg shadow-md md:p-7 dark:bg-slate-700">
                            <div class="flex flex-col items-center justify-center">
                                <h1 class="text-lg max-sm:text-sm max-sm:font-medium font-semibold pb-6">Repoes</h1>
                                <p class="font-extrabold text-3xl">${data.public_repos}</p>
                             </div>
                            <div class="flex flex-col items-center justify-center">
                                <h1 class="text-lg font-semibold pb-6">Follower</h1>
                                <p class="font-extrabold text-3xl">${data.followers}</p>
                             </div>
                             <div class="flex flex-col items-center justify-center">
                                <h1 class="text-lg font-semibold pb-6">Following</h1>
                                <p class="font-extrabold text-3xl">${data.following}</p>
                             </div>
                        </div>
                        <div class="flex flex-row max-sm:flex-col items-start flex-nowrap mt-8 ">
                            <div class="flex flex-row w-1/2 space-x-4">
                                <span><ion-icon name="location-sharp"></ion-icon></span>
                                <p>${data.location==""?data.location:"Not available"}</p>
                            </div>
                            <div class="flex flex-row w-1/2 space-x-4">
                                <span><ion-icon name="logo-twitter"></ion-icon></span>
                                <p>${data.twitter_username==""?data.twitter_username:"not available"}</p>
                            </div>
                        </div>
                        <div class="flex flex-row max-sm:flex-col items-start flex-nowrap mt-8">
                            <div class="flex flex-row w-1/2 space-x-4">
                                <span><ion-icon name="link-sharp"></ion-icon></span>
                                <p>${data.html_url
                                  ==""?data.html_url
                                  :"not available"}</p>
                            </div>
                            <div class="flex flex-row w-1/2 space-x-4">
                                <span><ion-icon name="business-sharp"></ion-icon></span>
                                <p>@github</p>
                            </div>
                    </div>
    `
  })
  .catch(error => {
    console.error("Error:", error);
  });
 
}
// getUser("ali")
// button.addEventListener("click",function(){
//   console.log(input.value)
// getUser(input.value)
// })


function get(){
  console.log(input.value)
  getUser(input.value)
}


// // dark mode script start
// const darkButton = document.getElementById("darkButton");
// const brightButton = document.getElementById("brightButton");
// const sunIcon = document.querySelector("ion-icon[name='sunny-outline']");
// const moonIcon = document.querySelector("ion-icon[name='moon']");
// const userTheme = localStorage.getItem("theme");
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
// const iconToggle = () => {
//   moonIcon.classList.toggle("display-none");
//   sunIcon.classList.toggle("display-none");
// };
// const themeCheck = () => {
//   if (userTheme === "dark" || (!userTheme && systemTheme)) {
//     document.documentElement.classList.add("dark");
//     moonIcon.classList.add("display-none");
//     brightButton.classList.add("hidden");
//     return;
//   }
//   sunIcon.classList.add("display-none");
//   darkButton.classList.remove("hidden");
// };
// const toggleTheme = (theme) => {
//   if (theme === "dark") {
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
//   iconToggle();
//   darkButton.classList.toggle("hidden");
//   brightButton.classList.toggle("hidden");
// };
// darkButton.addEventListener("click", () => {
//   toggleTheme("dark");
// });
// brightButton.addEventListener("click", () => {
//   toggleTheme("light");
// });
// themeCheck();
// // end