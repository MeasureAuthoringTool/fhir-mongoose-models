const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { BiologicallyDerivedProductManipulationSchema } = require('./allSchemaHeaders.js');

BiologicallyDerivedProductManipulationSchema.add(BackboneElementSchema);
BiologicallyDerivedProductManipulationSchema.remove('id');
BiologicallyDerivedProductManipulationSchema.add({
  description: PrimitiveStringSchema,
  timeDateTime: PrimitiveDateTimeSchema,
  timePeriod: PeriodSchema,
});

module.exports.BiologicallyDerivedProductManipulationSchema = BiologicallyDerivedProductManipulationSchema;
