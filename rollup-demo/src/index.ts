import { foo, setFoo } from './foo';
export type { IFooModel } from './foo';
// export const foo = () => console.log('foo');

foo();

const bar =async (time: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}

export {
  foo,
  bar,
  setFoo,
}
