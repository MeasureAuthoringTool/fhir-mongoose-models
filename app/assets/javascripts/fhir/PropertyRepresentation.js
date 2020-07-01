const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PropertyRepresentationSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'PropertyRepresentation' },
  _type: { type: String, default: 'FHIR::PropertyRepresentation' },
});

class PropertyRepresentation extends mongoose.Document {
  constructor(object) {
    super(object, PropertyRepresentationSchema);
    this.typeName = 'PropertyRepresentation';
    this._type = 'FHIR::PropertyRepresentation';
  }
}

module.exports.PropertyRepresentationSchema = PropertyRepresentationSchema;
module.exports.PropertyRepresentation = PropertyRepresentation;
