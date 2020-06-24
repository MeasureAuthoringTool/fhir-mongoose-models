const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MolecularSequenceQualityRocSchema } = require('./MolecularSequenceQualityRoc');
const { QualityTypeSchema } = require('./QualityType');
const { QuantitySchema } = require('./Quantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MolecularSequenceQualitySchema = BackboneElementSchemaFunction({
   type : QualityTypeSchema,
   standardSequence : CodeableConceptSchema,
   start : Number,
   end : Number,
   score : QuantitySchema,
   method : CodeableConceptSchema,
   truthTP : Number,
   queryTP : Number,
   truthFN : Number,
   queryFP : Number,
   gtFP : Number,
   precision : Number,
   recall : Number,
   fScore : Number,
   roc : MolecularSequenceQualityRocSchema,
   fhirTitle: { type: String, default: 'MolecularSequenceQuality' },
});

class MolecularSequenceQuality extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceQualitySchema);
    this._type = 'FHIR::MolecularSequenceQuality';
  }
};


module.exports.MolecularSequenceQualitySchema = MolecularSequenceQualitySchema;
module.exports.MolecularSequenceQuality = MolecularSequenceQuality;
