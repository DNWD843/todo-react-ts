import { ITodo } from "../interfaces";

export const getDataFromStorage = (datakey: string) => JSON.parse(localStorage.getItem(datakey) || '[]') as ITodo[];

export const setDataToStorage = ((datakey:string, data:ITodo[]):void => localStorage.setItem(datakey, JSON.stringify(data)))