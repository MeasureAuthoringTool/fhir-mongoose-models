const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const GuidePageGenerationSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'GuidePageGeneration' },
  _type: { type: String, default: 'FHIR::GuidePageGeneration' },
});

class GuidePageGeneration extends mongoose.Document {
  constructor(object) {
    super(object, GuidePageGenerationSchema);
    this.typeName = 'GuidePageGeneration';
    this._type = 'FHIR::GuidePageGeneration';
  }
}

module.exports.GuidePageGenerationSchema = GuidePageGenerationSchema;
module.exports.GuidePageGeneration = GuidePageGeneration;
