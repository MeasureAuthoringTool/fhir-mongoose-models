const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MolecularSequenceStructureVariantInnerSchema = BackboneElementSchemaFunction({
   start : Number,
   end : Number,
   fhirTitle: { type: String, default: 'MolecularSequenceStructureVariantInner' },
});

class MolecularSequenceStructureVariantInner extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceStructureVariantInnerSchema);
    this._type = 'FHIR::MolecularSequenceStructureVariantInner';
  }
};


module.exports.MolecularSequenceStructureVariantInnerSchema = MolecularSequenceStructureVariantInnerSchema;
module.exports.MolecularSequenceStructureVariantInner = MolecularSequenceStructureVariantInner;
