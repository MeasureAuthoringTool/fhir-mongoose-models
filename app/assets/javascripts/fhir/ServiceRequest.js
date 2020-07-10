const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ServiceRequestIntentSchema } = require('./allSchemaHeaders.js');
const { ServiceRequestPrioritySchema } = require('./allSchemaHeaders.js');
const { ServiceRequestStatusSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { ServiceRequestSchema } = require('./allSchemaHeaders.js');

ServiceRequestSchema.add(DomainResourceSchema);
ServiceRequestSchema.remove('id');
ServiceRequestSchema.add({
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
});

module.exports.ServiceRequestSchema = ServiceRequestSchema;
