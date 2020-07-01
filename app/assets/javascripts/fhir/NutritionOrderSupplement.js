const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { TimingSchema } = require('./Timing');

const NutritionOrderSupplementSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  productName: PrimitiveStringSchema,
  schedule: [TimingSchema],
  quantity: SimpleQuantitySchema,
  instruction: PrimitiveStringSchema,
  typeName: { type: String, default: 'NutritionOrderSupplement' },
  _type: { type: String, default: 'FHIR::NutritionOrderSupplement' },
});

class NutritionOrderSupplement extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderSupplementSchema);
    this.typeName = 'NutritionOrderSupplement';
    this._type = 'FHIR::NutritionOrderSupplement';
  }
}

module.exports.NutritionOrderSupplementSchema = NutritionOrderSupplementSchema;
module.exports.NutritionOrderSupplement = NutritionOrderSupplement;
