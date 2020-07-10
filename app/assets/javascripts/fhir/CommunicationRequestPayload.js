const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CommunicationRequestPayloadSchema } = require('./allSchemaHeaders.js');

CommunicationRequestPayloadSchema.add(BackboneElementSchema);
CommunicationRequestPayloadSchema.remove('id');
CommunicationRequestPayloadSchema.add({
  contentString: PrimitiveStringSchema,
  contentAttachment: AttachmentSchema,
  contentReference: ReferenceSchema,
});

module.exports.CommunicationRequestPayloadSchema = CommunicationRequestPayloadSchema;
