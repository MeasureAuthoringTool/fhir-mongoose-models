const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AdministrativeGenderSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AdministrativeGender' },
});

class AdministrativeGender extends mongoose.Document {
  constructor(object) {
    super(object, AdministrativeGenderSchema);
    this._type = 'FHIR::AdministrativeGender';
  }
};


module.exports.AdministrativeGenderSchema = AdministrativeGenderSchema;
module.exports.AdministrativeGender = AdministrativeGender;
