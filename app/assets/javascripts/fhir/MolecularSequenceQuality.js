const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceQualityRocSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { QualityTypeSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceQualitySchema } = require('./allSchemaHeaders.js');

MolecularSequenceQualitySchema.add(BackboneElementSchema);
MolecularSequenceQualitySchema.remove('id');
MolecularSequenceQualitySchema.add({
  type: QualityTypeSchema,
  standardSequence: CodeableConceptSchema,
  start: PrimitiveIntegerSchema,
  end: PrimitiveIntegerSchema,
  score: QuantitySchema,
  method: CodeableConceptSchema,
  truthTP: PrimitiveDecimalSchema,
  queryTP: PrimitiveDecimalSchema,
  truthFN: PrimitiveDecimalSchema,
  queryFP: PrimitiveDecimalSchema,
  gtFP: PrimitiveDecimalSchema,
  precision: PrimitiveDecimalSchema,
  recall: PrimitiveDecimalSchema,
  fScore: PrimitiveDecimalSchema,
  roc: MolecularSequenceQualityRocSchema,
});

module.exports.MolecularSequenceQualitySchema = MolecularSequenceQualitySchema;
