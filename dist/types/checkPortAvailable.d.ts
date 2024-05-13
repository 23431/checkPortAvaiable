import { IResult } from './type';
declare function checkPort(port: number): Promise<IResult>;
/***
 *
 * port base port
 *
 */
declare function getAvailablePort(port: number): Promise<IResult>;
export { getAvailablePort, checkPort };
