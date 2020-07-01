const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const GuideParameterCodeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'GuideParameterCode' },
  _type: { type: String, default: 'FHIR::GuideParameterCode' },
});

class GuideParameterCode extends mongoose.Document {
  constructor(object) {
    super(object, GuideParameterCodeSchema);
    this.typeName = 'GuideParameterCode';
    this._type = 'FHIR::GuideParameterCode';
  }
}

module.exports.GuideParameterCodeSchema = GuideParameterCodeSchema;
module.exports.GuideParameterCode = GuideParameterCode;
