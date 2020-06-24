const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ContactPointSchema } = require('./ContactPoint');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MessageHeaderSourceSchema = BackboneElementSchemaFunction({
   name : String,
   software : String,
   version : String,
   contact : ContactPointSchema,
   endpoint : String,
   fhirTitle: { type: String, default: 'MessageHeaderSource' },
});

class MessageHeaderSource extends mongoose.Document {
  constructor(object) {
    super(object, MessageHeaderSourceSchema);
    this._type = 'FHIR::MessageHeaderSource';
  }
};


module.exports.MessageHeaderSourceSchema = MessageHeaderSourceSchema;
module.exports.MessageHeaderSource = MessageHeaderSource;
