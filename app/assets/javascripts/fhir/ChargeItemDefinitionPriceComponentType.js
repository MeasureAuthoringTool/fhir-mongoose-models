const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ChargeItemDefinitionPriceComponentTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ChargeItemDefinitionPriceComponentType' },
  _type: { type: String, default: 'FHIR::ChargeItemDefinitionPriceComponentType' },
});

class ChargeItemDefinitionPriceComponentType extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemDefinitionPriceComponentTypeSchema);
    this.typeName = 'ChargeItemDefinitionPriceComponentType';
    this._type = 'FHIR::ChargeItemDefinitionPriceComponentType';
  }
}

module.exports.ChargeItemDefinitionPriceComponentTypeSchema = ChargeItemDefinitionPriceComponentTypeSchema;
module.exports.ChargeItemDefinitionPriceComponentType = ChargeItemDefinitionPriceComponentType;
