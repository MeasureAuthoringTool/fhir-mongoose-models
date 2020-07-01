const mongoose = require('mongoose/browser');
const { AgeSchema } = require('./Age');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ProcedureFocalDeviceSchema } = require('./ProcedureFocalDevice');
const { ProcedurePerformerSchema } = require('./ProcedurePerformer');
const { ProcedureStatusSchema } = require('./ProcedureStatus');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');

const ProcedureSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  basedOn: [ReferenceSchema],
  partOf: [ReferenceSchema],
  status: ProcedureStatusSchema,
  statusReason: CodeableConceptSchema,
  category: CodeableConceptSchema,
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  performedDateTime: PrimitiveDateTimeSchema,
  performedPeriod: PeriodSchema,
  performedString: PrimitiveStringSchema,
  performedAge: AgeSchema,
  performedRange: RangeSchema,
  recorder: ReferenceSchema,
  asserter: ReferenceSchema,
  performer: [ProcedurePerformerSchema],
  location: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  bodySite: [CodeableConceptSchema],
  outcome: CodeableConceptSchema,
  report: [ReferenceSchema],
  complication: [CodeableConceptSchema],
  complicationDetail: [ReferenceSchema],
  followUp: [CodeableConceptSchema],
  note: [AnnotationSchema],
  focalDevice: [ProcedureFocalDeviceSchema],
  usedReference: [ReferenceSchema],
  usedCode: [CodeableConceptSchema],
  typeName: { type: String, default: 'Procedure' },
  _type: { type: String, default: 'FHIR::Procedure' },
});

class Procedure extends mongoose.Document {
  constructor(object) {
    super(object, ProcedureSchema);
    this.typeName = 'Procedure';
    this._type = 'FHIR::Procedure';
  }
}

module.exports.ProcedureSchema = ProcedureSchema;
module.exports.Procedure = Procedure;
