const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { MedicinalProductNameCountryLanguageSchema } = require('./MedicinalProductNameCountryLanguage');
const { MedicinalProductNameNamePartSchema } = require('./MedicinalProductNameNamePart');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const MedicinalProductNameSchema = BackboneElementSchemaFunction({
  productName: PrimitiveStringSchema,
  namePart: [MedicinalProductNameNamePartSchema],
  countryLanguage: [MedicinalProductNameCountryLanguageSchema],
  typeName: { type: String, default: 'MedicinalProductName' },
  _type: { type: String, default: 'FHIR::MedicinalProductName' },
});

class MedicinalProductName extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductNameSchema);
    this.typeName = 'MedicinalProductName';
    this._type = 'FHIR::MedicinalProductName';
  }
}

module.exports.MedicinalProductNameSchema = MedicinalProductNameSchema;
module.exports.MedicinalProductName = MedicinalProductName;
