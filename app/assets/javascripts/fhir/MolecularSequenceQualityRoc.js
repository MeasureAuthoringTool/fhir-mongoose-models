const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceQualityRocSchema } = require('./allSchemaHeaders.js');

MolecularSequenceQualityRocSchema.add(BackboneElementSchema);
MolecularSequenceQualityRocSchema.remove('id');
MolecularSequenceQualityRocSchema.add({
  score: [PrimitiveIntegerSchema],
  numTP: [PrimitiveIntegerSchema],
  numFP: [PrimitiveIntegerSchema],
  numFN: [PrimitiveIntegerSchema],
  precision: [PrimitiveDecimalSchema],
  sensitivity: [PrimitiveDecimalSchema],
  fMeasure: [PrimitiveDecimalSchema],
});

module.exports.MolecularSequenceQualityRocSchema = MolecularSequenceQualityRocSchema;
