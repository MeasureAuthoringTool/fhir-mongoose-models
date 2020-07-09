const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ProdCharacteristicSchema } = require('./allSchemaHeaders.js');

ProdCharacteristicSchema.add(BackboneElementSchema);
ProdCharacteristicSchema.remove('id');
ProdCharacteristicSchema.add({
  height: QuantitySchema,
  width: QuantitySchema,
  depth: QuantitySchema,
  weight: QuantitySchema,
  nominalVolume: QuantitySchema,
  externalDiameter: QuantitySchema,
  shape: PrimitiveStringSchema,
  color: [PrimitiveStringSchema],
  imprint: [PrimitiveStringSchema],
  image: [AttachmentSchema],
  scoring: CodeableConceptSchema,
});

module.exports.ProdCharacteristicSchema = ProdCharacteristicSchema;
