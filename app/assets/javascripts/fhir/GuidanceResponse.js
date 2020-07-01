const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DataRequirementSchema } = require('./DataRequirement');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { GuidanceResponseStatusSchema } = require('./GuidanceResponseStatus');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const GuidanceResponseSchema = DomainResourceSchemaFunction({
  requestIdentifier: IdentifierSchema,
  identifier: [IdentifierSchema],
  moduleUri: PrimitiveUriSchema,
  moduleCanonical: PrimitiveCanonicalSchema,
  moduleCodeableConcept: CodeableConceptSchema,
  status: GuidanceResponseStatusSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  performer: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  note: [AnnotationSchema],
  evaluationMessage: [ReferenceSchema],
  outputParameters: ReferenceSchema,
  result: ReferenceSchema,
  dataRequirement: [DataRequirementSchema],
  typeName: { type: String, default: 'GuidanceResponse' },
  _type: { type: String, default: 'FHIR::GuidanceResponse' },
});

class GuidanceResponse extends mongoose.Document {
  constructor(object) {
    super(object, GuidanceResponseSchema);
    this.typeName = 'GuidanceResponse';
    this._type = 'FHIR::GuidanceResponse';
  }
}

module.exports.GuidanceResponseSchema = GuidanceResponseSchema;
module.exports.GuidanceResponse = GuidanceResponse;
