const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductNameNamePartSchema } = require('./allSchemaHeaders.js');

MedicinalProductNameNamePartSchema.add(BackboneElementSchema);
MedicinalProductNameNamePartSchema.remove('id');
MedicinalProductNameNamePartSchema.add({
  part: PrimitiveStringSchema,
  type: CodingSchema,
});

module.exports.MedicinalProductNameNamePartSchema = MedicinalProductNameNamePartSchema;
