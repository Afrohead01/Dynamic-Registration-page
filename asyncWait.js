console.log('Person1: Ticket')
console.log('Person2: Ticket')

const preMovie = async() =>{
    const MywifeGotTheTickets = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Ticket')
        },3000)
    })

    const getPopcorn = new Promise((resolve, reject)=> resolve(`Popcorn`))
    const getButter = new Promise((resolve, reject)=> resolve(`Butter`))
    const getCoke = new Promise((resolve, reject)=> resolve(`Coke`))

    let Ticket = await MywifeGotTheTickets;
    console.log('wife: Here the tickets')
    console.log('husband: Lets go in')
    console.log('wife: No I am hungry')

    let  [Popcorn, Butter, Coke] = await Promise.all([getPopcorn, getButter, getCoke])
    console.log('husband: Wait i will get them')
    console.log(`Here i brought you ${Popcorn}, ${Butter} and ${Coke}`)
    console.log('Lets go in now We are late')

    return Ticket
}
preMovie().then((m)=> console.log(`Person3: ${m}`))



console.log('Person4: Ticket')
console.log('Person5: Ticket')