const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { OrientationTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { StrandTypeSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceReferenceSeqSchema } = require('./allSchemaHeaders.js');

MolecularSequenceReferenceSeqSchema.add(BackboneElementSchema);
MolecularSequenceReferenceSeqSchema.remove('id');
MolecularSequenceReferenceSeqSchema.add({
  chromosome: CodeableConceptSchema,
  genomeBuild: PrimitiveStringSchema,
  orientation: OrientationTypeSchema,
  referenceSeqId: CodeableConceptSchema,
  referenceSeqPointer: ReferenceSchema,
  referenceSeqString: PrimitiveStringSchema,
  strand: StrandTypeSchema,
  windowStart: PrimitiveIntegerSchema,
  windowEnd: PrimitiveIntegerSchema,
});

module.exports.MolecularSequenceReferenceSeqSchema = MolecularSequenceReferenceSeqSchema;
