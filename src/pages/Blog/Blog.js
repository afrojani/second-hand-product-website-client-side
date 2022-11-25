import React from 'react';

const Blog = () => {
    return (
        <div className='grid md:grid-cols-2 place-content-center gap-4 my-6'>
            <div className="card sm:w-96 md:w-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-xl font-bold text-violet-700'> What are the different ways to manage a state in a React application?</p>
                    <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage states in React, including the use of:
                        Hooks, React Context API, Apollo Link State</p>
                </div>
            </div>
            <div className="card sm:w-96 md:w-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-xl font-bold text-violet-700'>How does prototypical inheritance work?</p>
                    <p>JavaScript doesn’t use classical inheritance. Instead, it uses prototypal inheritance.

                        In prototypal inheritance, an object “inherits” properties from another object via the prototype linkage. Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. </p>
                </div>
            </div>
            <div className="card sm:w-96 md:w-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-xl font-bold text-violet-700'>What is a unit test? Why should we write unit tests?</p>
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className="card sm:w-96 md:w-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-xl font-bold text-violet-700'>React vs. Angular vs. Vue?</p>
                    <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

                        They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively. The number of job listings related to these frameworks behaves proportionally to their popularity per Stack Overflow: Searching React, Angular, and Vue on LinkedIn job listings leads to 344k, 204k, and 113k results, respectively.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;