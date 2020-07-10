const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ObservationDataTypeSchema } = require('./allSchemaHeaders.js');
const { ObservationDefinitionQualifiedIntervalSchema } = require('./allSchemaHeaders.js');
const { ObservationDefinitionQuantitativeDetailsSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ObservationDefinitionSchema } = require('./allSchemaHeaders.js');

ObservationDefinitionSchema.add(DomainResourceSchema);
ObservationDefinitionSchema.remove('id');
ObservationDefinitionSchema.add({
  category: [CodeableConceptSchema],
  code: CodeableConceptSchema,
  identifier: [IdentifierSchema],
  permittedDataType: [ObservationDataTypeSchema],
  multipleResultsAllowed: PrimitiveBooleanSchema,
  method: CodeableConceptSchema,
  preferredReportName: PrimitiveStringSchema,
  quantitativeDetails: ObservationDefinitionQuantitativeDetailsSchema,
  qualifiedInterval: [ObservationDefinitionQualifiedIntervalSchema],
  validCodedValueSet: ReferenceSchema,
  normalCodedValueSet: ReferenceSchema,
  abnormalCodedValueSet: ReferenceSchema,
  criticalCodedValueSet: ReferenceSchema,
});

module.exports.ObservationDefinitionSchema = ObservationDefinitionSchema;
