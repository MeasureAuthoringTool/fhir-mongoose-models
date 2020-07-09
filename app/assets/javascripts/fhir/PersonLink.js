const { BackboneElementSchema } = require('./BackboneElement');
const { IdentityAssuranceLevelSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { PersonLinkSchema } = require('./allSchemaHeaders.js');

PersonLinkSchema.add(BackboneElementSchema);
PersonLinkSchema.remove('id');
PersonLinkSchema.add({
  target: ReferenceSchema,
  assurance: IdentityAssuranceLevelSchema,
});

module.exports.PersonLinkSchema = PersonLinkSchema;
