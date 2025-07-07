const nodejsquestions = [
  {
    question: "What is the default file for a Node.js project?",
    options: ["index.js", "package.json", "node.json", "app.js"],
    correctAnswer: 1,
  },
  {
    question: "Which function is used to read files asynchronously in Node.js?",
    options: ["fs.readSync", "fs.open", "fs.readFile", "fs.read"],
    correctAnswer: 2,
  },
  {
    question: "Which module is used to create an HTTP server in Node.js?",
    options: ["net", "url", "http", "fs"],
    correctAnswer: 2,
  },
  {
    question: "Which keyword is used to define an asynchronous function?",
    options: ["await", "async", "defer", "promise"],
    correctAnswer: 1,
  },
  {
    question: "What is the full form of REPL in Node.js?",
    options: [
      "Run Execute Program Loop",
      "Read Evaluate Print Loop",
      "Read Echo Print Loop",
      "Resolve Error Parse Loop",
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you export a module in Node.js?",
    options: [
      "exports.module",
      "module.export",
      "module.exports",
      "export default",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which middleware is commonly used to parse JSON bodies in Express?",
    options: ["body-parser", "express-parse", "json-parser", "cookie-parser"],
    correctAnswer: 0,
  },
  {
    question: "Which command installs a package globally?",
    options: [
      "npm install packagename -g",
      "npm add packagename",
      "npm install -g packagename",
      "node install packagename",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is used to handle unhandled exceptions?",
    options: [
      "error.on",
      "process.on('uncaughtException')",
      "try.catch",
      "throw new Error",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which tool is used to automatically restart a Node.js app?",
    options: ["pm2", "node-restart", "nodemon", "forever"],
    correctAnswer: 2,
  },
  {
    question: "Which method is used to include a module in Node.js?",
    options: ["require()", "include()", "import()", "use()"],
    correctAnswer: 0,
  },
  {
    question: "What does the `process` object in Node.js refer to?",
    options: [
      "The current file",
      "The current running Node.js process",
      "Node.js configuration",
      "File system status",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which HTTP method is used to update data?",
    options: ["GET", "PUT", "POST", "DELETE"],
    correctAnswer: 1,
  },
  {
    question: "Which of these is NOT a core module in Node.js?",
    options: ["http", "url", "events", "axios"],
    correctAnswer: 3,
  },
  {
    question: "What will `console.log(typeof exports)` return in Node.js?",
    options: ["undefined", "object", "function", "module"],
    correctAnswer: 1,
  },
  {
    question: "What is the default scope of variables in Node.js files?",
    options: ["Global", "Block", "File", "Function"],
    correctAnswer: 2,
  },
  {
    question: "How can you handle promises in Node.js?",
    options: ["try.catch", ".then().catch()", "with await()", "handle()"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary use of the `cluster` module?",
    options: [
      "Load balancing",
      "File compression",
      "Multithreading",
      "Security",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which method ends the response in an HTTP server?",
    options: ["res.stop()", "res.terminate()", "res.end()", "res.finish()"],
    correctAnswer: 2,
  },
  {
    question: "Which port does Node.js typically run on for development?",
    options: ["80", "3000", "5000", "8080"],
    correctAnswer: 1,
  },
  {
    question: "What is the role of `package-lock.json` in a Node.js project?",
    options: [
      "It locks the project files",
      "It tracks installed packages with exact versions",
      "It defines entry point",
      "It sets up server configs",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which function is used to write to a file in Node.js?",
    options: ["fs.append()", "fs.write()", "fs.writeFile()", "fs.insert()"],
    correctAnswer: 2,
  },
  {
    question: "What does `__dirname` return?",
    options: [
      "The current directory",
      "The module name",
      "The parent directory",
      "The project name",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which Express.js method is used to define middleware?",
    options: ["app.route()", "app.listen()", "app.middleware()", "app.use()"],
    correctAnswer: 3,
  },
  {
    question: "What does `npm` stand for?",
    options: [
      "Node Package Manager",
      "New Project Module",
      "Node Program Manager",
      "Next Package Module",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a templating engine for Node.js?",
    options: ["Jade", "Bootstrap", "jQuery", "Sass"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of `next()` in Express middleware?",
    options: [
      "Stop the server",
      "Pass control to the next middleware",
      "Exit middleware",
      "Handle error",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which method is used to parse URL strings in Node.js?",
    options: ["url.parse()", "http.parse()", "fs.parse()", "query.parse()"],
    correctAnswer: 0,
  },
  {
    question: "What does `res.status(404).send('Not found')` do?",
    options: [
      "Redirects",
      "Sends a 404 response",
      "Logs the error",
      "Crashes the app",
    ],
    correctAnswer: 1,
  },
  {
    question: "How to install a specific version of a package using npm?",
    options: [
      "npm install package@version",
      "npm install version package",
      "npm update package version",
      "npm get package version",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which method is used to remove a file in Node.js?",
    options: ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.destroy()"],
    correctAnswer: 0,
  },
  {
    question: "Which core module is used to handle events in Node.js?",
    options: ["event", "events", "emitter", "handler"],
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following is used for environment variable management?",
    options: [".env", "config.js", "system.json", "vars.config"],
    correctAnswer: 0,
  },
  {
    question: "How do you make an asynchronous function synchronous?",
    options: [
      "Use `then()`",
      "Use `async/await`",
      "Use `callback`",
      "Use `setTimeout`",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is `middleware` in Express.js?",
    options: [
      "HTML handler",
      "Function that handles requests/responses",
      "Database connector",
      "Frontend logic",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does the `crypto` module provide?",
    options: [
      "Database support",
      "Hashing and encryption",
      "Authentication",
      "Compression",
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you send a JSON response in Express?",
    options: ["res.writeJSON()", "res.send()", "res.json()", "res.response()"],
    correctAnswer: 2,
  },
  {
    question: "Which of these is NOT a stream type in Node.js?",
    options: ["Readable", "Writable", "Transform", "Compressible"],
    correctAnswer: 3,
  },
  {
    question:
      "Which method is used to install all dependencies in package.json?",
    options: ["npm install", "npm start", "npm init", "npm run"],
    correctAnswer: 0,
  },
  {
    question: "Which header is often used to send API keys?",
    options: ["x-api-token", "auth-header", "x-api-key", "api-key"],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of `module.exports`?",
    options: [
      "Export functions or objects from a file",
      "Import files",
      "Initialize packages",
      "Run scripts automatically",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which command initializes a new Node.js project?",
    options: ["npm start", "node init", "npm init", "npx create-node"],
    correctAnswer: 2,
  },
  {
    question: "Which HTTP status code means 'Forbidden'?",
    options: ["404", "401", "500", "403"],
    correctAnswer: 3,
  },
  {
    question: "What is `nodemon` used for?",
    options: [
      "Monitoring file changes and restarting server",
      "Linting code",
      "Installing dependencies",
      "Compiling frontend files",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which of the following is a correct way to handle errors in async/await?",
    options: ["await().error()", "try/catch", "setTimeout()", "errorHandler()"],
    correctAnswer: 1,
  },
  {
    question: "What is the use of the `cors` package?",
    options: [
      "Secures passwords",
      "Compresses responses",
      "Enables cross-origin requests",
      "Encrypts headers",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of these is NOT a Node.js global object?",
    options: ["process", "__filename", "setInterval", "request"],
    correctAnswer: 3,
  },
  {
    question: "What is the first argument passed to a Node.js callback?",
    options: [
      "The return value",
      "An error object",
      "The response",
      "Callback ID",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which protocol does the `http` module support?",
    options: ["FTP", "HTTP", "HTTPS", "SMTP"],
    correctAnswer: 1,
  },
  {
    question: "Which tool is used to manage multiple Node.js versions?",
    options: ["NVM", "PM2", "Nodemon", "NPM"],
    correctAnswer: 0,
  },
];
export default nodejsquestions;
