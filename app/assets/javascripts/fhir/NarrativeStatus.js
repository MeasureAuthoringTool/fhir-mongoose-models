const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NarrativeStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'NarrativeStatus' },
});

class NarrativeStatus extends mongoose.Document {
  constructor(object) {
    super(object, NarrativeStatusSchema);
    this._type = 'FHIR::NarrativeStatus';
  }
};


module.exports.NarrativeStatusSchema = NarrativeStatusSchema;
module.exports.NarrativeStatus = NarrativeStatus;
