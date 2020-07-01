const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ChargeItemDefinitionApplicabilitySchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  language: PrimitiveStringSchema,
  expression: PrimitiveStringSchema,
  typeName: { type: String, default: 'ChargeItemDefinitionApplicability' },
  _type: { type: String, default: 'FHIR::ChargeItemDefinitionApplicability' },
});

class ChargeItemDefinitionApplicability extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemDefinitionApplicabilitySchema);
    this.typeName = 'ChargeItemDefinitionApplicability';
    this._type = 'FHIR::ChargeItemDefinitionApplicability';
  }
}

module.exports.ChargeItemDefinitionApplicabilitySchema = ChargeItemDefinitionApplicabilitySchema;
module.exports.ChargeItemDefinitionApplicability = ChargeItemDefinitionApplicability;
