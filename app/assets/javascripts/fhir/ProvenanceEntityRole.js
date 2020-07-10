const { ElementSchema } = require('./Element');
const { ProvenanceEntityRoleSchema } = require('./allSchemaHeaders.js');

ProvenanceEntityRoleSchema.add(ElementSchema);
ProvenanceEntityRoleSchema.remove('id');
ProvenanceEntityRoleSchema.add({
  value: String,
});

module.exports.ProvenanceEntityRoleSchema = ProvenanceEntityRoleSchema;
