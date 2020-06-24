const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { DomainResourceSchema } = require('./DomainResource');
const { EnrollmentRequestStatusSchema } = require('./EnrollmentRequestStatus');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EnrollmentRequestSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : EnrollmentRequestStatusSchema,
   created : DateTime,
   insurer : ReferenceSchema,
   provider : ReferenceSchema,
   candidate : ReferenceSchema,
   coverage : ReferenceSchema,
   fhirTitle: { type: String, default: 'EnrollmentRequest' },
});

class EnrollmentRequest extends mongoose.Document {
  constructor(object) {
    super(object, EnrollmentRequestSchema);
    this._type = 'FHIR::EnrollmentRequest';
  }
};


module.exports.EnrollmentRequestSchema = EnrollmentRequestSchema;
module.exports.EnrollmentRequest = EnrollmentRequest;
