const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { BiologicallyDerivedProductCollectionSchema } = require('./allSchemaHeaders.js');

BiologicallyDerivedProductCollectionSchema.add(BackboneElementSchema);
BiologicallyDerivedProductCollectionSchema.remove('id');
BiologicallyDerivedProductCollectionSchema.add({
  collector: ReferenceSchema,
  source: ReferenceSchema,
  collectedDateTime: PrimitiveDateTimeSchema,
  collectedPeriod: PeriodSchema,
});

module.exports.BiologicallyDerivedProductCollectionSchema = BiologicallyDerivedProductCollectionSchema;
