const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EligibilityResponsePurposeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EligibilityResponsePurpose' },
});

class EligibilityResponsePurpose extends mongoose.Document {
  constructor(object) {
    super(object, EligibilityResponsePurposeSchema);
    this._type = 'FHIR::EligibilityResponsePurpose';
  }
};


module.exports.EligibilityResponsePurposeSchema = EligibilityResponsePurposeSchema;
module.exports.EligibilityResponsePurpose = EligibilityResponsePurpose;
