const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationStatementStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'MedicationStatementStatus' },
});

class MedicationStatementStatus extends mongoose.Document {
  constructor(object) {
    super(object, MedicationStatementStatusSchema);
    this._type = 'FHIR::MedicationStatementStatus';
  }
};


module.exports.MedicationStatementStatusSchema = MedicationStatementStatusSchema;
module.exports.MedicationStatementStatus = MedicationStatementStatus;
