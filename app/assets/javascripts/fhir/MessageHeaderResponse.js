const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { ResponseTypeSchema } = require('./ResponseType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MessageHeaderResponseSchema = BackboneElementSchemaFunction({
   identifier : String,
   code : ResponseTypeSchema,
   details : ReferenceSchema,
   fhirTitle: { type: String, default: 'MessageHeaderResponse' },
});

class MessageHeaderResponse extends mongoose.Document {
  constructor(object) {
    super(object, MessageHeaderResponseSchema);
    this._type = 'FHIR::MessageHeaderResponse';
  }
};


module.exports.MessageHeaderResponseSchema = MessageHeaderResponseSchema;
module.exports.MessageHeaderResponse = MessageHeaderResponse;
