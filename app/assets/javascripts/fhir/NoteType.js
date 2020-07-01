const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const NoteTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'NoteType' },
  _type: { type: String, default: 'FHIR::NoteType' },
});

class NoteType extends mongoose.Document {
  constructor(object) {
    super(object, NoteTypeSchema);
    this.typeName = 'NoteType';
    this._type = 'FHIR::NoteType';
  }
}

module.exports.NoteTypeSchema = NoteTypeSchema;
module.exports.NoteType = NoteType;
