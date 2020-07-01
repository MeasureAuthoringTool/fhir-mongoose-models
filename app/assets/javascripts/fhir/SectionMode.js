const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SectionModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SectionMode' },
  _type: { type: String, default: 'FHIR::SectionMode' },
});

class SectionMode extends mongoose.Document {
  constructor(object) {
    super(object, SectionModeSchema);
    this.typeName = 'SectionMode';
    this._type = 'FHIR::SectionMode';
  }
}

module.exports.SectionModeSchema = SectionModeSchema;
module.exports.SectionMode = SectionMode;
