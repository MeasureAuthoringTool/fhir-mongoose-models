const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationRequestPrioritySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'MedicationRequestPriority' },
});

class MedicationRequestPriority extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestPrioritySchema);
    this._type = 'FHIR::MedicationRequestPriority';
  }
};


module.exports.MedicationRequestPrioritySchema = MedicationRequestPrioritySchema;
module.exports.MedicationRequestPriority = MedicationRequestPriority;
