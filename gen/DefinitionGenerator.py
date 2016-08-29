import sys
import re

##TODO Make this pull from stdin or from command paramaters
input = """
"""

conversion = {
    "integer" : "number",
    "float" : "number",
    "cstring" : "string",
    "boolean" : "boolean",
    "js_array" : "error[]",
    "js_object" : "error[]",
    "js_value" : "error",
    "unsigned" : "error", #WTF
    "int64" : "error",
    "float64" : "error",
    "js_raw_args" : "error",
    "void" : "void"
}

regex = re.compile("^(?P<return>\w+) (?P<class>\w+)\.(?P<function>\w+)\((?P<args>[^)]+?)?\)(?P<comment>.*)", re.MULTILINE)
for match in regex.finditer(input):
    info = match.groupdict()
    print("    /**")
    print("     * " + info["comment"])
    print("     */")
    arg = info["args"]
    arguments = ""
    if arg:
        args = arg.split(",")
        for argument in args:
            innerArg = argument.split(" ")
            arguments = arguments + innerArg[2] + ": " + conversion[innerArg[1]] + ", "
        arguments = arguments[:-2]
    returnType = conversion[info["return"]]
    print("    {function}({arg}): {returnType};".format(arg=arguments, returnType=returnType, **info))
    print("")