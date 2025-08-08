"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mmaModule = mmaModule;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function mmaModule(_options) {
    return (_tree, _context) => {
        const sourceTemplates = (0, schematics_1.url)('./files');
        const sourceParametrizedTemplates = (0, schematics_1.apply)(sourceTemplates, [
            (0, schematics_1.template)(Object.assign(Object.assign({}, _options), core_1.strings)),
            (0, schematics_1.move)(`src/${core_1.strings.dasherize(_options.name)}`),
        ]);
        return (0, schematics_1.mergeWith)(sourceParametrizedTemplates);
    };
}
//# sourceMappingURL=index.js.map