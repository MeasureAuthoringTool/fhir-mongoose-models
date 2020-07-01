const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EnrollmentResponseStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EnrollmentResponseStatus' },
  _type: { type: String, default: 'FHIR::EnrollmentResponseStatus' },
});

class EnrollmentResponseStatus extends mongoose.Document {
  constructor(object) {
    super(object, EnrollmentResponseStatusSchema);
    this.typeName = 'EnrollmentResponseStatus';
    this._type = 'FHIR::EnrollmentResponseStatus';
  }
}

module.exports.EnrollmentResponseStatusSchema = EnrollmentResponseStatusSchema;
module.exports.EnrollmentResponseStatus = EnrollmentResponseStatus;
