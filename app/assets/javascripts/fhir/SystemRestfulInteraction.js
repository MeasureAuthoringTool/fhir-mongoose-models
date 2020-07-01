const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SystemRestfulInteractionSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SystemRestfulInteraction' },
  _type: { type: String, default: 'FHIR::SystemRestfulInteraction' },
});

class SystemRestfulInteraction extends mongoose.Document {
  constructor(object) {
    super(object, SystemRestfulInteractionSchema);
    this.typeName = 'SystemRestfulInteraction';
    this._type = 'FHIR::SystemRestfulInteraction';
  }
}

module.exports.SystemRestfulInteractionSchema = SystemRestfulInteractionSchema;
module.exports.SystemRestfulInteraction = SystemRestfulInteraction;
