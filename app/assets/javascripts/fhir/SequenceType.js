const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SequenceTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SequenceType' },
  _type: { type: String, default: 'FHIR::SequenceType' },
});

class SequenceType extends mongoose.Document {
  constructor(object) {
    super(object, SequenceTypeSchema);
    this.typeName = 'SequenceType';
    this._type = 'FHIR::SequenceType';
  }
}

module.exports.SequenceTypeSchema = SequenceTypeSchema;
module.exports.SequenceType = SequenceType;
