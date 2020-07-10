const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { SearchEntryModeSchema } = require('./allSchemaHeaders.js');
const { BundleEntrySearchSchema } = require('./allSchemaHeaders.js');

BundleEntrySearchSchema.add(BackboneElementSchema);
BundleEntrySearchSchema.remove('id');
BundleEntrySearchSchema.add({
  mode: SearchEntryModeSchema,
  score: PrimitiveDecimalSchema,
});

module.exports.BundleEntrySearchSchema = BundleEntrySearchSchema;
