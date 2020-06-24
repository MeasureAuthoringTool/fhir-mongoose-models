const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { DomainResourceSchema } = require('./DomainResource');
const { MessageHeaderDestinationSchema } = require('./MessageHeaderDestination');
const { MessageHeaderResponseSchema } = require('./MessageHeaderResponse');
const { MessageHeaderSourceSchema } = require('./MessageHeaderSource');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MessageHeaderSchema = DomainResourceSchemaFunction({
   eventCoding : CodingSchema,
   eventUri : String,
   destination : [MessageHeaderDestinationSchema],
   sender : ReferenceSchema,
   enterer : ReferenceSchema,
   author : ReferenceSchema,
   source : MessageHeaderSourceSchema,
   responsible : ReferenceSchema,
   reason : CodeableConceptSchema,
   response : MessageHeaderResponseSchema,
   focus : [ReferenceSchema],
   definition : String,
   fhirTitle: { type: String, default: 'MessageHeader' },
});

class MessageHeader extends mongoose.Document {
  constructor(object) {
    super(object, MessageHeaderSchema);
    this._type = 'FHIR::MessageHeader';
  }
};


module.exports.MessageHeaderSchema = MessageHeaderSchema;
module.exports.MessageHeader = MessageHeader;
