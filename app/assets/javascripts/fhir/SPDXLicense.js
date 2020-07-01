const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SPDXLicenseSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SPDXLicense' },
  _type: { type: String, default: 'FHIR::SPDXLicense' },
});

class SPDXLicense extends mongoose.Document {
  constructor(object) {
    super(object, SPDXLicenseSchema);
    this.typeName = 'SPDXLicense';
    this._type = 'FHIR::SPDXLicense';
  }
}

module.exports.SPDXLicenseSchema = SPDXLicenseSchema;
module.exports.SPDXLicense = SPDXLicense;
