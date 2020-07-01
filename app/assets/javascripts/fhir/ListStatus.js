const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ListStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ListStatus' },
  _type: { type: String, default: 'FHIR::ListStatus' },
});

class ListStatus extends mongoose.Document {
  constructor(object) {
    super(object, ListStatusSchema);
    this.typeName = 'ListStatus';
    this._type = 'FHIR::ListStatus';
  }
}

module.exports.ListStatusSchema = ListStatusSchema;
module.exports.ListStatus = ListStatus;
