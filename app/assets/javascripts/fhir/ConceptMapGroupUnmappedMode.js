const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ConceptMapGroupUnmappedModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ConceptMapGroupUnmappedMode' },
  _type: { type: String, default: 'FHIR::ConceptMapGroupUnmappedMode' },
});

class ConceptMapGroupUnmappedMode extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapGroupUnmappedModeSchema);
    this.typeName = 'ConceptMapGroupUnmappedMode';
    this._type = 'FHIR::ConceptMapGroupUnmappedMode';
  }
}

module.exports.ConceptMapGroupUnmappedModeSchema = ConceptMapGroupUnmappedModeSchema;
module.exports.ConceptMapGroupUnmappedMode = ConceptMapGroupUnmappedMode;
