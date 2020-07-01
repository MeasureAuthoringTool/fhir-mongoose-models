const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PropertyTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'PropertyType' },
  _type: { type: String, default: 'FHIR::PropertyType' },
});

class PropertyType extends mongoose.Document {
  constructor(object) {
    super(object, PropertyTypeSchema);
    this.typeName = 'PropertyType';
    this._type = 'FHIR::PropertyType';
  }
}

module.exports.PropertyTypeSchema = PropertyTypeSchema;
module.exports.PropertyType = PropertyType;
