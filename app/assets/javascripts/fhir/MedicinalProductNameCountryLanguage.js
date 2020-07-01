const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const MedicinalProductNameCountryLanguageSchema = BackboneElementSchemaFunction({
  country: CodeableConceptSchema,
  jurisdiction: CodeableConceptSchema,
  language: CodeableConceptSchema,
  typeName: { type: String, default: 'MedicinalProductNameCountryLanguage' },
  _type: { type: String, default: 'FHIR::MedicinalProductNameCountryLanguage' },
});

class MedicinalProductNameCountryLanguage extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductNameCountryLanguageSchema);
    this.typeName = 'MedicinalProductNameCountryLanguage';
    this._type = 'FHIR::MedicinalProductNameCountryLanguage';
  }
}

module.exports.MedicinalProductNameCountryLanguageSchema = MedicinalProductNameCountryLanguageSchema;
module.exports.MedicinalProductNameCountryLanguage = MedicinalProductNameCountryLanguage;
