const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');

const MolecularSequenceStructureVariantInnerSchema = BackboneElementSchemaFunction({
  start: PrimitiveIntegerSchema,
  end: PrimitiveIntegerSchema,
  typeName: { type: String, default: 'MolecularSequenceStructureVariantInner' },
  _type: { type: String, default: 'FHIR::MolecularSequenceStructureVariantInner' },
});

class MolecularSequenceStructureVariantInner extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceStructureVariantInnerSchema);
    this.typeName = 'MolecularSequenceStructureVariantInner';
    this._type = 'FHIR::MolecularSequenceStructureVariantInner';
  }
}

module.exports.MolecularSequenceStructureVariantInnerSchema = MolecularSequenceStructureVariantInnerSchema;
module.exports.MolecularSequenceStructureVariantInner = MolecularSequenceStructureVariantInner;
