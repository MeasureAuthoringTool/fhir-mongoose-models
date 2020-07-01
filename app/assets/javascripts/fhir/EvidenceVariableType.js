const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EvidenceVariableTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EvidenceVariableType' },
  _type: { type: String, default: 'FHIR::EvidenceVariableType' },
});

class EvidenceVariableType extends mongoose.Document {
  constructor(object) {
    super(object, EvidenceVariableTypeSchema);
    this.typeName = 'EvidenceVariableType';
    this._type = 'FHIR::EvidenceVariableType';
  }
}

module.exports.EvidenceVariableTypeSchema = EvidenceVariableTypeSchema;
module.exports.EvidenceVariableType = EvidenceVariableType;
