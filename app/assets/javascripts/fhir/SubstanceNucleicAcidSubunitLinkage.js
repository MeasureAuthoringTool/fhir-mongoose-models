const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceNucleicAcidSubunitLinkageSchema } = require('./allSchemaHeaders.js');

SubstanceNucleicAcidSubunitLinkageSchema.add(BackboneElementSchema);
SubstanceNucleicAcidSubunitLinkageSchema.remove('id');
SubstanceNucleicAcidSubunitLinkageSchema.add({
  connectivity: PrimitiveStringSchema,
  identifier: IdentifierSchema,
  name: PrimitiveStringSchema,
  residueSite: PrimitiveStringSchema,
});

module.exports.SubstanceNucleicAcidSubunitLinkageSchema = SubstanceNucleicAcidSubunitLinkageSchema;
