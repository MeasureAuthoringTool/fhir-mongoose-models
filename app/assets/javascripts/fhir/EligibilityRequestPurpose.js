const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EligibilityRequestPurposeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EligibilityRequestPurpose' },
});

class EligibilityRequestPurpose extends mongoose.Document {
  constructor(object) {
    super(object, EligibilityRequestPurposeSchema);
    this._type = 'FHIR::EligibilityRequestPurpose';
  }
};


module.exports.EligibilityRequestPurposeSchema = EligibilityRequestPurposeSchema;
module.exports.EligibilityRequestPurpose = EligibilityRequestPurpose;
