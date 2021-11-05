import type { NextFetchEvent, NextRequest } from 'next/server';

/*eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const middleware = (req: NextRequest, ev: NextFetchEvent) => {
  return console.log("Hey, I'm your middleware!");
};
