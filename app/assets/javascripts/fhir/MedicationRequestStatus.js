const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationRequestStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'MedicationRequestStatus' },
});

class MedicationRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestStatusSchema);
    this._type = 'FHIR::MedicationRequestStatus';
  }
};


module.exports.MedicationRequestStatusSchema = MedicationRequestStatusSchema;
module.exports.MedicationRequestStatus = MedicationRequestStatus;
