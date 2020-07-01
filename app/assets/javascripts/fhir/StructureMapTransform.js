const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const StructureMapTransformSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'StructureMapTransform' },
  _type: { type: String, default: 'FHIR::StructureMapTransform' },
});

class StructureMapTransform extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapTransformSchema);
    this.typeName = 'StructureMapTransform';
    this._type = 'FHIR::StructureMapTransform';
  }
}

module.exports.StructureMapTransformSchema = StructureMapTransformSchema;
module.exports.StructureMapTransform = StructureMapTransform;
