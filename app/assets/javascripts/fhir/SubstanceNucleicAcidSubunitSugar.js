const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceNucleicAcidSubunitSugarSchema } = require('./allSchemaHeaders.js');

SubstanceNucleicAcidSubunitSugarSchema.add(BackboneElementSchema);
SubstanceNucleicAcidSubunitSugarSchema.remove('id');
SubstanceNucleicAcidSubunitSugarSchema.add({
  identifier: IdentifierSchema,
  name: PrimitiveStringSchema,
  residueSite: PrimitiveStringSchema,
});

module.exports.SubstanceNucleicAcidSubunitSugarSchema = SubstanceNucleicAcidSubunitSugarSchema;
