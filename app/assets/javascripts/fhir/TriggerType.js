const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const TriggerTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'TriggerType' },
  _type: { type: String, default: 'FHIR::TriggerType' },
});

class TriggerType extends mongoose.Document {
  constructor(object) {
    super(object, TriggerTypeSchema);
    this.typeName = 'TriggerType';
    this._type = 'FHIR::TriggerType';
  }
}

module.exports.TriggerTypeSchema = TriggerTypeSchema;
module.exports.TriggerType = TriggerType;
