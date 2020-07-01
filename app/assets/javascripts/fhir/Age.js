const mongoose = require('mongoose/browser');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');

const AgeSchema = QuantitySchemaFunction({
  typeName: { type: String, default: 'Age' },
  _type: { type: String, default: 'FHIR::Age' },
});

class Age extends mongoose.Document {
  constructor(object) {
    super(object, AgeSchema);
    this.typeName = 'Age';
    this._type = 'FHIR::Age';
  }
}

module.exports.AgeSchema = AgeSchema;
module.exports.Age = Age;
