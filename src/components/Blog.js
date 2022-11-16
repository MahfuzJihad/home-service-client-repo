import React from "react";

const Blog = () => {
  return (
    <div className="m-10">
      <div className="border-4 border-indigo-600">
        <h2>Q: Difference between SQL and NoSQL</h2>
        <p>
          Answer: SQL is a relational database management system (RDBMS) based
          on relational algebra and tuple relational calculus.“A Relational Model of
          Data for Large Shared Data Banks,” was a huge influence on SQL. It is
          the basis for major database server applications from vendors like
          Oracle, Microsoft, and IBM, and there are embedded versions available
          from many other software vendors. 
          
          NoSQL: NoSQL refers to a class of
          databases that are not built on SQL and are designed to handle very
          large data stores with variable contents. They are often designed to
          support clusters of compute and storage nodes that are common in large
          cloud environments.
        </p>
      </div>
      <div className="border-4 border-indigo-600">
        <h2>Q: What is JWT, and how does it work?</h2>
        <p>
          Answer: JWT, or JSON Web Token, is an open standard used to share
          security information between two parties — a client and a server. Each
          JWT contains encoded JSON objects, including a set of claims. JWTs
          differ from other web tokens in that they contain a set of claims.
          Claims are used to transmit information between two parties. What
          these claims are depends on the use case at hand. For example, a claim
          may assert who issued the token, how long it is valid for, or what
          permissions the client has been granted.
        </p>
      </div>
      <div className="border-4 border-indigo-600">
        <h2>Q: Difference between javascript and NodeJs</h2>
        <p>
          Answer: 
          NodeJS : NodeJS is a cross-platform and opensource Javascript
          runtime environment that allows the javascript to be run on the
          server-side. Nodejs allows Javascript code to run outside the browser.
          Nodejs comes with a lot of modules and mostly used in web development.

          JavaScript : Javascript is a Scripting language. It is mostly
          abbreviated as JS. It can be said that Javascript is the updated
          version of the ECMA script. Javascript is a high-level programming
          language that uses the concept of Oops but it is based on prototype
          inheritance.
        </p>
      </div>
      <div className="border-4 border-indigo-600">
        <h2>Q: How does NodeJs handle multiple request at the same time?</h2>
        <p>
            Answer: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
