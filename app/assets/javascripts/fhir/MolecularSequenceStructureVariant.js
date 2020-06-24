const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MolecularSequenceStructureVariantInnerSchema } = require('./MolecularSequenceStructureVariantInner');
const { MolecularSequenceStructureVariantOuterSchema } = require('./MolecularSequenceStructureVariantOuter');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MolecularSequenceStructureVariantSchema = BackboneElementSchemaFunction({
   variantType : CodeableConceptSchema,
   exact : Boolean,
   length : Number,
   outer : MolecularSequenceStructureVariantOuterSchema,
   inner : MolecularSequenceStructureVariantInnerSchema,
   fhirTitle: { type: String, default: 'MolecularSequenceStructureVariant' },
});

class MolecularSequenceStructureVariant extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceStructureVariantSchema);
    this._type = 'FHIR::MolecularSequenceStructureVariant';
  }
};


module.exports.MolecularSequenceStructureVariantSchema = MolecularSequenceStructureVariantSchema;
module.exports.MolecularSequenceStructureVariant = MolecularSequenceStructureVariant;
