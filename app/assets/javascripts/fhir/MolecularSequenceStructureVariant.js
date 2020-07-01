const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MolecularSequenceStructureVariantInnerSchema } = require('./MolecularSequenceStructureVariantInner');
const { MolecularSequenceStructureVariantOuterSchema } = require('./MolecularSequenceStructureVariantOuter');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');

const MolecularSequenceStructureVariantSchema = BackboneElementSchemaFunction({
  variantType: CodeableConceptSchema,
  exact: PrimitiveBooleanSchema,
  length: PrimitiveIntegerSchema,
  outer: MolecularSequenceStructureVariantOuterSchema,
  inner: MolecularSequenceStructureVariantInnerSchema,
  typeName: { type: String, default: 'MolecularSequenceStructureVariant' },
  _type: { type: String, default: 'FHIR::MolecularSequenceStructureVariant' },
});

class MolecularSequenceStructureVariant extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceStructureVariantSchema);
    this.typeName = 'MolecularSequenceStructureVariant';
    this._type = 'FHIR::MolecularSequenceStructureVariant';
  }
}

module.exports.MolecularSequenceStructureVariantSchema = MolecularSequenceStructureVariantSchema;
module.exports.MolecularSequenceStructureVariant = MolecularSequenceStructureVariant;
