const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DocumentModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DocumentMode' },
  _type: { type: String, default: 'FHIR::DocumentMode' },
});

class DocumentMode extends mongoose.Document {
  constructor(object) {
    super(object, DocumentModeSchema);
    this.typeName = 'DocumentMode';
    this._type = 'FHIR::DocumentMode';
  }
}

module.exports.DocumentModeSchema = DocumentModeSchema;
module.exports.DocumentMode = DocumentMode;
