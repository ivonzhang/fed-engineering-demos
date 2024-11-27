type IFooFuncType = () => void;

export const foo: IFooFuncType = () => console.log('foo');

export interface IFooModel {
  a: number;
  b: string;
}

export const setFoo = (val: IFooModel) => {
  console.log('setFool', val)
}
