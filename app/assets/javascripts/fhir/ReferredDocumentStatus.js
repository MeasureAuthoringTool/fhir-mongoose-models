const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ReferredDocumentStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ReferredDocumentStatus' },
});

class ReferredDocumentStatus extends mongoose.Document {
  constructor(object) {
    super(object, ReferredDocumentStatusSchema);
    this._type = 'FHIR::ReferredDocumentStatus';
  }
};


module.exports.ReferredDocumentStatusSchema = ReferredDocumentStatusSchema;
module.exports.ReferredDocumentStatus = ReferredDocumentStatus;
