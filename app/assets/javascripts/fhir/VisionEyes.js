const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const VisionEyesSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'VisionEyes' },
});

class VisionEyes extends mongoose.Document {
  constructor(object) {
    super(object, VisionEyesSchema);
    this._type = 'FHIR::VisionEyes';
  }
};


module.exports.VisionEyesSchema = VisionEyesSchema;
module.exports.VisionEyes = VisionEyes;
