const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TerminologyCapabilitiesTranslationSchema = BackboneElementSchemaFunction({
   needsMap : Boolean,
   fhirTitle: { type: String, default: 'TerminologyCapabilitiesTranslation' },
});

class TerminologyCapabilitiesTranslation extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesTranslationSchema);
    this._type = 'FHIR::TerminologyCapabilitiesTranslation';
  }
};


module.exports.TerminologyCapabilitiesTranslationSchema = TerminologyCapabilitiesTranslationSchema;
module.exports.TerminologyCapabilitiesTranslation = TerminologyCapabilitiesTranslation;
