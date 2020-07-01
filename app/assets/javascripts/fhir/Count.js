const mongoose = require('mongoose/browser');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');

const CountSchema = QuantitySchemaFunction({
  typeName: { type: String, default: 'Count' },
  _type: { type: String, default: 'FHIR::Count' },
});

class Count extends mongoose.Document {
  constructor(object) {
    super(object, CountSchema);
    this.typeName = 'Count';
    this._type = 'FHIR::Count';
  }
}

module.exports.CountSchema = CountSchema;
module.exports.Count = Count;
