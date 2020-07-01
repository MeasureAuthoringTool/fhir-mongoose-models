const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ReferredDocumentStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ReferredDocumentStatus' },
  _type: { type: String, default: 'FHIR::ReferredDocumentStatus' },
});

class ReferredDocumentStatus extends mongoose.Document {
  constructor(object) {
    super(object, ReferredDocumentStatusSchema);
    this.typeName = 'ReferredDocumentStatus';
    this._type = 'FHIR::ReferredDocumentStatus';
  }
}

module.exports.ReferredDocumentStatusSchema = ReferredDocumentStatusSchema;
module.exports.ReferredDocumentStatus = ReferredDocumentStatus;
