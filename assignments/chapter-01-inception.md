###Theory- 

Q: What is Emmet

A: Emmet is a web development tool that speeds up writing HTML and CSS code.
   It allows you to use abbrevations that expands into full fledfe HTML/CSS code snippets.

   EX: type html:5 and press tab - it will give you full fledge html code structure.

***

Q: Difference between library and framework

A: 
- The main differene is in a library you call the code and in framework code calls you
- Framework provides structure for building the application while libraries are more flexible
- Library: - A collection of functions/classes that you can call to perform specific action
           - You remain in control of the flow of the application and choose when to call library
- Framework: - Provides a skeleton where application code is plugged in
             - It dictates the flow of control   

***

Q: What is CDN . Why do we use it

A: 
- CDN stands for content delivery network
- it is a network of distributed systems that work together to deliver content to user based on geographical location.
- reduces latency(delay between the sender and receiver in a communication network) 
  and improve the performance of loading web page.

Why to use
- Faster Content delivery: By caching content on servers located near you - reduces latency
- Scalability: CDN can handle large amount of traffic and distriubte it accross their network of servers i.e less load on origin server
- Reliability: CDNs offer redundancy and failover mechanisms, ensuring that content is always available even if some servers fail.
- Cost-Effectiveness: CDNs can help reduce bandwidth costs by offloading traffic from origin servers and optimizing content delivery.

***

Q: Why is react known as react

A: React is named React because of its ability to react to changes in data.
   React is a JavaScript-based UI development library. 
   Facebook and an open-source developer community run it.

***

Q: What is crossorigin in script tag

A: It is used to specify how the browser should handle request for the script tag while 
   loading it from different domain. 
   can have 2 values - 
   1. `anonymus`: default value.indicates that the script does not require any credentials 
   2. `use-credentials`: indicates that the script requires credentials to be fetched
                         The browser will include cookies and HTTP authentication credentials in the request.

ex: 
```
<script src="https://example.com/script.js" crossorigin></script>

```

***

Q: Diff bw react and reactDOM

A: 
- React:
    - it is the core library for building user interface
    - provides the main API for defining React components like createComponent

- ReactDOM:
    - It is the library that provides DOM-specific methods for rendering React components.
    - ReactDOM is specific to web development

***

Q: What is difference between react.development.js and react.production.js files via CDN?

A: 

- react.development.js
    -  intended for use in development environments
    - It includes additional warnings, error messages, and debugging information 
    to help developers identify and fix issues in their code.
    - larger in size

- react.production.js
    - optimized for production environments
    - It removes the warnings, error messages, and debugging information present 
    in the development version to reduce file size and improve performance.
    - smaller in size because it is optimized

***

Q: What is async and defer

A: 
- Async attribute
     - scirpt is fetched parallely asynchronously along with the HTML parsing
     - once the scirpt is fetched HTML parsing is paused and script is executed
       when above is done HTML parsing resumes
- Differ attribute
     - script is fetched parallel to HTML parsing
     - execution will only start once HTML parsing is complete
