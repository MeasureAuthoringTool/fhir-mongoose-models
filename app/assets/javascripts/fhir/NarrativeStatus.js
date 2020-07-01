const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const NarrativeStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'NarrativeStatus' },
  _type: { type: String, default: 'FHIR::NarrativeStatus' },
});

class NarrativeStatus extends mongoose.Document {
  constructor(object) {
    super(object, NarrativeStatusSchema);
    this.typeName = 'NarrativeStatus';
    this._type = 'FHIR::NarrativeStatus';
  }
}

module.exports.NarrativeStatusSchema = NarrativeStatusSchema;
module.exports.NarrativeStatus = NarrativeStatus;
