const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ResearchElementTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ResearchElementType' },
  _type: { type: String, default: 'FHIR::ResearchElementType' },
});

class ResearchElementType extends mongoose.Document {
  constructor(object) {
    super(object, ResearchElementTypeSchema);
    this.typeName = 'ResearchElementType';
    this._type = 'FHIR::ResearchElementType';
  }
}

module.exports.ResearchElementTypeSchema = ResearchElementTypeSchema;
module.exports.ResearchElementType = ResearchElementType;
