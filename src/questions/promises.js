const fetchUser = () => Promise.resolve({ success: true, user: { name: 'James', age: 23 } });

/**
 * === TEST ===
 * When the promise resolves, log either 'Success' or 'Failure' dependent on the value of `success` to the console.
 * Please show 2 examples using both then/catch and async/await.
 */
