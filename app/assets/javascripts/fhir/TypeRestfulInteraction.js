const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const TypeRestfulInteractionSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'TypeRestfulInteraction' },
  _type: { type: String, default: 'FHIR::TypeRestfulInteraction' },
});

class TypeRestfulInteraction extends mongoose.Document {
  constructor(object) {
    super(object, TypeRestfulInteractionSchema);
    this.typeName = 'TypeRestfulInteraction';
    this._type = 'FHIR::TypeRestfulInteraction';
  }
}

module.exports.TypeRestfulInteractionSchema = TypeRestfulInteractionSchema;
module.exports.TypeRestfulInteraction = TypeRestfulInteraction;
