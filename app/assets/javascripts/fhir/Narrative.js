const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { NarrativeStatusSchema } = require('./NarrativeStatus');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NarrativeSchema = ElementSchemaFunction({
   status : NarrativeStatusSchema,
   div : String,
   fhirTitle: { type: String, default: 'Narrative' },
});

class Narrative extends mongoose.Document {
  constructor(object) {
    super(object, NarrativeSchema);
    this._type = 'FHIR::Narrative';
  }
};


module.exports.NarrativeSchema = NarrativeSchema;
module.exports.Narrative = Narrative;
