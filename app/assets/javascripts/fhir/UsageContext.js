const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');

UsageContextSchema.add(ElementSchema);
UsageContextSchema.remove('id');
UsageContextSchema.add({
  code: CodingSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueQuantity: QuantitySchema,
  valueRange: RangeSchema,
  valueReference: ReferenceSchema,
});

module.exports.UsageContextSchema = UsageContextSchema;
