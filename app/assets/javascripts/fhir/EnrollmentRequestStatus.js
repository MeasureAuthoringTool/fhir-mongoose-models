const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EnrollmentRequestStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EnrollmentRequestStatus' },
  _type: { type: String, default: 'FHIR::EnrollmentRequestStatus' },
});

class EnrollmentRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, EnrollmentRequestStatusSchema);
    this.typeName = 'EnrollmentRequestStatus';
    this._type = 'FHIR::EnrollmentRequestStatus';
  }
}

module.exports.EnrollmentRequestStatusSchema = EnrollmentRequestStatusSchema;
module.exports.EnrollmentRequestStatus = EnrollmentRequestStatus;
