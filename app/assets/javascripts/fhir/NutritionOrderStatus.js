const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NutritionOrderStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'NutritionOrderStatus' },
});

class NutritionOrderStatus extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderStatusSchema);
    this._type = 'FHIR::NutritionOrderStatus';
  }
};


module.exports.NutritionOrderStatusSchema = NutritionOrderStatusSchema;
module.exports.NutritionOrderStatus = NutritionOrderStatus;
