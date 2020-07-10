const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceProteinSubunitSchema } = require('./allSchemaHeaders.js');

SubstanceProteinSubunitSchema.add(BackboneElementSchema);
SubstanceProteinSubunitSchema.remove('id');
SubstanceProteinSubunitSchema.add({
  subunit: PrimitiveIntegerSchema,
  sequence: PrimitiveStringSchema,
  length: PrimitiveIntegerSchema,
  sequenceAttachment: AttachmentSchema,
  nTerminalModificationId: IdentifierSchema,
  nTerminalModification: PrimitiveStringSchema,
  cTerminalModificationId: IdentifierSchema,
  cTerminalModification: PrimitiveStringSchema,
});

module.exports.SubstanceProteinSubunitSchema = SubstanceProteinSubunitSchema;
