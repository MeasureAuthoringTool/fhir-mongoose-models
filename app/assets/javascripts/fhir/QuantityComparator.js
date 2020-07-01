const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const QuantityComparatorSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'QuantityComparator' },
  _type: { type: String, default: 'FHIR::QuantityComparator' },
});

class QuantityComparator extends mongoose.Document {
  constructor(object) {
    super(object, QuantityComparatorSchema);
    this.typeName = 'QuantityComparator';
    this._type = 'FHIR::QuantityComparator';
  }
}

module.exports.QuantityComparatorSchema = QuantityComparatorSchema;
module.exports.QuantityComparator = QuantityComparator;
