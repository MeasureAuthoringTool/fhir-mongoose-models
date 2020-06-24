const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EligibilityRequestStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EligibilityRequestStatus' },
});

class EligibilityRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, EligibilityRequestStatusSchema);
    this._type = 'FHIR::EligibilityRequestStatus';
  }
};


module.exports.EligibilityRequestStatusSchema = EligibilityRequestStatusSchema;
module.exports.EligibilityRequestStatus = EligibilityRequestStatus;
