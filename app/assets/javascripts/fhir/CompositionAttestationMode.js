const { ElementSchema } = require('./Element');
const { CompositionAttestationModeSchema } = require('./allSchemaHeaders.js');

CompositionAttestationModeSchema.add(ElementSchema);
CompositionAttestationModeSchema.remove('id');
CompositionAttestationModeSchema.add({
  value: String,
});

module.exports.CompositionAttestationModeSchema = CompositionAttestationModeSchema;
