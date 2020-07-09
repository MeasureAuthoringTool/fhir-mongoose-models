const { ElementSchema } = require('./Element');
const { FHIRSubstanceStatusSchema } = require('./allSchemaHeaders.js');

FHIRSubstanceStatusSchema.add(ElementSchema);
FHIRSubstanceStatusSchema.remove('id');
FHIRSubstanceStatusSchema.add({
  value: String,
});

module.exports.FHIRSubstanceStatusSchema = FHIRSubstanceStatusSchema;
