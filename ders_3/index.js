/**
 * ==============================
 *         ASYNC JAVASCRIPT
 * ==============================
 *
 * Async JavaScript allows handling time-consuming operations without blocking the execution of other code.
 */

/**
 * 1. SYNCHRONOUS VS ASYNCHRONOUS CODE
 */

// Synchronous execution (line by line, blocking)
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous execution (non-blocking)
console.log("Start");

setTimeout(() => {
  console.log("Delayed Message");
}, 2000);

console.log("End");

/**
 * OUTPUT:
 * Start
 * End
 * Delayed Message (after 2 seconds)
 */

/**
 * 2. CALLBACKS (OLD WAY OF HANDLING ASYNC CODE)
 */

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

// Using a callback
fetchData((message) => {
  console.log(message);
});

// Drawbacks of callbacks:
// - Callback Hell (nested callbacks make code unreadable)
// - Difficult error handling

/**
 * 3. PROMISES: A CLEANER APPROACH
 */

// Creating a Promise
const myPromise = new Promise((resolve , reject) => {
  setTimeout(() => {
    resolve("Success!");
    // reject("hello")
  }, 2000);
});

// Handling Promises
myPromise
  .then((result) => console.log(result , "true"))  // Success case
  .catch((error) => console.warn(error , "error")) // Error case
  .finally(() => console.log("Finished!"));

/**
 * 4. ASYNC / AWAIT: MODERN WAY TO HANDLE ASYNC CODE
 */

// Async function returning a promise
async function fetchData() {
  return "Data received";
}

fetchData().then(console.log);

// Using 'await' inside an async function
async function fetchWithAwait() {
  console.log("Fetching...");
  let response = await new Promise((resolve) => 
    setTimeout(() => resolve("Data received"), 2000)
  );
  console.log(response);
}

fetchWithAwait();
console.log("Other code running...");

/**
 * OUTPUT:
 * Fetching...
 * Other code running...
 * (Data received after 2s)
 */

/**
 * 5. ERROR HANDLING IN ASYNC / AWAIT
 */

async function fetchWithError() {
  try {
    let response = await new Promise((_, reject) => 
      setTimeout(() => reject("Error!"), 2000)
    );
    console.log(response);
  } catch (error) {
    console.error("Caught an error:", error);
  }
}

fetchWithError();

/**
 * 6. FETCHING DATA WITH 'fetch()'
 */

async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

getData();

/**
 * 7. PARALLEL EXECUTION WITH 'Promise.all()'
 */

async function fetchMultiple() {
  let [user, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json()),
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json()),
  ]);

  console.log("User:", user);
  console.log("Post:", posts);
}

fetchMultiple();

/**
 * 8. HANDLING RACE CONDITIONS WITH 'Promise.race()'
 */

async function raceExample() {
  let result = await Promise.race([
    new Promise((resolve) => setTimeout(() => resolve("Fast Response"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Slow Response"), 3000)),
  ]);
  console.log(result);
}

raceExample();

/**
 * OUTPUT:
 * Fast Response (after 1s)
 */

/**
 * 9. BEST PRACTICES FOR ASYNC JAVASCRIPT
 * ✅ Use async/await instead of callbacks or .then() when possible
 * ✅ Always use try...catch for error handling in async functions
 * ✅ Use Promise.all() for multiple parallel async tasks
 * ✅ Use Promise.race() when the fastest response is needed
 * ✅ Avoid deeply nested async code (keep it modular)
 */

