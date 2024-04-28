
/***
 * port port number
 * staus port avaiable
 * msg port not avaiable msg
 */

export interface IResult {
    port: number;
    status: boolean;
    msg: Error | null
}