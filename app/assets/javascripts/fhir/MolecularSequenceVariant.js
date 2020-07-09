const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceVariantSchema } = require('./allSchemaHeaders.js');

MolecularSequenceVariantSchema.add(BackboneElementSchema);
MolecularSequenceVariantSchema.remove('id');
MolecularSequenceVariantSchema.add({
  start: PrimitiveIntegerSchema,
  end: PrimitiveIntegerSchema,
  observedAllele: PrimitiveStringSchema,
  referenceAllele: PrimitiveStringSchema,
  cigar: PrimitiveStringSchema,
  variantPointer: ReferenceSchema,
});

module.exports.MolecularSequenceVariantSchema = MolecularSequenceVariantSchema;
