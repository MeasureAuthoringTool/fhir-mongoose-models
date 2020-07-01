const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const BindingStrengthSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'BindingStrength' },
  _type: { type: String, default: 'FHIR::BindingStrength' },
});

class BindingStrength extends mongoose.Document {
  constructor(object) {
    super(object, BindingStrengthSchema);
    this.typeName = 'BindingStrength';
    this._type = 'FHIR::BindingStrength';
  }
}

module.exports.BindingStrengthSchema = BindingStrengthSchema;
module.exports.BindingStrength = BindingStrength;
