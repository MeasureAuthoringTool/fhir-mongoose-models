const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MolecularSequenceQualityRocSchema } = require('./MolecularSequenceQualityRoc');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { QualityTypeSchema } = require('./QualityType');
const { QuantitySchema } = require('./Quantity');

const MolecularSequenceQualitySchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'MolecularSequenceQuality' },
  _type: { type: String, default: 'FHIR::MolecularSequenceQuality' },
});

class MolecularSequenceQuality extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceQualitySchema);
    this.typeName = 'MolecularSequenceQuality';
    this._type = 'FHIR::MolecularSequenceQuality';
  }
}

module.exports.MolecularSequenceQualitySchema = MolecularSequenceQualitySchema;
module.exports.MolecularSequenceQuality = MolecularSequenceQuality;
