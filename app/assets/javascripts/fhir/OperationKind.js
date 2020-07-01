const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const OperationKindSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'OperationKind' },
  _type: { type: String, default: 'FHIR::OperationKind' },
});

class OperationKind extends mongoose.Document {
  constructor(object) {
    super(object, OperationKindSchema);
    this.typeName = 'OperationKind';
    this._type = 'FHIR::OperationKind';
  }
}

module.exports.OperationKindSchema = OperationKindSchema;
module.exports.OperationKind = OperationKind;
