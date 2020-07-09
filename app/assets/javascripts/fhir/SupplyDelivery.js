const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SupplyDeliveryStatusSchema } = require('./allSchemaHeaders.js');
const { SupplyDeliverySuppliedItemSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { SupplyDeliverySchema } = require('./allSchemaHeaders.js');

SupplyDeliverySchema.add(DomainResourceSchema);
SupplyDeliverySchema.remove('id');
SupplyDeliverySchema.add({
  identifier: [IdentifierSchema],
  basedOn: [ReferenceSchema],
  partOf: [ReferenceSchema],
  status: SupplyDeliveryStatusSchema,
  patient: ReferenceSchema,
  type: CodeableConceptSchema,
  suppliedItem: SupplyDeliverySuppliedItemSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  occurrenceTiming: TimingSchema,
  supplier: ReferenceSchema,
  destination: ReferenceSchema,
  receiver: [ReferenceSchema],
});

module.exports.SupplyDeliverySchema = SupplyDeliverySchema;
