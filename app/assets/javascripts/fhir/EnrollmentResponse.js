const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { EnrollmentResponseStatusSchema } = require('./EnrollmentResponseStatus');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { RemittanceOutcomeSchema } = require('./RemittanceOutcome');

const EnrollmentResponseSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: EnrollmentResponseStatusSchema,
  request: ReferenceSchema,
  outcome: RemittanceOutcomeSchema,
  disposition: PrimitiveStringSchema,
  created: PrimitiveDateTimeSchema,
  organization: ReferenceSchema,
  requestProvider: ReferenceSchema,
  typeName: { type: String, default: 'EnrollmentResponse' },
  _type: { type: String, default: 'FHIR::EnrollmentResponse' },
});

class EnrollmentResponse extends mongoose.Document {
  constructor(object) {
    super(object, EnrollmentResponseSchema);
    this.typeName = 'EnrollmentResponse';
    this._type = 'FHIR::EnrollmentResponse';
  }
}

module.exports.EnrollmentResponseSchema = EnrollmentResponseSchema;
module.exports.EnrollmentResponse = EnrollmentResponse;
