const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { DomainResourceSchema } = require('./DomainResource');
const { EnrollmentResponseStatusSchema } = require('./EnrollmentResponseStatus');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { RemittanceOutcomeSchema } = require('./RemittanceOutcome');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EnrollmentResponseSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : EnrollmentResponseStatusSchema,
   request : ReferenceSchema,
   outcome : RemittanceOutcomeSchema,
   disposition : String,
   created : DateTime,
   organization : ReferenceSchema,
   requestProvider : ReferenceSchema,
   fhirTitle: { type: String, default: 'EnrollmentResponse' },
});

class EnrollmentResponse extends mongoose.Document {
  constructor(object) {
    super(object, EnrollmentResponseSchema);
    this._type = 'FHIR::EnrollmentResponse';
  }
};


module.exports.EnrollmentResponseSchema = EnrollmentResponseSchema;
module.exports.EnrollmentResponse = EnrollmentResponse;
