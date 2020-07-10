const { BackboneElementSchema } = require('./BackboneElement');
const { LinkTypeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { PatientLinkSchema } = require('./allSchemaHeaders.js');

PatientLinkSchema.add(BackboneElementSchema);
PatientLinkSchema.remove('id');
PatientLinkSchema.add({
  other: ReferenceSchema,
  type: LinkTypeSchema,
});

module.exports.PatientLinkSchema = PatientLinkSchema;
