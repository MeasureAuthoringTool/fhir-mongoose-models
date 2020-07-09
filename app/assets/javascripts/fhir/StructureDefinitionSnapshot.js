const { BackboneElementSchema } = require('./BackboneElement');
const { ElementDefinitionSchema } = require('./allSchemaHeaders.js');
const { StructureDefinitionSnapshotSchema } = require('./allSchemaHeaders.js');

StructureDefinitionSnapshotSchema.add(BackboneElementSchema);
StructureDefinitionSnapshotSchema.remove('id');
StructureDefinitionSnapshotSchema.add({
  element: [ElementDefinitionSchema],
});

module.exports.StructureDefinitionSnapshotSchema = StructureDefinitionSnapshotSchema;
