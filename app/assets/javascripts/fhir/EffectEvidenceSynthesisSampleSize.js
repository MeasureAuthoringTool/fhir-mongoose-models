const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EffectEvidenceSynthesisSampleSizeSchema = BackboneElementSchemaFunction({
   description : String,
   numberOfStudies : Number,
   numberOfParticipants : Number,
   fhirTitle: { type: String, default: 'EffectEvidenceSynthesisSampleSize' },
});

class EffectEvidenceSynthesisSampleSize extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisSampleSizeSchema);
    this._type = 'FHIR::EffectEvidenceSynthesisSampleSize';
  }
};


module.exports.EffectEvidenceSynthesisSampleSizeSchema = EffectEvidenceSynthesisSampleSizeSchema;
module.exports.EffectEvidenceSynthesisSampleSize = EffectEvidenceSynthesisSampleSize;
