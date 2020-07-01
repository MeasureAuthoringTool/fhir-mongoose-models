const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DocumentReferenceStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DocumentReferenceStatus' },
  _type: { type: String, default: 'FHIR::DocumentReferenceStatus' },
});

class DocumentReferenceStatus extends mongoose.Document {
  constructor(object) {
    super(object, DocumentReferenceStatusSchema);
    this.typeName = 'DocumentReferenceStatus';
    this._type = 'FHIR::DocumentReferenceStatus';
  }
}

module.exports.DocumentReferenceStatusSchema = DocumentReferenceStatusSchema;
module.exports.DocumentReferenceStatus = DocumentReferenceStatus;
