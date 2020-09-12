import assert = require("assert");

import override_server from "../_data/override_lua_server.json";
import lua_server from "../_data/lua_server.json";
import lua_server_enums from "../_data/lua_server_enums.json";

const primitives = [
    "cstring",
    "int",
    "float",
    "bool",
    "vector",
    "void"
];

const ReturnIDs = [
    "CCustomGameEventListener", // EWW
    "PlayerID",
    "ParticleID",
    "EventListenerID",
    "ProjectileID",
    "CProjectileID" // EWW
];
const numbers = [
    "float",
    "int",
    "uint",
    "number" // Probably an error later down the track?
]
function typeCompare(overrideType: string, baseType: string, className: string, funcName: string, argIndex?: string) {
    if (overrideType.endsWith("!")) {
        console.warn(ValidationWarning(`${baseType} has been forceably casted to ${overrideType.slice(0, -1)}.`, className, funcName, argIndex));
        return true;
    }
    switch(baseType.toLowerCase()) {
        case "<unknown>":
        case "table":
            // not manually casting <unknown> is considered a failure
            if (overrideType === baseType) {
                console.warn(ValidationWarning(`${baseType} should be casted to something more meaningful.`, className, funcName, argIndex));
            }
            return true;
        case "int":
        case "uint":
        case "float":
            if (numbers.indexOf(overrideType) !== -1 && overrideType !== baseType) {
                console.warn(ValidationWarning(`${baseType} shouldn't be converted to ${overrideType}.`, className, funcName, argIndex));
                return true;
            }
            return overrideType === baseType || Object.keys(lua_server_enums).indexOf(overrideType) !== -1 || ReturnIDs.indexOf(overrideType) !== -1;
        case "cstring":
            if (overrideType === "string") {
                console.warn(ValidationWarning(`${baseType} shouldn't be converted to ${overrideType}.`, className, funcName, argIndex));
                return true;
            }
        case "uint64":
        case "bool":
        case "vector":
        case "qangle":
        case "void":
            return overrideType === baseType;
        case "handle":
            if (overrideType === baseType || overrideType === "table" || overrideType === "function") {
                console.warn(ValidationWarning(`${baseType} should be casted to something more meaningful.`, className, funcName, argIndex));
                return true;
            }
            return overrideType.startsWith("fun(") || Object.keys(lua_server).indexOf(overrideType.replace("?", "").replace(" | nil", "")) !== -1;
        default:
            return false;
    }
}

const fails = [];
let questions = 0;
let nils = 0;
const ValidationMessage = (message: string, className: string, funcName?: string, argIndex?: string) => {
    let argMsg = "";
    if (argIndex !== undefined) {
        argMsg = ` arg ${argIndex}`;
    }
    if (argIndex === "return") {
        argMsg = " return";
    }
    return `[${className}.${funcName || ""}${argMsg}] - ${message}`;
}
const ValidationWarning = (message: string, className: string, funcName?: string, argIndex?: string) => "WARNING: " + ValidationMessage(message, className, funcName, argIndex);
const ValidationError = (message: string, className: string, funcName?: string, argIndex?: string) => "ERROR: " + ValidationMessage(message, className, funcName, argIndex);

function check(condidition: boolean, msg: string, className: string, funcName?: string, argIndex?: string) : boolean {
    if (!condidition) {
        fails.push(ValidationError(msg, className, funcName, argIndex));
    }
    return condidition;
}
for (const className of Object.keys(override_server)) {
    check(className in lua_server, "Overriding a class that doesn't exist", className);
    const baseClass = lua_server[className];
    const overrideClass = override_server[className];

    // You might not be overriding functions
    if (typeof override_server[className].functions === "object") {
        for (const funcName of Object.keys(override_server[className].functions)) {
            check(funcName in baseClass.functions, "Overriding a function that doesn't exist", className, funcName);
            const baseFunc = baseClass.functions[funcName];
            const overrideFunc = overrideClass.functions[funcName];
            if (overrideFunc.return) {
                check(typeCompare(overrideFunc.return, baseFunc.return, className, funcName, "return"), `Overriden return is not compatible, expected ${baseFunc.return} but got ${overrideFunc.return}`, className, funcName, "return");
            }
                
            if (check(baseFunc.args.length === overrideFunc.args.length, `Overriden args should have same length, expected ${baseFunc.args.length} but got ${overrideFunc.args.length}`, className, funcName)) {
                if (overrideFunc.arg_names && baseFunc.arg_names) {
                    check(baseFunc.arg_names.length === overrideFunc.arg_names.length, `Overriden arg names should have same length, expected ${baseFunc.arg_names.length} but got ${overrideFunc.arg_names.length}`, className, funcName);
                }
                for (let i in baseFunc.args) {
                    if ((overrideFunc.args[i] as string).endsWith("?")) {
                        questions++;
                    }
                    if ((overrideFunc.args[i] as string).endsWith(" | nil")) {
                        nils++;
                    }
                    let argName = i;
                    if (baseFunc.arg_names) {
                        argName = `"${baseFunc.arg_names[i]}"`;
                    }
                    if (overrideFunc.arg_names) {
                        argName = `\`${overrideFunc.arg_names[i]}\``;
                    }
                    check(typeCompare(overrideFunc.args[i], baseFunc.args[i], className, funcName, argName), `Overriden argument type not compatible, expected ${baseFunc.args[i]} but got ${overrideFunc.args[i]}`, className, funcName, argName);
                }
            }
        }
    }
}

for (let fail of fails) {
    console.error(fail.toString());
}
console.table({questions, nils});
process.exit(fails.length === 0 ? 0 : 1);
