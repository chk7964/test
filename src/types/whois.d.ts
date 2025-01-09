declare module 'whois' {
  // Define the types for 'whois' module if known
  // Example:
  export function lookup(
    domain: string,
    options?: object,
    callback?: (err: Error | null, data: any) => void
  ): void
}
