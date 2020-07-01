const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const CapabilityStatementRestResourceOperationSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  definition: PrimitiveCanonicalSchema,
  documentation: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'CapabilityStatementRestResourceOperation' },
  _type: { type: String, default: 'FHIR::CapabilityStatementRestResourceOperation' },
});

class CapabilityStatementRestResourceOperation extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestResourceOperationSchema);
    this.typeName = 'CapabilityStatementRestResourceOperation';
    this._type = 'FHIR::CapabilityStatementRestResourceOperation';
  }
}

module.exports.CapabilityStatementRestResourceOperationSchema = CapabilityStatementRestResourceOperationSchema;
module.exports.CapabilityStatementRestResourceOperation = CapabilityStatementRestResourceOperation;
