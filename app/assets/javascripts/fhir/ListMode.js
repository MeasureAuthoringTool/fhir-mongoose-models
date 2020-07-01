const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ListModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ListMode' },
  _type: { type: String, default: 'FHIR::ListMode' },
});

class ListMode extends mongoose.Document {
  constructor(object) {
    super(object, ListModeSchema);
    this.typeName = 'ListMode';
    this._type = 'FHIR::ListMode';
  }
}

module.exports.ListModeSchema = ListModeSchema;
module.exports.ListMode = ListMode;
