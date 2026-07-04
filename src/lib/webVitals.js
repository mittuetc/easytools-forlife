
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

/**
 * Logs web vitals to the console for performance monitoring
 * In a real production app, you might send this data to an analytics endpoint
 */
export function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  } else {
    // Default logging if no custom handler is provided
    onCLS(console.log);
    onFID(console.log);
    onFCP(console.log);
    onLCP(console.log);
    onTTFB(console.log);
  }
}
