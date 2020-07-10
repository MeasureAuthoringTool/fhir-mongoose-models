const { ElementSchema } = require('./Element');
const { IdentityAssuranceLevelSchema } = require('./allSchemaHeaders.js');

IdentityAssuranceLevelSchema.add(ElementSchema);
IdentityAssuranceLevelSchema.remove('id');
IdentityAssuranceLevelSchema.add({
  value: String,
});

module.exports.IdentityAssuranceLevelSchema = IdentityAssuranceLevelSchema;
