```javascript
const myContacts = [
    {
        id: 1, 
        name: 'Alpha Avalon',
        phone: '+1 111 101010',
        email: 'alpha@avalon.org',
        location: 'batam',
        favorite: true,
        rating: 9,
        tags: ['popular', 'cool']
    }, {
        id: 2,
        name: 'Betty Brave',
        phone: '+62 812 242424',
        location: 'batam',
        email: 'betty@braverian.com',
    }, {
        id: 3,
        name: 'Gamma Gacurio',
        phone: '+63 813 363636',
        location: 'batam',
        email: 'gamma@gacurio.dev'
    }
]

let newContact = {
    id: 4,
    name: 'howoh',
    phone: '+1 132432 14324',
}
console.log(myContacts.map((contact) => console.log(contact)))
console.log(myContacts.filter(contact => contact.location === 'batam'))
myContacts.push(newContact)
myContacts.pop()
myContacts.splice()
console.log(myContacts)


