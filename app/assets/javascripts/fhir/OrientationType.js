const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const OrientationTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'OrientationType' },
  _type: { type: String, default: 'FHIR::OrientationType' },
});

class OrientationType extends mongoose.Document {
  constructor(object) {
    super(object, OrientationTypeSchema);
    this.typeName = 'OrientationType';
    this._type = 'FHIR::OrientationType';
  }
}

module.exports.OrientationTypeSchema = OrientationTypeSchema;
module.exports.OrientationType = OrientationType;
