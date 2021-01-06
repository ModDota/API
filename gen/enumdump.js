function repeat(pattern, count) {
    if (count < 1)
        return '';
    var result = '';
    while (count > 1) {
        if (count & 1)
            result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result + pattern;
}
function altDump(object) {
    $.Msg(`/*
    Typescript definition file of the DotA 2 Panorama API.

    This file contains information on the enums. This file can be used
    just as reference, or when writing Typescript to compile into Panorama JS.

    To use this file with typescript for Panorama, install typescript and put this file at the project root.

    Any javascript compiled from this typescript should be Panorama-compatible and run in Panorama.
    Issues or bugs in the definitions can be reported by making an issue on GitHub:
    https://github.com/ModDota/API.
*/`);
    $.Msg("");
    for (var v in object) {
        if (typeof object[v] == "object") {
            let i = 0;
            for (let w in object[v]) {
                if (typeof (object[v][w]) != "function") {
                    i++;
                }
            }
            if (i > 0) {
                $.Msg("declare enum " + v + " {");
                for (let w in object[v]) {
                    /*if (i-- == 1) {
                        $.Msg("Last entry test");
                    }*/
                    if (typeof (object[v][w]) != "function") {
                        $.Msg("    " + w + " = " + ("" + object[v][w]) + ((i-- == 1) ? "" : ","));
                    }
                }
                $.Msg("}");
                $.Msg("");
            }
        }
    }
}
altDump(this);
