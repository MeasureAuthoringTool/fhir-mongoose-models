const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CompositionStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CompositionStatus' },
});

class CompositionStatus extends mongoose.Document {
  constructor(object) {
    super(object, CompositionStatusSchema);
    this._type = 'FHIR::CompositionStatus';
  }
};


module.exports.CompositionStatusSchema = CompositionStatusSchema;
module.exports.CompositionStatus = CompositionStatus;
