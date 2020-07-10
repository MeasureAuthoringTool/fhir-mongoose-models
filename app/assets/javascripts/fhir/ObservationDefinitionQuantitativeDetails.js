const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { ObservationDefinitionQuantitativeDetailsSchema } = require('./allSchemaHeaders.js');

ObservationDefinitionQuantitativeDetailsSchema.add(BackboneElementSchema);
ObservationDefinitionQuantitativeDetailsSchema.remove('id');
ObservationDefinitionQuantitativeDetailsSchema.add({
  customaryUnit: CodeableConceptSchema,
  unit: CodeableConceptSchema,
  conversionFactor: PrimitiveDecimalSchema,
  decimalPrecision: PrimitiveIntegerSchema,
});

module.exports.ObservationDefinitionQuantitativeDetailsSchema = ObservationDefinitionQuantitativeDetailsSchema;
