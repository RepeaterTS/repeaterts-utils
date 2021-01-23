const loglevel = process.env.loglevel ? +process.env.loglevel : 0;
export function log(...args: any[]) {
  if (loglevel > 0) console.log(loglevel > 1 ? `[${process.pid}] ` : '', ...args);
}
