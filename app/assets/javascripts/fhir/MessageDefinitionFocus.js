const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { ResourceTypeSchema } = require('./ResourceType');

const MessageDefinitionFocusSchema = BackboneElementSchemaFunction({
  code: ResourceTypeSchema,
  profile: PrimitiveCanonicalSchema,
  min: PrimitiveUnsignedIntSchema,
  max: PrimitiveStringSchema,
  typeName: { type: String, default: 'MessageDefinitionFocus' },
  _type: { type: String, default: 'FHIR::MessageDefinitionFocus' },
});

class MessageDefinitionFocus extends mongoose.Document {
  constructor(object) {
    super(object, MessageDefinitionFocusSchema);
    this.typeName = 'MessageDefinitionFocus';
    this._type = 'FHIR::MessageDefinitionFocus';
  }
}

module.exports.MessageDefinitionFocusSchema = MessageDefinitionFocusSchema;
module.exports.MessageDefinitionFocus = MessageDefinitionFocus;
