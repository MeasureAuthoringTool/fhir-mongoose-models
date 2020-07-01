const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContractTermActionSubjectSchema } = require('./ContractTermActionSubject');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { ReferenceSchema } = require('./Reference');
const { TimingSchema } = require('./Timing');

const ContractTermActionSchema = BackboneElementSchemaFunction({
  doNotPerform: PrimitiveBooleanSchema,
  type: CodeableConceptSchema,
  subject: [ContractTermActionSubjectSchema],
  intent: CodeableConceptSchema,
  linkId: [PrimitiveStringSchema],
  status: CodeableConceptSchema,
  context: ReferenceSchema,
  contextLinkId: [PrimitiveStringSchema],
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  occurrenceTiming: TimingSchema,
  requester: [ReferenceSchema],
  requesterLinkId: [PrimitiveStringSchema],
  performerType: [CodeableConceptSchema],
  performerRole: CodeableConceptSchema,
  performer: ReferenceSchema,
  performerLinkId: [PrimitiveStringSchema],
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  reason: [PrimitiveStringSchema],
  reasonLinkId: [PrimitiveStringSchema],
  note: [AnnotationSchema],
  securityLabelNumber: [PrimitiveUnsignedIntSchema],
  typeName: { type: String, default: 'ContractTermAction' },
  _type: { type: String, default: 'FHIR::ContractTermAction' },
});

class ContractTermAction extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermActionSchema);
    this.typeName = 'ContractTermAction';
    this._type = 'FHIR::ContractTermAction';
  }
}

module.exports.ContractTermActionSchema = ContractTermActionSchema;
module.exports.ContractTermAction = ContractTermAction;
