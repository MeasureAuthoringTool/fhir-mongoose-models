const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RequestPrioritySchema } = require('./allSchemaHeaders.js');
const { SupplyRequestParameterSchema } = require('./allSchemaHeaders.js');
const { SupplyRequestStatusSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { SupplyRequestSchema } = require('./allSchemaHeaders.js');

SupplyRequestSchema.add(DomainResourceSchema);
SupplyRequestSchema.remove('id');
SupplyRequestSchema.add({
  identifier: [IdentifierSchema],
  status: SupplyRequestStatusSchema,
  category: CodeableConceptSchema,
  priority: RequestPrioritySchema,
  itemCodeableConcept: CodeableConceptSchema,
  itemReference: ReferenceSchema,
  quantity: QuantitySchema,
  parameter: [SupplyRequestParameterSchema],
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  occurrenceTiming: TimingSchema,
  authoredOn: PrimitiveDateTimeSchema,
  requester: ReferenceSchema,
  supplier: [ReferenceSchema],
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  deliverFrom: ReferenceSchema,
  deliverTo: ReferenceSchema,
});

module.exports.SupplyRequestSchema = SupplyRequestSchema;
