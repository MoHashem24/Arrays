// Define an array of client objects
let clients = [
    { id: 1, name: 'John', verified: true },
    { id: 2, name: 'Jane', verified: false },
    { id: 3, name: 'Doe', verified: true }
];

// Use the filter method to create a new array containing only verified clients
let verifiedClients = clients.filter(client => client.verified);

// Output the filtered array to the console
console.log(verifiedClients);
/**
 * 
 * Output:
[
    { id: 1, name: 'John', verified: true },
    { id: 3, name: 'Doe', verified: true }
]
 */