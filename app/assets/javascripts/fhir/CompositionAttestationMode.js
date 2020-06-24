const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CompositionAttestationModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CompositionAttestationMode' },
});

class CompositionAttestationMode extends mongoose.Document {
  constructor(object) {
    super(object, CompositionAttestationModeSchema);
    this._type = 'FHIR::CompositionAttestationMode';
  }
};


module.exports.CompositionAttestationModeSchema = CompositionAttestationModeSchema;
module.exports.CompositionAttestationMode = CompositionAttestationMode;
