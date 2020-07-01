const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CodeSystemContentModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CodeSystemContentMode' },
  _type: { type: String, default: 'FHIR::CodeSystemContentMode' },
});

class CodeSystemContentMode extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemContentModeSchema);
    this.typeName = 'CodeSystemContentMode';
    this._type = 'FHIR::CodeSystemContentMode';
  }
}

module.exports.CodeSystemContentModeSchema = CodeSystemContentModeSchema;
module.exports.CodeSystemContentMode = CodeSystemContentMode;
