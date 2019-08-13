"use strict";
exports.__esModule = true;
var graphqlGot = require("graphql-got");
exports["default"] = (function (_a) {
    var _b = _a.label, id = _b.id, name = _b.name, color = _b.color, description = _b.description, token = _a.token;
    return graphqlGot('https://api.github.com/graphql', {
        query: "mutation {\n      updateLabel(input: {id: \"" + id + "\", name: \"" + name + "\", color: \"" + color + "\", description: " + description + "}) {\n        label {\n          id\n          name\n          color\n          description\n        }\n      }\n    }",
        headers: {
            'accept': 'application/vnd.github.bane-preview+json'
        },
        token: token
    }).then(function (_a) {
        var label = _a.body.updateLabel.label;
        return label;
    });
});
