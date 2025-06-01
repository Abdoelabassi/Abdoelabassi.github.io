interface Window {
  // dataLayer is typically an array of objects.
  // The first push is usually {'gtm.start': number, event: string}
  // Subsequent pushes can be any object representing an event or configuration.
  dataLayer: Array<Record<string, any>>;
}
