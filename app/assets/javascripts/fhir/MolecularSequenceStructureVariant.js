const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceStructureVariantInnerSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceStructureVariantOuterSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceStructureVariantSchema } = require('./allSchemaHeaders.js');

MolecularSequenceStructureVariantSchema.add(BackboneElementSchema);
MolecularSequenceStructureVariantSchema.remove('id');
MolecularSequenceStructureVariantSchema.add({
  variantType: CodeableConceptSchema,
  exact: PrimitiveBooleanSchema,
  length: PrimitiveIntegerSchema,
  outer: MolecularSequenceStructureVariantOuterSchema,
  inner: MolecularSequenceStructureVariantInnerSchema,
});

module.exports.MolecularSequenceStructureVariantSchema = MolecularSequenceStructureVariantSchema;
