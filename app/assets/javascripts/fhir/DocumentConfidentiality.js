const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DocumentConfidentialitySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DocumentConfidentiality' },
  _type: { type: String, default: 'FHIR::DocumentConfidentiality' },
});

class DocumentConfidentiality extends mongoose.Document {
  constructor(object) {
    super(object, DocumentConfidentialitySchema);
    this.typeName = 'DocumentConfidentiality';
    this._type = 'FHIR::DocumentConfidentiality';
  }
}

module.exports.DocumentConfidentialitySchema = DocumentConfidentialitySchema;
module.exports.DocumentConfidentiality = DocumentConfidentiality;
