const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EnrollmentResponseStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EnrollmentResponseStatus' },
});

class EnrollmentResponseStatus extends mongoose.Document {
  constructor(object) {
    super(object, EnrollmentResponseStatusSchema);
    this._type = 'FHIR::EnrollmentResponseStatus';
  }
};


module.exports.EnrollmentResponseStatusSchema = EnrollmentResponseStatusSchema;
module.exports.EnrollmentResponseStatus = EnrollmentResponseStatus;
