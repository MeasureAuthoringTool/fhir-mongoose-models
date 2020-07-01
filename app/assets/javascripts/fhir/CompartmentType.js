const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CompartmentTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CompartmentType' },
  _type: { type: String, default: 'FHIR::CompartmentType' },
});

class CompartmentType extends mongoose.Document {
  constructor(object) {
    super(object, CompartmentTypeSchema);
    this.typeName = 'CompartmentType';
    this._type = 'FHIR::CompartmentType';
  }
}

module.exports.CompartmentTypeSchema = CompartmentTypeSchema;
module.exports.CompartmentType = CompartmentType;
