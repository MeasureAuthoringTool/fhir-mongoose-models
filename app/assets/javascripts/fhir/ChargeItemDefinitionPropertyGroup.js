const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ChargeItemDefinitionApplicabilitySchema } = require('./ChargeItemDefinitionApplicability');
const { ChargeItemDefinitionPropertyGroupPriceComponentSchema } = require('./ChargeItemDefinitionPropertyGroupPriceComponent');

const ChargeItemDefinitionPropertyGroupSchema = BackboneElementSchemaFunction({
  applicability: [ChargeItemDefinitionApplicabilitySchema],
  priceComponent: [ChargeItemDefinitionPropertyGroupPriceComponentSchema],
  typeName: { type: String, default: 'ChargeItemDefinitionPropertyGroup' },
  _type: { type: String, default: 'FHIR::ChargeItemDefinitionPropertyGroup' },
});

class ChargeItemDefinitionPropertyGroup extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemDefinitionPropertyGroupSchema);
    this.typeName = 'ChargeItemDefinitionPropertyGroup';
    this._type = 'FHIR::ChargeItemDefinitionPropertyGroup';
  }
}

module.exports.ChargeItemDefinitionPropertyGroupSchema = ChargeItemDefinitionPropertyGroupSchema;
module.exports.ChargeItemDefinitionPropertyGroup = ChargeItemDefinitionPropertyGroup;
