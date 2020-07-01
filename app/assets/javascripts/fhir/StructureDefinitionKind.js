const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const StructureDefinitionKindSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'StructureDefinitionKind' },
  _type: { type: String, default: 'FHIR::StructureDefinitionKind' },
});

class StructureDefinitionKind extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionKindSchema);
    this.typeName = 'StructureDefinitionKind';
    this._type = 'FHIR::StructureDefinitionKind';
  }
}

module.exports.StructureDefinitionKindSchema = StructureDefinitionKindSchema;
module.exports.StructureDefinitionKind = StructureDefinitionKind;
