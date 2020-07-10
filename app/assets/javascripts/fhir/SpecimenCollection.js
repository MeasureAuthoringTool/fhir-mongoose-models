const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { SpecimenCollectionSchema } = require('./allSchemaHeaders.js');

SpecimenCollectionSchema.add(BackboneElementSchema);
SpecimenCollectionSchema.remove('id');
SpecimenCollectionSchema.add({
  collector: ReferenceSchema,
  collectedDateTime: PrimitiveDateTimeSchema,
  collectedPeriod: PeriodSchema,
  duration: DurationSchema,
  quantity: SimpleQuantitySchema,
  method: CodeableConceptSchema,
  bodySite: CodeableConceptSchema,
  fastingStatusCodeableConcept: CodeableConceptSchema,
  fastingStatusDuration: DurationSchema,
});

module.exports.SpecimenCollectionSchema = SpecimenCollectionSchema;
