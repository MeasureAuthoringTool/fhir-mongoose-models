const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CodeSearchSupportSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CodeSearchSupport' },
  _type: { type: String, default: 'FHIR::CodeSearchSupport' },
});

class CodeSearchSupport extends mongoose.Document {
  constructor(object) {
    super(object, CodeSearchSupportSchema);
    this.typeName = 'CodeSearchSupport';
    this._type = 'FHIR::CodeSearchSupport';
  }
}

module.exports.CodeSearchSupportSchema = CodeSearchSupportSchema;
module.exports.CodeSearchSupport = CodeSearchSupport;
