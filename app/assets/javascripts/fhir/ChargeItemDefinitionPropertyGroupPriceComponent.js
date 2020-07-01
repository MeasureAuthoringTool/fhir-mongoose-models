const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ChargeItemDefinitionPriceComponentTypeSchema } = require('./ChargeItemDefinitionPriceComponentType');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');

const ChargeItemDefinitionPropertyGroupPriceComponentSchema = BackboneElementSchemaFunction({
  type: ChargeItemDefinitionPriceComponentTypeSchema,
  code: CodeableConceptSchema,
  factor: PrimitiveDecimalSchema,
  amount: MoneySchema,
  typeName: { type: String, default: 'ChargeItemDefinitionPropertyGroupPriceComponent' },
  _type: { type: String, default: 'FHIR::ChargeItemDefinitionPropertyGroupPriceComponent' },
});

class ChargeItemDefinitionPropertyGroupPriceComponent extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemDefinitionPropertyGroupPriceComponentSchema);
    this.typeName = 'ChargeItemDefinitionPropertyGroupPriceComponent';
    this._type = 'FHIR::ChargeItemDefinitionPropertyGroupPriceComponent';
  }
}

module.exports.ChargeItemDefinitionPropertyGroupPriceComponentSchema = ChargeItemDefinitionPropertyGroupPriceComponentSchema;
module.exports.ChargeItemDefinitionPropertyGroupPriceComponent = ChargeItemDefinitionPropertyGroupPriceComponent;
