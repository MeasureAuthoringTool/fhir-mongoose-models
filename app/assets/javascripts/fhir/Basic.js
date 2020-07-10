const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { BasicSchema } = require('./allSchemaHeaders.js');

BasicSchema.add(DomainResourceSchema);
BasicSchema.remove('id');
BasicSchema.add({
  identifier: [IdentifierSchema],
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  created: PrimitiveDateSchema,
  author: ReferenceSchema,
});

module.exports.BasicSchema = BasicSchema;
