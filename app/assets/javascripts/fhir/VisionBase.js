const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const VisionBaseSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'VisionBase' },
});

class VisionBase extends mongoose.Document {
  constructor(object) {
    super(object, VisionBaseSchema);
    this._type = 'FHIR::VisionBase';
  }
};


module.exports.VisionBaseSchema = VisionBaseSchema;
module.exports.VisionBase = VisionBase;
