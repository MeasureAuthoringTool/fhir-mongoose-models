const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { EndpointStatusSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MimeTypeSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { EndpointSchema } = require('./allSchemaHeaders.js');

EndpointSchema.add(DomainResourceSchema);
EndpointSchema.remove('id');
EndpointSchema.add({
  identifier: [IdentifierSchema],
  status: EndpointStatusSchema,
  connectionType: CodingSchema,
  name: PrimitiveStringSchema,
  managingOrganization: ReferenceSchema,
  contact: [ContactPointSchema],
  period: PeriodSchema,
  payloadType: [CodeableConceptSchema],
  payloadMimeType: [MimeTypeSchema],
  address: PrimitiveUrlSchema,
  header: [PrimitiveStringSchema],
});

module.exports.EndpointSchema = EndpointSchema;
