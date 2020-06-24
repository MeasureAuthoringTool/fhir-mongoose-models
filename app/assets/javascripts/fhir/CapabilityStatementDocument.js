const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { DocumentModeSchema } = require('./DocumentMode');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementDocumentSchema = BackboneElementSchemaFunction({
   mode : DocumentModeSchema,
   documentation : String,
   profile : String,
   fhirTitle: { type: String, default: 'CapabilityStatementDocument' },
});

class CapabilityStatementDocument extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementDocumentSchema);
    this._type = 'FHIR::CapabilityStatementDocument';
  }
};


module.exports.CapabilityStatementDocumentSchema = CapabilityStatementDocumentSchema;
module.exports.CapabilityStatementDocument = CapabilityStatementDocument;
