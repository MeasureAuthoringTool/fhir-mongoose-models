const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MolecularSequenceStructureVariantOuterSchema = BackboneElementSchemaFunction({
   start : Number,
   end : Number,
   fhirTitle: { type: String, default: 'MolecularSequenceStructureVariantOuter' },
});

class MolecularSequenceStructureVariantOuter extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceStructureVariantOuterSchema);
    this._type = 'FHIR::MolecularSequenceStructureVariantOuter';
  }
};


module.exports.MolecularSequenceStructureVariantOuterSchema = MolecularSequenceStructureVariantOuterSchema;
module.exports.MolecularSequenceStructureVariantOuter = MolecularSequenceStructureVariantOuter;
