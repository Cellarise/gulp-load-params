/* jslint node: true */
"use strict";

function encode(s) {
    var pairs = {
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
        "<": "&lt;",
        ">": "&gt;"
    };
    for (var r in pairs) {
        if (typeof (s) !== "undefined") {
            s = s.replace(new RegExp(r, "g"), pairs[r]);
        }
    }
    return s || "";
}

function failure_message(failures, opts) {
    var count = failures.length;
    if (count === 1) {
        return "1 " + opts.suiteName + " Failure";
    } else {
        return count + " " + opts.suiteName + " Failures";
    }
}

function failure_details(failures) {
    var msg = [];
    var item;
    for (var i = 0; i < failures.length; i = i + 1) {
        item = failures[i];
        msg.push(i + 1 + ". line " + item.line + ", char " + item.character + ": " + encode(item.reason));
    }
    return msg.join("\n");
}

module.exports = {
    encode: encode,
    failure_message: failure_message,
    failure_details: failure_details
};