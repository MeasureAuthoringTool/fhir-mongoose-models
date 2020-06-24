const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NutritiionOrderIntentSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'NutritiionOrderIntent' },
});

class NutritiionOrderIntent extends mongoose.Document {
  constructor(object) {
    super(object, NutritiionOrderIntentSchema);
    this._type = 'FHIR::NutritiionOrderIntent';
  }
};


module.exports.NutritiionOrderIntentSchema = NutritiionOrderIntentSchema;
module.exports.NutritiionOrderIntent = NutritiionOrderIntent;
