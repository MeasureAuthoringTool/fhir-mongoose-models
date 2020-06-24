const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EnrollmentRequestStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EnrollmentRequestStatus' },
});

class EnrollmentRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, EnrollmentRequestStatusSchema);
    this._type = 'FHIR::EnrollmentRequestStatus';
  }
};


module.exports.EnrollmentRequestStatusSchema = EnrollmentRequestStatusSchema;
module.exports.EnrollmentRequestStatus = EnrollmentRequestStatus;
