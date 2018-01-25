declare function print(...messages: any[]): void;
declare function require(module: string): any;

declare function type(variable: any): string;

declare function setmetatable(tbl: table, metaTbl: table)
declare function getmetatable(tbl: table): table

declare function assert(v: any, message?: string): any
declare function error(message: string, level?: number)

declare function dofile(filename?: string): any

declare function getfenv(f: Function): table
declare function setfenv(f: Function, tbl : table) : Function

declare function load(func: Function, chunkname?: string): Function
declare function loadfile(filename?: string): Function
declare function loadstring(str: string, chunkname?: string): Function

declare function pcall(f, ...args: any[]) : any

declare function tonumber(e:any, base?: number) : number
declare function tostring(e : any) : string
