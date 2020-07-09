const { BackboneElementSchema } = require('./BackboneElement');
const { MedicinalProductNameCountryLanguageSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductNameNamePartSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductNameSchema } = require('./allSchemaHeaders.js');

MedicinalProductNameSchema.add(BackboneElementSchema);
MedicinalProductNameSchema.remove('id');
MedicinalProductNameSchema.add({
  productName: PrimitiveStringSchema,
  namePart: [MedicinalProductNameNamePartSchema],
  countryLanguage: [MedicinalProductNameCountryLanguageSchema],
});

module.exports.MedicinalProductNameSchema = MedicinalProductNameSchema;
