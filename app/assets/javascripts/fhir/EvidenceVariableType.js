const { ElementSchema } = require('./Element');
const { EvidenceVariableTypeSchema } = require('./allSchemaHeaders.js');

EvidenceVariableTypeSchema.add(ElementSchema);
EvidenceVariableTypeSchema.remove('id');
EvidenceVariableTypeSchema.add({
  value: String,
});

module.exports.EvidenceVariableTypeSchema = EvidenceVariableTypeSchema;
