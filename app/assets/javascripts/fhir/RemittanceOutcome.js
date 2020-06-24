const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RemittanceOutcomeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'RemittanceOutcome' },
});

class RemittanceOutcome extends mongoose.Document {
  constructor(object) {
    super(object, RemittanceOutcomeSchema);
    this._type = 'FHIR::RemittanceOutcome';
  }
};


module.exports.RemittanceOutcomeSchema = RemittanceOutcomeSchema;
module.exports.RemittanceOutcome = RemittanceOutcome;
