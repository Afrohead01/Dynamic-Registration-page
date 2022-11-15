console.log('Person1: Shows Ticket')
console.log('Person2: Shows Ticket')

const myGirlfriendGotTheTicket = new Promise((resolve, reject)=>{
setTimeout(()=>{
    resolve('Ticket')
},3000)
})

const getPopcorn= myGirlfriendGotTheTicket.then((t)=>{
console.log('Girlfriend: I got the Tickets')
console.log('Boyfriend: Lets go inside then ')
console.log('Girlfriend: No I need Popcorn')
return new Promise((resolve,reject)=> resolve(`got ${t}, Popcorn`))
})

const getButter = getPopcorn.then((t)=>{
    console.log('Girlfriend: I need some Butter over the popcorn')
    console.log('Boyfriend: Fine I will get some butter')
    console.log('Boyfriend: Here is your butter')
    console.log('Boyfriend: Now lets go in!')
    console.log('Girlfriend: No you forgot to bring Cold drink')
    return new Promise((resolve,reject)=>resolve(`${t}, Butter`))    
})

const getColdDrinks= getButter.then((t)=>{
    console.log('Boyfriend: Got cold drinks too')
    console.log('Boyfriend: Now please lets go in')
    return new Promise((resolve,reject)=>resolve(`${t} and Cold drink`))
    
    
})

getColdDrinks.then((t)=>console.log(t))

console.log('Person4: Shows Ticket')
console.log('Person5: Shows Ticket')

