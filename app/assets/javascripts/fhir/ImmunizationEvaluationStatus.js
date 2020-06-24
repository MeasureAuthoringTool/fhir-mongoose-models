const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImmunizationEvaluationStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ImmunizationEvaluationStatus' },
});

class ImmunizationEvaluationStatus extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationEvaluationStatusSchema);
    this._type = 'FHIR::ImmunizationEvaluationStatus';
  }
};


module.exports.ImmunizationEvaluationStatusSchema = ImmunizationEvaluationStatusSchema;
module.exports.ImmunizationEvaluationStatus = ImmunizationEvaluationStatus;
