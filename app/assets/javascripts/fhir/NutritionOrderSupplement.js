const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { TimingSchema } = require('./Timing');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NutritionOrderSupplementSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   productName : String,
   schedule : [TimingSchema],
   quantity : SimpleQuantitySchema,
   instruction : String,
   fhirTitle: { type: String, default: 'NutritionOrderSupplement' },
});

class NutritionOrderSupplement extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderSupplementSchema);
    this._type = 'FHIR::NutritionOrderSupplement';
  }
};


module.exports.NutritionOrderSupplementSchema = NutritionOrderSupplementSchema;
module.exports.NutritionOrderSupplement = NutritionOrderSupplement;
