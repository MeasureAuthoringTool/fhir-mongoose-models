const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const VisionBaseSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'VisionBase' },
  _type: { type: String, default: 'FHIR::VisionBase' },
});

class VisionBase extends mongoose.Document {
  constructor(object) {
    super(object, VisionBaseSchema);
    this.typeName = 'VisionBase';
    this._type = 'FHIR::VisionBase';
  }
}

module.exports.VisionBaseSchema = VisionBaseSchema;
module.exports.VisionBase = VisionBase;
