const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceStructureVariantInnerSchema } = require('./allSchemaHeaders.js');

MolecularSequenceStructureVariantInnerSchema.add(BackboneElementSchema);
MolecularSequenceStructureVariantInnerSchema.remove('id');
MolecularSequenceStructureVariantInnerSchema.add({
  start: PrimitiveIntegerSchema,
  end: PrimitiveIntegerSchema,
});

module.exports.MolecularSequenceStructureVariantInnerSchema = MolecularSequenceStructureVariantInnerSchema;
