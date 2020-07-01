const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SortDirectionSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SortDirection' },
  _type: { type: String, default: 'FHIR::SortDirection' },
});

class SortDirection extends mongoose.Document {
  constructor(object) {
    super(object, SortDirectionSchema);
    this.typeName = 'SortDirection';
    this._type = 'FHIR::SortDirection';
  }
}

module.exports.SortDirectionSchema = SortDirectionSchema;
module.exports.SortDirection = SortDirection;
