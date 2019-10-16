export interface IObject {
    [props: string]: any;
}
export type IFunction = (result: any) => any;

export type IMethods = "POST" | "PUT" | "GET" | "DELETE" | "PATCH";