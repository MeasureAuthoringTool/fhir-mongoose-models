const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { MessageHeaderDestinationSchema } = require('./MessageHeaderDestination');
const { MessageHeaderResponseSchema } = require('./MessageHeaderResponse');
const { MessageHeaderSourceSchema } = require('./MessageHeaderSource');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const MessageHeaderSchema = DomainResourceSchemaFunction({
  eventCoding: CodingSchema,
  eventUri: PrimitiveUriSchema,
  destination: [MessageHeaderDestinationSchema],
  sender: ReferenceSchema,
  enterer: ReferenceSchema,
  author: ReferenceSchema,
  source: MessageHeaderSourceSchema,
  responsible: ReferenceSchema,
  reason: CodeableConceptSchema,
  response: MessageHeaderResponseSchema,
  focus: [ReferenceSchema],
  definition: PrimitiveCanonicalSchema,
  typeName: { type: String, default: 'MessageHeader' },
  _type: { type: String, default: 'FHIR::MessageHeader' },
});

class MessageHeader extends mongoose.Document {
  constructor(object) {
    super(object, MessageHeaderSchema);
    this.typeName = 'MessageHeader';
    this._type = 'FHIR::MessageHeader';
  }
}

module.exports.MessageHeaderSchema = MessageHeaderSchema;
module.exports.MessageHeader = MessageHeader;
