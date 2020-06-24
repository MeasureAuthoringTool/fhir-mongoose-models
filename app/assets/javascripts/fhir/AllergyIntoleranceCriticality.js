const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AllergyIntoleranceCriticalitySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AllergyIntoleranceCriticality' },
});

class AllergyIntoleranceCriticality extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceCriticalitySchema);
    this._type = 'FHIR::AllergyIntoleranceCriticality';
  }
};


module.exports.AllergyIntoleranceCriticalitySchema = AllergyIntoleranceCriticalitySchema;
module.exports.AllergyIntoleranceCriticality = AllergyIntoleranceCriticality;
