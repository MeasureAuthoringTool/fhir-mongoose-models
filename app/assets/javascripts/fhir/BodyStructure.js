const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { BodyStructureSchema } = require('./allSchemaHeaders.js');

BodyStructureSchema.add(DomainResourceSchema);
BodyStructureSchema.remove('id');
BodyStructureSchema.add({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  morphology: CodeableConceptSchema,
  location: CodeableConceptSchema,
  locationQualifier: [CodeableConceptSchema],
  description: PrimitiveStringSchema,
  image: [AttachmentSchema],
  patient: ReferenceSchema,
});

module.exports.BodyStructureSchema = BodyStructureSchema;
