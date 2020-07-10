const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClaimRelatedSchema } = require('./allSchemaHeaders.js');

ClaimRelatedSchema.add(BackboneElementSchema);
ClaimRelatedSchema.remove('id');
ClaimRelatedSchema.add({
  claim: ReferenceSchema,
  relationship: CodeableConceptSchema,
  reference: IdentifierSchema,
});

module.exports.ClaimRelatedSchema = ClaimRelatedSchema;
