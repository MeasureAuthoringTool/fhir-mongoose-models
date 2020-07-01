const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { EnrollmentRequestStatusSchema } = require('./EnrollmentRequestStatus');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const EnrollmentRequestSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: EnrollmentRequestStatusSchema,
  created: PrimitiveDateTimeSchema,
  insurer: ReferenceSchema,
  provider: ReferenceSchema,
  candidate: ReferenceSchema,
  coverage: ReferenceSchema,
  typeName: { type: String, default: 'EnrollmentRequest' },
  _type: { type: String, default: 'FHIR::EnrollmentRequest' },
});

class EnrollmentRequest extends mongoose.Document {
  constructor(object) {
    super(object, EnrollmentRequestSchema);
    this.typeName = 'EnrollmentRequest';
    this._type = 'FHIR::EnrollmentRequest';
  }
}

module.exports.EnrollmentRequestSchema = EnrollmentRequestSchema;
module.exports.EnrollmentRequest = EnrollmentRequest;
