const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MolecularSequenceQualityRocSchema = BackboneElementSchemaFunction({
   score : [Number],
   numTP : [Number],
   numFP : [Number],
   numFN : [Number],
   precision : [Number],
   sensitivity : [Number],
   fMeasure : [Number],
   fhirTitle: { type: String, default: 'MolecularSequenceQualityRoc' },
});

class MolecularSequenceQualityRoc extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceQualityRocSchema);
    this._type = 'FHIR::MolecularSequenceQualityRoc';
  }
};


module.exports.MolecularSequenceQualityRocSchema = MolecularSequenceQualityRocSchema;
module.exports.MolecularSequenceQualityRoc = MolecularSequenceQualityRoc;
