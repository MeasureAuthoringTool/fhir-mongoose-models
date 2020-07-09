const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductNameCountryLanguageSchema } = require('./allSchemaHeaders.js');

MedicinalProductNameCountryLanguageSchema.add(BackboneElementSchema);
MedicinalProductNameCountryLanguageSchema.remove('id');
MedicinalProductNameCountryLanguageSchema.add({
  country: CodeableConceptSchema,
  jurisdiction: CodeableConceptSchema,
  language: CodeableConceptSchema,
});

module.exports.MedicinalProductNameCountryLanguageSchema = MedicinalProductNameCountryLanguageSchema;
