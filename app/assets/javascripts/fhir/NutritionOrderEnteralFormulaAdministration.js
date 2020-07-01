const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { RatioSchema } = require('./Ratio');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { TimingSchema } = require('./Timing');

const NutritionOrderEnteralFormulaAdministrationSchema = BackboneElementSchemaFunction({
  schedule: TimingSchema,
  quantity: SimpleQuantitySchema,
  rateSimpleQuantity: SimpleQuantitySchema,
  rateRatio: RatioSchema,
  typeName: { type: String, default: 'NutritionOrderEnteralFormulaAdministration' },
  _type: { type: String, default: 'FHIR::NutritionOrderEnteralFormulaAdministration' },
});

class NutritionOrderEnteralFormulaAdministration extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderEnteralFormulaAdministrationSchema);
    this.typeName = 'NutritionOrderEnteralFormulaAdministration';
    this._type = 'FHIR::NutritionOrderEnteralFormulaAdministration';
  }
}

module.exports.NutritionOrderEnteralFormulaAdministrationSchema = NutritionOrderEnteralFormulaAdministrationSchema;
module.exports.NutritionOrderEnteralFormulaAdministration = NutritionOrderEnteralFormulaAdministration;
