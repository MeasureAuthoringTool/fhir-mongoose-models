const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceNucleicAcidSubunitLinkageSchema } = require('./allSchemaHeaders.js');
const { SubstanceNucleicAcidSubunitSugarSchema } = require('./allSchemaHeaders.js');
const { SubstanceNucleicAcidSubunitSchema } = require('./allSchemaHeaders.js');

SubstanceNucleicAcidSubunitSchema.add(BackboneElementSchema);
SubstanceNucleicAcidSubunitSchema.remove('id');
SubstanceNucleicAcidSubunitSchema.add({
  subunit: PrimitiveIntegerSchema,
  sequence: PrimitiveStringSchema,
  length: PrimitiveIntegerSchema,
  sequenceAttachment: AttachmentSchema,
  fivePrime: CodeableConceptSchema,
  threePrime: CodeableConceptSchema,
  linkage: [SubstanceNucleicAcidSubunitLinkageSchema],
  sugar: [SubstanceNucleicAcidSubunitSugarSchema],
});

module.exports.SubstanceNucleicAcidSubunitSchema = SubstanceNucleicAcidSubunitSchema;
