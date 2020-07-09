const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceQualitySchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceReferenceSeqSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceRepositorySchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceStructureVariantSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceVariantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SequenceTypeSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceSchema } = require('./allSchemaHeaders.js');

MolecularSequenceSchema.add(DomainResourceSchema);
MolecularSequenceSchema.remove('id');
MolecularSequenceSchema.add({
  identifier: [IdentifierSchema],
  type: SequenceTypeSchema,
  coordinateSystem: PrimitiveIntegerSchema,
  patient: ReferenceSchema,
  specimen: ReferenceSchema,
  device: ReferenceSchema,
  performer: ReferenceSchema,
  quantity: QuantitySchema,
  referenceSeq: MolecularSequenceReferenceSeqSchema,
  variant: [MolecularSequenceVariantSchema],
  observedSeq: PrimitiveStringSchema,
  quality: [MolecularSequenceQualitySchema],
  readCoverage: PrimitiveIntegerSchema,
  repository: [MolecularSequenceRepositorySchema],
  pointer: [ReferenceSchema],
  structureVariant: [MolecularSequenceStructureVariantSchema],
});

module.exports.MolecularSequenceSchema = MolecularSequenceSchema;
