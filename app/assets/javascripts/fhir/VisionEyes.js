const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const VisionEyesSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'VisionEyes' },
  _type: { type: String, default: 'FHIR::VisionEyes' },
});

class VisionEyes extends mongoose.Document {
  constructor(object) {
    super(object, VisionEyesSchema);
    this.typeName = 'VisionEyes';
    this._type = 'FHIR::VisionEyes';
  }
}

module.exports.VisionEyesSchema = VisionEyesSchema;
module.exports.VisionEyes = VisionEyes;
