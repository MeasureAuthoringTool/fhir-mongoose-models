const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SpecimenProcessingSchema } = require('./allSchemaHeaders.js');

SpecimenProcessingSchema.add(BackboneElementSchema);
SpecimenProcessingSchema.remove('id');
SpecimenProcessingSchema.add({
  description: PrimitiveStringSchema,
  procedure: CodeableConceptSchema,
  additive: [ReferenceSchema],
  timeDateTime: PrimitiveDateTimeSchema,
  timePeriod: PeriodSchema,
});

module.exports.SpecimenProcessingSchema = SpecimenProcessingSchema;
