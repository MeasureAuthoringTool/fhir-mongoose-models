const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ImmunizationEducationSchema } = require('./ImmunizationEducation');
const { ImmunizationPerformerSchema } = require('./ImmunizationPerformer');
const { ImmunizationProtocolAppliedSchema } = require('./ImmunizationProtocolApplied');
const { ImmunizationReactionSchema } = require('./ImmunizationReaction');
const { ImmunizationStatusSchema } = require('./ImmunizationStatus');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ImmunizationSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: ImmunizationStatusSchema,
  statusReason: CodeableConceptSchema,
  vaccineCode: CodeableConceptSchema,
  patient: ReferenceSchema,
  encounter: ReferenceSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrenceString: PrimitiveStringSchema,
  recorded: PrimitiveDateTimeSchema,
  primarySource: PrimitiveBooleanSchema,
  reportOrigin: CodeableConceptSchema,
  location: ReferenceSchema,
  manufacturer: ReferenceSchema,
  lotNumber: PrimitiveStringSchema,
  expirationDate: PrimitiveDateSchema,
  site: CodeableConceptSchema,
  route: CodeableConceptSchema,
  doseQuantity: SimpleQuantitySchema,
  performer: [ImmunizationPerformerSchema],
  note: [AnnotationSchema],
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  isSubpotent: PrimitiveBooleanSchema,
  subpotentReason: [CodeableConceptSchema],
  education: [ImmunizationEducationSchema],
  programEligibility: [CodeableConceptSchema],
  fundingSource: CodeableConceptSchema,
  reaction: [ImmunizationReactionSchema],
  protocolApplied: [ImmunizationProtocolAppliedSchema],
  typeName: { type: String, default: 'Immunization' },
  _type: { type: String, default: 'FHIR::Immunization' },
});

class Immunization extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationSchema);
    this.typeName = 'Immunization';
    this._type = 'FHIR::Immunization';
  }
}

module.exports.ImmunizationSchema = ImmunizationSchema;
module.exports.Immunization = Immunization;
