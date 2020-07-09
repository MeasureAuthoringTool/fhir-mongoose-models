const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ListEntrySchema } = require('./allSchemaHeaders.js');

ListEntrySchema.add(BackboneElementSchema);
ListEntrySchema.remove('id');
ListEntrySchema.add({
  flag: CodeableConceptSchema,
  deleted: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  item: ReferenceSchema,
});

module.exports.ListEntrySchema = ListEntrySchema;
