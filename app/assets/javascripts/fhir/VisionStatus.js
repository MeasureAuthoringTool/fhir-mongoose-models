const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const VisionStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'VisionStatus' },
  _type: { type: String, default: 'FHIR::VisionStatus' },
});

class VisionStatus extends mongoose.Document {
  constructor(object) {
    super(object, VisionStatusSchema);
    this.typeName = 'VisionStatus';
    this._type = 'FHIR::VisionStatus';
  }
}

module.exports.VisionStatusSchema = VisionStatusSchema;
module.exports.VisionStatus = VisionStatus;
