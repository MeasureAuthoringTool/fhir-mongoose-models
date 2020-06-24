const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EligibilityResponseStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EligibilityResponseStatus' },
});

class EligibilityResponseStatus extends mongoose.Document {
  constructor(object) {
    super(object, EligibilityResponseStatusSchema);
    this._type = 'FHIR::EligibilityResponseStatus';
  }
};


module.exports.EligibilityResponseStatusSchema = EligibilityResponseStatusSchema;
module.exports.EligibilityResponseStatus = EligibilityResponseStatus;
