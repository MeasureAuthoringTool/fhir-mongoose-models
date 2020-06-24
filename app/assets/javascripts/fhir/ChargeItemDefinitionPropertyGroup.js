const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ChargeItemDefinitionApplicabilitySchema } = require('./ChargeItemDefinitionApplicability');
const { ChargeItemDefinitionPropertyGroupPriceComponentSchema } = require('./ChargeItemDefinitionPropertyGroupPriceComponent');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ChargeItemDefinitionPropertyGroupSchema = BackboneElementSchemaFunction({
   applicability : [ChargeItemDefinitionApplicabilitySchema],
   priceComponent : [ChargeItemDefinitionPropertyGroupPriceComponentSchema],
   fhirTitle: { type: String, default: 'ChargeItemDefinitionPropertyGroup' },
});

class ChargeItemDefinitionPropertyGroup extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemDefinitionPropertyGroupSchema);
    this._type = 'FHIR::ChargeItemDefinitionPropertyGroup';
  }
};


module.exports.ChargeItemDefinitionPropertyGroupSchema = ChargeItemDefinitionPropertyGroupSchema;
module.exports.ChargeItemDefinitionPropertyGroup = ChargeItemDefinitionPropertyGroup;
