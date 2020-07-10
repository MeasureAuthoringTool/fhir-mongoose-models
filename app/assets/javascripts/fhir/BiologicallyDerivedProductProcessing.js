const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { BiologicallyDerivedProductProcessingSchema } = require('./allSchemaHeaders.js');

BiologicallyDerivedProductProcessingSchema.add(BackboneElementSchema);
BiologicallyDerivedProductProcessingSchema.remove('id');
BiologicallyDerivedProductProcessingSchema.add({
  description: PrimitiveStringSchema,
  procedure: CodeableConceptSchema,
  additive: ReferenceSchema,
  timeDateTime: PrimitiveDateTimeSchema,
  timePeriod: PeriodSchema,
});

module.exports.BiologicallyDerivedProductProcessingSchema = BiologicallyDerivedProductProcessingSchema;
