const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const MolecularSequenceVariantSchema = BackboneElementSchemaFunction({
  start: PrimitiveIntegerSchema,
  end: PrimitiveIntegerSchema,
  observedAllele: PrimitiveStringSchema,
  referenceAllele: PrimitiveStringSchema,
  cigar: PrimitiveStringSchema,
  variantPointer: ReferenceSchema,
  typeName: { type: String, default: 'MolecularSequenceVariant' },
  _type: { type: String, default: 'FHIR::MolecularSequenceVariant' },
});

class MolecularSequenceVariant extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceVariantSchema);
    this.typeName = 'MolecularSequenceVariant';
    this._type = 'FHIR::MolecularSequenceVariant';
  }
}

module.exports.MolecularSequenceVariantSchema = MolecularSequenceVariantSchema;
module.exports.MolecularSequenceVariant = MolecularSequenceVariant;
