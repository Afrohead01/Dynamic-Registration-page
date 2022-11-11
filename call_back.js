Posts = [
    {title:'Post1', body:'This is first post', createdAt: new Date().getTime()},
    {title:'Post2', body:'This is second post', createdAt: new Date().getTime()}
]

function getPosts(){
    setInterval(()=> {
let Output = '';
Posts.forEach((post, index)=>{
Output += `<li>${post.title}-last updated at ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`
})
document.body.innerHTML = Output
    },1000)
}

function createPost(post, callBack){
setTimeout(()=>{
Posts.push({...post, createdAt: new Date().getTime()});
callBack()
},2000)
}
function create4thPost(post, callBack){
    setTimeout(()=>{
        Posts.push({...post, createdAt: new Date().getTime()})
        callBack()
    },6000)
}


createPost({title:'post3', body:'This is 3rd post'}, getPosts)
create4thPost({title:'post4', body:'This is 4th post'},getPosts)