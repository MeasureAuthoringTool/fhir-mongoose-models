const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const FHIRVersionSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'FHIRVersion' },
});

class FHIRVersion extends mongoose.Document {
  constructor(object) {
    super(object, FHIRVersionSchema);
    this._type = 'FHIR::FHIRVersion';
  }
};


module.exports.FHIRVersionSchema = FHIRVersionSchema;
module.exports.FHIRVersion = FHIRVersion;
