const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const NutritionOrderStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'NutritionOrderStatus' },
  _type: { type: String, default: 'FHIR::NutritionOrderStatus' },
});

class NutritionOrderStatus extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderStatusSchema);
    this.typeName = 'NutritionOrderStatus';
    this._type = 'FHIR::NutritionOrderStatus';
  }
}

module.exports.NutritionOrderStatusSchema = NutritionOrderStatusSchema;
module.exports.NutritionOrderStatus = NutritionOrderStatus;
