function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function retryIfFailedAsync<T>(fn: () => Promise<T>, retryTimes: number): Promise<T> {
  let attempt = 0;
  let delay = 2000; // Initial delay: 2 seconds

  while (attempt < retryTimes) {
    try {
      return await fn(); // Try executing the async function
    } catch (error) {
      attempt++;
      if (attempt < retryTimes) {
        await wait(delay); // Wait before retrying
        delay *= 2; // Double the delay for the next retry
      } else {
        throw error; // Rethrow the error after the last retry
      }
    }
  }

  throw new Error("Function failed after all retries.");
}
