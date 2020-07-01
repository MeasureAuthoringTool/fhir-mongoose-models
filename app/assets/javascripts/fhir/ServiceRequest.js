const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');
const { ServiceRequestIntentSchema } = require('./ServiceRequestIntent');
const { ServiceRequestPrioritySchema } = require('./ServiceRequestPriority');
const { ServiceRequestStatusSchema } = require('./ServiceRequestStatus');
const { TimingSchema } = require('./Timing');

const ServiceRequestSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  basedOn: [ReferenceSchema],
  replaces: [ReferenceSchema],
  requisition: IdentifierSchema,
  status: ServiceRequestStatusSchema,
  intent: ServiceRequestIntentSchema,
  category: [CodeableConceptSchema],
  priority: ServiceRequestPrioritySchema,
  doNotPerform: PrimitiveBooleanSchema,
  code: CodeableConceptSchema,
  orderDetail: [CodeableConceptSchema],
  quantityQuantity: QuantitySchema,
  quantityRatio: RatioSchema,
  quantityRange: RangeSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  occurrenceTiming: TimingSchema,
  asNeededBoolean: PrimitiveBooleanSchema,
  asNeededCodeableConcept: CodeableConceptSchema,
  authoredOn: PrimitiveDateTimeSchema,
  requester: ReferenceSchema,
  performerType: CodeableConceptSchema,
  performer: [ReferenceSchema],
  locationCode: [CodeableConceptSchema],
  locationReference: [ReferenceSchema],
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  insurance: [ReferenceSchema],
  supportingInfo: [ReferenceSchema],
  specimen: [ReferenceSchema],
  bodySite: [CodeableConceptSchema],
  note: [AnnotationSchema],
  patientInstruction: PrimitiveStringSchema,
  relevantHistory: [ReferenceSchema],
  typeName: { type: String, default: 'ServiceRequest' },
  _type: { type: String, default: 'FHIR::ServiceRequest' },
});

class ServiceRequest extends mongoose.Document {
  constructor(object) {
    super(object, ServiceRequestSchema);
    this.typeName = 'ServiceRequest';
    this._type = 'FHIR::ServiceRequest';
  }
}

module.exports.ServiceRequestSchema = ServiceRequestSchema;
module.exports.ServiceRequest = ServiceRequest;
