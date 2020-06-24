const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationRequestIntentSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'MedicationRequestIntent' },
});

class MedicationRequestIntent extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestIntentSchema);
    this._type = 'FHIR::MedicationRequestIntent';
  }
};


module.exports.MedicationRequestIntentSchema = MedicationRequestIntentSchema;
module.exports.MedicationRequestIntent = MedicationRequestIntent;
