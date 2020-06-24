const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConceptMapEquivalenceSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ConceptMapEquivalence' },
});

class ConceptMapEquivalence extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapEquivalenceSchema);
    this._type = 'FHIR::ConceptMapEquivalence';
  }
};


module.exports.ConceptMapEquivalenceSchema = ConceptMapEquivalenceSchema;
module.exports.ConceptMapEquivalence = ConceptMapEquivalence;
