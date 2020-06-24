const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { RatioSchema } = require('./Ratio');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { TimingSchema } = require('./Timing');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NutritionOrderEnteralFormulaAdministrationSchema = BackboneElementSchemaFunction({
   schedule : TimingSchema,
   quantity : SimpleQuantitySchema,
   rateSimpleQuantity : SimpleQuantitySchema,
   rateRatio : RatioSchema,
   fhirTitle: { type: String, default: 'NutritionOrderEnteralFormulaAdministration' },
});

class NutritionOrderEnteralFormulaAdministration extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderEnteralFormulaAdministrationSchema);
    this._type = 'FHIR::NutritionOrderEnteralFormulaAdministration';
  }
};


module.exports.NutritionOrderEnteralFormulaAdministrationSchema = NutritionOrderEnteralFormulaAdministrationSchema;
module.exports.NutritionOrderEnteralFormulaAdministration = NutritionOrderEnteralFormulaAdministration;
