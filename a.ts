const subtract = (a: number, b: number) => a - b;
const asc = subtract;

const min = (list: number[]) => [...list.sort(asc)].at(0);
const max = (list: number[]) => [...list.sort(asc)].at(-1);
