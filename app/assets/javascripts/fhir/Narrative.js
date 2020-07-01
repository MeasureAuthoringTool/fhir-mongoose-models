const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { NarrativeStatusSchema } = require('./NarrativeStatus');
const { PrimitiveXhtmlSchema } = require('./PrimitiveXhtml');

const NarrativeSchema = ElementSchemaFunction({
  status: NarrativeStatusSchema,
  div: PrimitiveXhtmlSchema,
  typeName: { type: String, default: 'Narrative' },
  _type: { type: String, default: 'FHIR::Narrative' },
});

class Narrative extends mongoose.Document {
  constructor(object) {
    super(object, NarrativeSchema);
    this.typeName = 'Narrative';
    this._type = 'FHIR::Narrative';
  }
}

module.exports.NarrativeSchema = NarrativeSchema;
module.exports.Narrative = Narrative;
