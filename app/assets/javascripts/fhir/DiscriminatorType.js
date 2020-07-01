const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DiscriminatorTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DiscriminatorType' },
  _type: { type: String, default: 'FHIR::DiscriminatorType' },
});

class DiscriminatorType extends mongoose.Document {
  constructor(object) {
    super(object, DiscriminatorTypeSchema);
    this.typeName = 'DiscriminatorType';
    this._type = 'FHIR::DiscriminatorType';
  }
}

module.exports.DiscriminatorTypeSchema = DiscriminatorTypeSchema;
module.exports.DiscriminatorType = DiscriminatorType;
