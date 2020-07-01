const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DocumentModeSchema } = require('./DocumentMode');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');

const CapabilityStatementDocumentSchema = BackboneElementSchemaFunction({
  mode: DocumentModeSchema,
  documentation: PrimitiveMarkdownSchema,
  profile: PrimitiveCanonicalSchema,
  typeName: { type: String, default: 'CapabilityStatementDocument' },
  _type: { type: String, default: 'FHIR::CapabilityStatementDocument' },
});

class CapabilityStatementDocument extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementDocumentSchema);
    this.typeName = 'CapabilityStatementDocument';
    this._type = 'FHIR::CapabilityStatementDocument';
  }
}

module.exports.CapabilityStatementDocumentSchema = CapabilityStatementDocumentSchema;
module.exports.CapabilityStatementDocument = CapabilityStatementDocument;
