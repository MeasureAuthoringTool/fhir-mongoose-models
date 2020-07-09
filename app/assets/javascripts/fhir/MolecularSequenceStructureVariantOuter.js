const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceStructureVariantOuterSchema } = require('./allSchemaHeaders.js');

MolecularSequenceStructureVariantOuterSchema.add(BackboneElementSchema);
MolecularSequenceStructureVariantOuterSchema.remove('id');
MolecularSequenceStructureVariantOuterSchema.add({
  start: PrimitiveIntegerSchema,
  end: PrimitiveIntegerSchema,
});

module.exports.MolecularSequenceStructureVariantOuterSchema = MolecularSequenceStructureVariantOuterSchema;
