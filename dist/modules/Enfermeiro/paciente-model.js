"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const pacienteSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    document: {
        type: String,
        unique: true,
    },
});
exports.Paciente = mongoose.model('Paciente', pacienteSchema);
//# sourceMappingURL=paciente-model.js.map