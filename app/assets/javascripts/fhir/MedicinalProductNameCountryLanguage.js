const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductNameCountryLanguageSchema = BackboneElementSchemaFunction({
   country : CodeableConceptSchema,
   jurisdiction : CodeableConceptSchema,
   language : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'MedicinalProductNameCountryLanguage' },
});

class MedicinalProductNameCountryLanguage extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductNameCountryLanguageSchema);
    this._type = 'FHIR::MedicinalProductNameCountryLanguage';
  }
};


module.exports.MedicinalProductNameCountryLanguageSchema = MedicinalProductNameCountryLanguageSchema;
module.exports.MedicinalProductNameCountryLanguage = MedicinalProductNameCountryLanguage;
