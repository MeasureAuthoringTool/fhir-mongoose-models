const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SPDXLicenseSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SPDXLicense' },
});

class SPDXLicense extends mongoose.Document {
  constructor(object) {
    super(object, SPDXLicenseSchema);
    this._type = 'FHIR::SPDXLicense';
  }
};


module.exports.SPDXLicenseSchema = SPDXLicenseSchema;
module.exports.SPDXLicense = SPDXLicense;
