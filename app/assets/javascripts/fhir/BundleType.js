const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const BundleTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'BundleType' },
  _type: { type: String, default: 'FHIR::BundleType' },
});

class BundleType extends mongoose.Document {
  constructor(object) {
    super(object, BundleTypeSchema);
    this.typeName = 'BundleType';
    this._type = 'FHIR::BundleType';
  }
}

module.exports.BundleTypeSchema = BundleTypeSchema;
module.exports.BundleType = BundleType;
