const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');

const CapabilityStatementRestSecuritySchema = BackboneElementSchemaFunction({
  cors: PrimitiveBooleanSchema,
  service: [CodeableConceptSchema],
  description: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'CapabilityStatementRestSecurity' },
  _type: { type: String, default: 'FHIR::CapabilityStatementRestSecurity' },
});

class CapabilityStatementRestSecurity extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestSecuritySchema);
    this.typeName = 'CapabilityStatementRestSecurity';
    this._type = 'FHIR::CapabilityStatementRestSecurity';
  }
}

module.exports.CapabilityStatementRestSecuritySchema = CapabilityStatementRestSecuritySchema;
module.exports.CapabilityStatementRestSecurity = CapabilityStatementRestSecurity;
