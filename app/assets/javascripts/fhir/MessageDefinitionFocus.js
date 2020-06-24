const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ResourceTypeSchema } = require('./ResourceType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MessageDefinitionFocusSchema = BackboneElementSchemaFunction({
   code : ResourceTypeSchema,
   profile : String,
   min : Number,
   max : String,
   fhirTitle: { type: String, default: 'MessageDefinitionFocus' },
});

class MessageDefinitionFocus extends mongoose.Document {
  constructor(object) {
    super(object, MessageDefinitionFocusSchema);
    this._type = 'FHIR::MessageDefinitionFocus';
  }
};


module.exports.MessageDefinitionFocusSchema = MessageDefinitionFocusSchema;
module.exports.MessageDefinitionFocus = MessageDefinitionFocus;
