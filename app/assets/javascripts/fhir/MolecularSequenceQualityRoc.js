const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');

const MolecularSequenceQualityRocSchema = BackboneElementSchemaFunction({
  score: [PrimitiveIntegerSchema],
  numTP: [PrimitiveIntegerSchema],
  numFP: [PrimitiveIntegerSchema],
  numFN: [PrimitiveIntegerSchema],
  precision: [PrimitiveDecimalSchema],
  sensitivity: [PrimitiveDecimalSchema],
  fMeasure: [PrimitiveDecimalSchema],
  typeName: { type: String, default: 'MolecularSequenceQualityRoc' },
  _type: { type: String, default: 'FHIR::MolecularSequenceQualityRoc' },
});

class MolecularSequenceQualityRoc extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceQualityRocSchema);
    this.typeName = 'MolecularSequenceQualityRoc';
    this._type = 'FHIR::MolecularSequenceQualityRoc';
  }
}

module.exports.MolecularSequenceQualityRocSchema = MolecularSequenceQualityRocSchema;
module.exports.MolecularSequenceQualityRoc = MolecularSequenceQualityRoc;
