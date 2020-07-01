const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');

const MolecularSequenceStructureVariantOuterSchema = BackboneElementSchemaFunction({
  start: PrimitiveIntegerSchema,
  end: PrimitiveIntegerSchema,
  typeName: { type: String, default: 'MolecularSequenceStructureVariantOuter' },
  _type: { type: String, default: 'FHIR::MolecularSequenceStructureVariantOuter' },
});

class MolecularSequenceStructureVariantOuter extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceStructureVariantOuterSchema);
    this.typeName = 'MolecularSequenceStructureVariantOuter';
    this._type = 'FHIR::MolecularSequenceStructureVariantOuter';
  }
}

module.exports.MolecularSequenceStructureVariantOuterSchema = MolecularSequenceStructureVariantOuterSchema;
module.exports.MolecularSequenceStructureVariantOuter = MolecularSequenceStructureVariantOuter;
