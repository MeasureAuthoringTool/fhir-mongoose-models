const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ConceptMapEquivalenceSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ConceptMapEquivalence' },
  _type: { type: String, default: 'FHIR::ConceptMapEquivalence' },
});

class ConceptMapEquivalence extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapEquivalenceSchema);
    this.typeName = 'ConceptMapEquivalence';
    this._type = 'FHIR::ConceptMapEquivalence';
  }
}

module.exports.ConceptMapEquivalenceSchema = ConceptMapEquivalenceSchema;
module.exports.ConceptMapEquivalence = ConceptMapEquivalence;
