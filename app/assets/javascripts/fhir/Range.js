const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const RangeSchema = ElementSchemaFunction({
  low: SimpleQuantitySchema,
  high: SimpleQuantitySchema,
  typeName: { type: String, default: 'Range' },
  _type: { type: String, default: 'FHIR::Range' },
});

class Range extends mongoose.Document {
  constructor(object) {
    super(object, RangeSchema);
    this.typeName = 'Range';
    this._type = 'FHIR::Range';
  }
}

module.exports.RangeSchema = RangeSchema;
module.exports.Range = Range;
