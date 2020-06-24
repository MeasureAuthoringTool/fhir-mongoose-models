const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RiskEvidenceSynthesisSampleSizeSchema = BackboneElementSchemaFunction({
   description : String,
   numberOfStudies : Number,
   numberOfParticipants : Number,
   fhirTitle: { type: String, default: 'RiskEvidenceSynthesisSampleSize' },
});

class RiskEvidenceSynthesisSampleSize extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisSampleSizeSchema);
    this._type = 'FHIR::RiskEvidenceSynthesisSampleSize';
  }
};


module.exports.RiskEvidenceSynthesisSampleSizeSchema = RiskEvidenceSynthesisSampleSizeSchema;
module.exports.RiskEvidenceSynthesisSampleSize = RiskEvidenceSynthesisSampleSize;
