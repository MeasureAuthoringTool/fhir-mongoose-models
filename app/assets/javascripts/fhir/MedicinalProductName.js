const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { MedicinalProductNameCountryLanguageSchema } = require('./MedicinalProductNameCountryLanguage');
const { MedicinalProductNameNamePartSchema } = require('./MedicinalProductNameNamePart');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductNameSchema = BackboneElementSchemaFunction({
   productName : String,
   namePart : [MedicinalProductNameNamePartSchema],
   countryLanguage : [MedicinalProductNameCountryLanguageSchema],
   fhirTitle: { type: String, default: 'MedicinalProductName' },
});

class MedicinalProductName extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductNameSchema);
    this._type = 'FHIR::MedicinalProductName';
  }
};


module.exports.MedicinalProductNameSchema = MedicinalProductNameSchema;
module.exports.MedicinalProductName = MedicinalProductName;
