let Posts = [
    {title:'object1', body:'This is first post'},
    {title:'object2', body:'This is second post'}
]

function getPosts(){
    setTimeout(()=>{
        let Output = '';
        Posts.forEach((post,index)=>{
         Output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = Output;
    },1000)
}
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            Posts.push(post)

            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong.')
            }
        },2000)
    })
}

function deletePosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Posts.length > 0){
                resolve(Posts.pop());
            }else{
               reject('Array is empty now') 
            }
            
        },1000)
    })
}

/*createPost({title:'object 3', body: 'This is third post'})
.then(()=>{
    getPosts()
    deletePosts().then(()=>{
        getPosts()
        deletePosts().then(()=>{
            getPosts()
            deletePosts().then(()=>{
                getPosts()
                deletePosts()
            })
        })
    })
*/
//promise.all
const promise1 = Promise.resolve('Hello Sharpener!')
const promise2 = 07
const promise3 = new Promise((resolve, reject)=>
    setTimeout(resolve, 3000, 'GoodBye See you!')
)
Promise.all([promise1,promise2,promise3]).then(values => console.log(values))
