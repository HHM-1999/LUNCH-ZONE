import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-blue mt-8 font-bold text-5xl text-center'>Important Notes</h1>
            </div>
            <div className='mt-5 mx-9 '>
                <h3 className='font-bold text-orange text-2xl'> 1. Difference between SQL and NoSQL</h3>
                <br />
                <p className='font-bold text-black'>Answer: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests.NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases. </p>
                <h3 className='font-bold text-orange text-2xl'> 2. What is JWT, and how does it work?</h3>
                <br />
                <p className='font-bold text-black'>Answer: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.Each JWT contains encoded JSON objects, including a set of claims.JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWTs are digitally signed using either a secret (HMAC) or a public /private key pair (RSA or ECDSA) which safeguards them from being modified by the client or an attacker.Stored only on the client: You generate JWTs on the server and send them to the client.The client then submits the JWT with every request. </p>
                <h3 className='font-bold text-orange text-2xl'> 3. What is the difference between javascript and NodeJS?</h3>
                <br />
                <p className='font-bold text-black'>Answer: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting.It's built into both Java and HTML. On the other hand, Node. js is a server-side scripting language based on the Google Chrome V8 engine. </p>
                <br />
                <h3 className='font-bold text-orange text-2xl'> 4. How does NodeJS handle multiple requests at the same time?</h3>
                <br />
                <p className='font-bold text-black'>Answer: NodeJS receives multiple client requests and places them into EventQueue.NodeJS is built with the concept of event-driven architecture.NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.As is, node.js can process upwards of 1000 requests per second and speed limited only to the speed of your network card.Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue. </p>

            </div>
        </div>
    );
};

export default Blog;