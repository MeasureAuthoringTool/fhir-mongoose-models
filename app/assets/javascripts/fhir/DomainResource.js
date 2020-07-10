const { ExtensionSchema } = require('./allSchemaHeaders.js');
const { NarrativeSchema } = require('./allSchemaHeaders.js');
const { ResourceSchema } = require('./Resource');
const { DomainResourceSchema } = require('./allSchemaHeaders.js');

DomainResourceSchema.add(ResourceSchema);
DomainResourceSchema.remove('id');
DomainResourceSchema.add({
  text: NarrativeSchema,
  contained: [ResourceSchema],
  extension: [ExtensionSchema],
  modifierExtension: [ExtensionSchema],
});

module.exports.DomainResourceSchema = DomainResourceSchema;
