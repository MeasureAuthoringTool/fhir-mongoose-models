const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ChargeItemDefinitionPriceComponentTypeSchema } = require('./ChargeItemDefinitionPriceComponentType');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ChargeItemDefinitionPropertyGroupPriceComponentSchema = BackboneElementSchemaFunction({
   type : ChargeItemDefinitionPriceComponentTypeSchema,
   code : CodeableConceptSchema,
   factor : Number,
   amount : MoneySchema,
   fhirTitle: { type: String, default: 'ChargeItemDefinitionPropertyGroupPriceComponent' },
});

class ChargeItemDefinitionPropertyGroupPriceComponent extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemDefinitionPropertyGroupPriceComponentSchema);
    this._type = 'FHIR::ChargeItemDefinitionPropertyGroupPriceComponent';
  }
};


module.exports.ChargeItemDefinitionPropertyGroupPriceComponentSchema = ChargeItemDefinitionPropertyGroupPriceComponentSchema;
module.exports.ChargeItemDefinitionPropertyGroupPriceComponent = ChargeItemDefinitionPropertyGroupPriceComponent;
