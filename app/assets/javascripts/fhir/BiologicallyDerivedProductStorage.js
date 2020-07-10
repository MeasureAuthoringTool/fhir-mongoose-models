const { BackboneElementSchema } = require('./BackboneElement');
const { BiologicallyDerivedProductStorageScaleSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { BiologicallyDerivedProductStorageSchema } = require('./allSchemaHeaders.js');

BiologicallyDerivedProductStorageSchema.add(BackboneElementSchema);
BiologicallyDerivedProductStorageSchema.remove('id');
BiologicallyDerivedProductStorageSchema.add({
  description: PrimitiveStringSchema,
  temperature: PrimitiveDecimalSchema,
  scale: BiologicallyDerivedProductStorageScaleSchema,
  duration: PeriodSchema,
});

module.exports.BiologicallyDerivedProductStorageSchema = BiologicallyDerivedProductStorageSchema;
