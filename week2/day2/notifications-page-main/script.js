const notifications=[
    {
        name:'Angile gray',
        notification:"react on your post",
        post:"first day at collage",
        time:"1m ago",
        profilePic:"./assets/images/avatar-angela-gray.webp",
        msg:"",
        isRead:true,
        img2:""
    },
    {
        name:'Mark Webber',
        notification:"fallow you",
        post:"",
        time:"1m ago",
        profilePic:"./assets/images/avatar-mark-webber.webp",
        msg:"",
        isRead:true,
        img2:""
    },
    {
        name:'Shahid Nawaz',
        notification:"has join your group",
        post:"netixsol",
        time:"1m ago",
        profilePic:"./assets/images/avatar-anna-kim.webp",
        msg:"",
        isRead:false,
        img2:""
    },
    {
        name:'Jacob Thompson',
        notification:"sent you private message ",
        post:"",
        time:"1week ago",
        profilePic:"./assets/images/avatar-jacob-thompson.webp",
        msg:"how are you",
        isRead:false,
        img2:""
    },
    {
        name:'Kimberly Smith',
        notification:"comment on your picture",
        post:"",
        time:"7m ago",
        profilePic:"./assets/images/avatar-kimberly-smith.webp",
        msg:"",
        isRead:false,
        img2:"./assets/images/image-chess.webp"
    },

    {
        name:'Nathan-peterson',
        notification:"sent you private message ",
        post:"",
        time:"6day ago",
        profilePic:"./assets/images/avatar-nathan-peterson.webp",
        msg:"how are you",
        isRead:false,
        img2:""
    },
  
    {
        name:'Rizky Hasanuddin',
        notification:"comment on your picture",
        post:"",
        time:"1week ago",
        profilePic:"./assets/images/avatar-rizky-hasanuddin.webp",
        msg:"",
        isRead:false,
        img2:"./assets/images/image-chess.webp"
    },

]

const wrapper = document.getElementById('shows')
function showNotification(){
    wrapper.innerHTML=notifications.map((item)=> {
        return `<div class="flex flex-row  items-center p-5 rounded-xl space-x-3 ">
       
        <div class="">
          <img src=${item.profilePic} alt="">
        </div>
        <div class="">
          <p><span class="text-2xl font-semibold text-slate-950"> ${item.name}</span> 
          <span class="text-gray-700 text-lg">${item.notification}</span>
           <span class="font-semibold text-2xl text-gray-500">${item.post}</span> 
           ${item.isRead ? `<span class="w-3 h-3 rounded-full text-red-700"><i class="fa-solid fa-circle"></i></span>`:""}
           </p>
          <span class="text-gray-400">1m ago</span>
          ${item.msg?`<p class=" border border-gray-300 p-3 rounded-lg">${item.msg}</p>`:""}
        </div>

          ${item.img2?`<img src=${item.img2} class="p-5" alt="">`:""}

      </div>`
    })
}

showNotification()