const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DeviceRequestParameterSchema } = require('./DeviceRequestParameter');
const { DeviceRequestStatusSchema } = require('./DeviceRequestStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');
const { RequestIntentSchema } = require('./RequestIntent');
const { RequestPrioritySchema } = require('./RequestPriority');
const { TimingSchema } = require('./Timing');

const DeviceRequestSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  basedOn: [ReferenceSchema],
  priorRequest: [ReferenceSchema],
  groupIdentifier: IdentifierSchema,
  status: DeviceRequestStatusSchema,
  intent: RequestIntentSchema,
  priority: RequestPrioritySchema,
  codeReference: ReferenceSchema,
  codeCodeableConcept: CodeableConceptSchema,
  parameter: [DeviceRequestParameterSchema],
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  occurrenceTiming: TimingSchema,
  authoredOn: PrimitiveDateTimeSchema,
  requester: ReferenceSchema,
  performerType: CodeableConceptSchema,
  performer: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  insurance: [ReferenceSchema],
  supportingInfo: [ReferenceSchema],
  note: [AnnotationSchema],
  relevantHistory: [ReferenceSchema],
  typeName: { type: String, default: 'DeviceRequest' },
  _type: { type: String, default: 'FHIR::DeviceRequest' },
});

class DeviceRequest extends mongoose.Document {
  constructor(object) {
    super(object, DeviceRequestSchema);
    this.typeName = 'DeviceRequest';
    this._type = 'FHIR::DeviceRequest';
  }
}

module.exports.DeviceRequestSchema = DeviceRequestSchema;
module.exports.DeviceRequest = DeviceRequest;
