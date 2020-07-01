const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const XPathUsageTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'XPathUsageType' },
  _type: { type: String, default: 'FHIR::XPathUsageType' },
});

class XPathUsageType extends mongoose.Document {
  constructor(object) {
    super(object, XPathUsageTypeSchema);
    this.typeName = 'XPathUsageType';
    this._type = 'FHIR::XPathUsageType';
  }
}

module.exports.XPathUsageTypeSchema = XPathUsageTypeSchema;
module.exports.XPathUsageType = XPathUsageType;
